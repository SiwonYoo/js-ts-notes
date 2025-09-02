"use strict";
// 주요 내장 함수 - setTimeout
(() => {
    console.log("시작");
    setTimeout("console.log(100)", 3000);
    // 취소할 타이머
    const timerId = setTimeout(() => {
        console.log("3초 후에 실행됩니다.");
    }, 1000 * 3);
    setTimeout((a, b) => {
        console.log("3초 후에 실행됩니다", a + b);
    }, 1000 * 3, 10, 20);
    console.log("종료");
    // timeout 작업 취소
    clearTimeout(timerId);
})();
