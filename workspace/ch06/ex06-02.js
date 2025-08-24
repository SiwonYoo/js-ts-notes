"use strict";
// 기본 타입
(() => {
    let str = "hello";
    let age = 9;
    let done = true;
    // done = "false"; // Type 'string' is not assignable to type 'boolean'.ts(2322)
    done = false;
    let nullVal = null;
    let emptyVal;
    let todo = { title: "typescript 공부", done: false };
    let todoList = ["JavaScript", "TypeScript"]; // 문자열로 구성된 배열
    let todoList2 = ["React", "Next.js"]; // 문자열로 구성된 배열
    // tuple: 길이가 고정되고 각 요소의 타입이 정의된 타입
    let items = ["문자열", 10];
    // any
    let userName = "이일구";
    userName = 219; // 모든 타입이 허용됨
    // unknown
    let userName2 = "TSping";
    userName2 = 540; // 모든 타입이 허용됨
    userName = "바로핑";
    userName2 = "키키핑";
    console.log(userName.toUpperCase()); // 바로핑
    // unknown 타입은 사용 전 타입 검사가 필수
    // console.log(userName2.toUpperCase()); // 'userName2' is of type 'unknown'.ts(18046)
    if (typeof userName2 === "string") {
        // 타입 가드
        console.log(userName2.toUpperCase()); // 키키핑
    }
})();
