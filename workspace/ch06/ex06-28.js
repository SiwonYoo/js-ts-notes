"use strict";
// 타입 호환
(() => {
    const haru = {
        name: "하루",
    };
    const namu = {
        id: 1,
        name: "나무",
        age: 8,
    };
    // Guest 타입의 member를 매개변수로 받는 welcome 함수
    function welcome(member) {
        console.log(`안녕하세요. ${member.name}님`);
    }
    // welcome 함수에 Guest 타입의 member를 전달해야 하지만 타입 호환이 가능한 타입도 전달 가능
    welcome(haru); // 안녕하세요. 하루님
    // Member는 Guest의 속성이 모두 있으므로 타입 호환이 가능
    welcome(namu); // 안녕하세요. 나무님
    // Member 타입의 member를 매개변수로 받는 welcome 함수
    function welcome2(member) {
        console.log(`안녕하세요. ${member.name}님`);
    }
    // Guest는 Member의 모든 속성을 갖고 있지 않으므로(id와 age가 없음) 타입 호환이 되지 않음
    // welcome2(haru); // Argument of type 'Guest' is not assignable to parameter of type 'Member'.
    welcome2(namu); // 안녕하세요. 나무님
})();
