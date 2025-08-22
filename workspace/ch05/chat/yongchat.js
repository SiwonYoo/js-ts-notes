// npm i @types/socket.io-client 필요
export const socket = io("ws://fesp-api.koyeb.app/febc13-chat");
/**
 * 소켓 연결 이벤트 리스너
 * @description 서버와의 소켓 연결이 성공적으로 이루어졌을 때 호출됩니다.
 * 연결 성공 시 전체 채팅방 목록을 요청하여 콘솔에 출력합니다.
 */
socket.on("connect", () => {
    console.log("서버와 연결됨");
    socket.emit("rooms", (rooms) => {
        console.log("전체 채팅방 목록:", rooms);
    });
});
/**
 * 소켓 연결 종료 이벤트 리스너
 * @description 서버와의 소켓 연결이 종료되었을 때 호출됩니다.
 * 네트워크 오류나 서버 종료 등의 상황에서 발생할 수 있습니다.
 */
socket.on("disconnect", () => {
    console.log("서버 연결 종료");
});
/**
 * 새로운 채팅방을 생성하는 함수
 * @param params - 채팅방 생성에 필요한 파라미터
 * @returns Promise<CreateRoomResponse> - 채팅방 생성 결과
 * @throws {Error} user_id나 roomName이 비어있을 경우 에러 발생
 */
export function createRoom(params) {
    if (!params.user_id.trim()) {
        throw new Error("user_id가 없습니다.");
    }
    if (!params.roomName.trim()) {
        throw new Error("roomName이 없습니다.");
    }
    return new Promise((resolve, reject) => {
        socket.emit("createRoom", params, (res) => {
            resolve(res);
        });
    });
}
/**
 * 기존 채팅방에 입장하는 함수
 * @param params - 채팅방 입장에 필요한 파라미터
 * @returns Promise<JoinRoomResponse> - 채팅방 입장 결과
 * @throws {Error} roomId, user_id, nickName이 비어있을 경우 에러 발생
 */
export function joinRoom(params) {
    if (!params.roomId.trim()) {
        throw new Error("roomId가 없습니다.");
    }
    if (!params.user_id.trim()) {
        throw new Error("user_id가 없습니다.");
    }
    return new Promise((resolve, reject) => {
        socket.emit("joinRoom", params, (res) => {
            resolve(res);
        });
    });
}
/**
 * 모든 채팅방 목록을 조회하는 함수
 * @returns Promise<RoomsResponse> - 전체 채팅방 목록
 */
export function getRooms() {
    return new Promise((resolve, reject) => {
        socket.emit("rooms", (rooms) => {
            resolve(rooms);
        });
    });
}
/**
 * 특정 채팅방의 정보를 조회하는 함수
 * @param roomId - 조회할 채팅방의 ID
 * @returns Promise<RoomInfo> - 채팅방 정보
 */
export function getRoomInfo(roomId) {
    return new Promise((resolve, reject) => {
        socket.emit("roomInfo", roomId, (roomInfo) => {
            resolve(roomInfo);
        });
    });
}
/**
 * 현재 채팅방에서 나가는 함수
 * @description 사용자가 현재 참여 중인 채팅방을 나갈 때 호출되는 함수입니다.
 * 서버에 leaveRoom 이벤트를 발생시켜 채팅방 퇴장을 알립니다.
 */
export function leaveRoom() {
    socket.emit("leaveRoom");
}
/**
 * 현재 채팅방에 메시지를 전송하는 함수
 * @param msg - 전송할 메시지 내용
 * @description 사용자가 입력한 메시지를 현재 참여 중인 채팅방에 전송합니다.
 * 빈 문자열이나 공백만 있는 메시지는 전송되지 않습니다.
 */
export function sendMsg(msg) {
    if (msg.trim()) {
        socket.emit("message", msg);
    }
}
/**
 * 채팅 메시지 수신 이벤트 리스너
 * @description 다른 사용자가 보낸 채팅 메시지를 수신할 때 호출됩니다.
 * @param data - 수신된 채팅 메시지 정보 (발신자 닉네임과 메시지 내용)
 */
// socket.on("message", (data: ChatMessage) => {
//   console.log(`${data.nickName}: ${data.msg}`);
// });
export function getMsg() {
    let chatMessage = "";
    socket.on("message", (data) => {
        chatMessage = `${data.nickName}: ${data.msg}`;
    });
    return chatMessage;
}
/**
 * 채팅방 목록 수신 이벤트 리스너
 * @description 서버로부터 전체 채팅방 목록을 수신할 때 호출됩니다.
 * @param rooms - 전체 채팅방 정보를 담고 있는 객체
 */
socket.on("rooms", (rooms) => {
    console.log("채팅방 목록 수신:", rooms);
});
/**
 * 채팅방 멤버 목록 수신 이벤트 리스너
 * @description 현재 참여 중인 채팅방의 멤버 목록이 업데이트될 때 호출됩니다.
 * @param members - 현재 채팅방의 모든 멤버 정보를 담고 있는 객체
 */
socket.on("members", (members) => {
    console.log("현재 채팅방 멤버:", members);
});
