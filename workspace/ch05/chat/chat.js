/**
 * 채팅 애플리케이션의 메인 모듈
 * 소켓 통신과 채팅방 관리 기능을 구현
 */
import { socket, sendMsg, createRoom, joinRoom, leaveRoom, getRooms, getRoomInfo, } from "./yongchat.js";
/** 사용자 ID 입력 필드 */
const userId = document.querySelector('[name="userId"]');
/** 채팅방 생성 관련 DOM 요소들 */
const roomId = document.querySelector('[name="roomId"]');
const roomName = document.querySelector('[name="roomName"]');
const createRoomBtn = document.querySelector("#createRoomBtn");
/** 채팅방 입장 관련 DOM 요소들 */
const enterRoomId = document.querySelector('[name="enterRoomId"]');
const nickName = document.querySelector('[name="nickName"]');
const roomInfoBtn = document.querySelector("#roomInfoBtn");
const joinRoomBtn = document.querySelector("#joinRoomBtn");
const leaveRoomBtn = document.querySelector("#leaveRoomBtn");
/** 채팅방 정보 표시 및 조회 관련 DOM 요소들 */
const connectedRoom = document.querySelector("#connectedRoom");
const roomsBtn = document.querySelector("#roomsBtn");
/** 메시지 입력 관련 DOM 요소들 */
const msgInput = document.querySelector('[name="message"]');
const sendBtn = document.querySelector("#sendBtn");
const chatMessages = document.querySelector("#chatMessages");
/**
 * 채팅방 생성 이벤트 핸들러
 * 새로운 채팅방을 생성합니다.
 */
createRoomBtn.addEventListener("click", async () => {
    // TODO 채팅방 생성 함수 호출
    const params = {
        roomId: roomId.value,
        user_id: userId.value,
        roomName: roomName.value,
        hostName: "멋사",
    };
    const result = await createRoom(params);
    console.log("채팅방 생성 요청 결과", result);
});
/**
 * 채팅방 입장 이벤트 핸들러
 * @async
 * 사용자가 선택한 채팅방에 입장합니다.
 */
joinRoomBtn.addEventListener("click", async () => {
    // TODO 채팅방 입장 함수 호출
    const params = {
        roomId: enterRoomId.value,
        user_id: userId.value,
        nickName: nickName.value,
    };
    const result = await joinRoom(params);
    console.log("채팅방 참여 응답", result);
    if (result.ok) {
        connectedRoom.textContent = result.roomInfo.roomName;
    }
});
/**
 * 채팅방 퇴장 이벤트 핸들러
 * 현재 접속 중인 채팅방에서 나가고 UI를 초기화
 */
leaveRoomBtn.addEventListener("click", () => {
    // TODO 채팅방 퇴장 함수 호출
    leaveRoom();
    connectedRoom.textContent = "없음";
});
/**
 * 전체 채팅방 목록 조회 이벤트 핸들러
 * @async
 * 서버에서 전체 채팅방 목록을 가져와서 콘솔에 출력합니다.
 */
roomsBtn.addEventListener("click", async () => {
    // TODO 전체 채팅방 조회 함수 호출
    const rooms = await getRooms();
    console.log(rooms);
});
/**
 * 현재 채팅방 정보 조회 이벤트 핸들러
 * @async
 * 선택된 채팅방의 상세 정보를 조회하여 콘솔에 출력합니다.
 */
roomInfoBtn.addEventListener("click", async () => {
    // TODO 채팅방 정보 조회 함수 호출
    const roomInfo = await getRoomInfo(enterRoomId.value);
    console.log(roomInfo);
});
/**
 * 메시지 전송 버튼 클릭 이벤트 핸들러
 * 입력된 메시지를 전송하고 입력 필드를 초기화합니다.
 */
sendBtn?.addEventListener("click", () => {
    // TODO 메시지 전송 함수 호출
    sendMsg(msgInput.value);
    msgInput.value = "";
    msgInput.focus();
});
/**
 * 메시지 입력 필드 키보드 이벤트 핸들러
 * Enter 키 입력 시 메시지를 전송하고 입력 필드를 초기화합니다.
 */
msgInput?.addEventListener("keydown", (e) => {
    // TODO 메시지 전송 함수 호출
    if (e.key === "Enter") {
        sendMsg(msgInput.value);
        msgInput.value = "";
        msgInput.focus();
    }
});
/**
 * 페이지 이탈 시 채팅 기록 저장
 * pagehide 이벤트 발생 시(새로고침, 브라우저 닫기, 뒤로가기, 탭 전환 등)
 * 현재까지의 채팅 기록을 로컬 스토리지에 저장합니다.
 */
window.addEventListener("pagehide", () => {
    // TODO 로컬 스토리지에 채팅 기록 저장
    localStorage.setItem("history", JSON.stringify(chatHistory));
});
/** 로컬 스토리지에서 채팅 기록을 불러옵니다. */
const chatHistory = JSON.parse(localStorage.getItem("history") || "[]");
console.log(chatHistory);
/**
 * 메시지 수신 이벤트 핸들러
 * 새로운 메시지가 수신되면 채팅 기록을 저장합니다.
 */
socket.on("message", (data) => {
    // TODO 채팅 메시지 추가
    chatHistory.push(data);
    console.log(data);
    const chatMessages = document.getElementById("chatMessages");
    const newP = document.createElement("p");
    const msg = document.createTextNode(`${data.nickName}: ${data.msg}`);
    newP.appendChild(msg);
    chatMessages?.appendChild(newP);
});
