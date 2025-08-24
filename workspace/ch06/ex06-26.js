"use strict";
// 타입 가드 - 속성 값으로 타입 체크
(() => {
    const user1 = {
        name: "하루",
        age: 5,
        admin: false,
    };
    const user2 = {
        name: "나무",
        admin: true,
        level: 2,
    };
    helloUser(user1); // 안녕하세요. 5살 하루 회원님.
    helloUser(user2); // 안녕하세요. 레벨 2 나무 관리자님.
    // User 타입이나 AdminUser 타입을 받아서 각각의 타입에 맞는 코드를 실행하는 함수
    function helloUser(user) {
        // (parameter) user: User | AdminUser
        if (user.admin === true) {
            // AdminUser만 조건 만족
            console.log(`안녕하세요. 레벨 ${user.level} ${user.name} 관리자님.`); // (parameter) user: AdminUser
        }
        else {
            // User | AdminUser 중 AdminUser이 제외되었기 때문에 User만 남음
            console.log(`안녕하세요. ${user.age}살 ${user.name} 회원님.`); // (parameter) user: User
        }
    }
})();
