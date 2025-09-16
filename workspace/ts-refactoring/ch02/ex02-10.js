"use strict";
/*
  함수 생성 4 (화살표 함수 표현식)
*/
(() => {
    // 기존 함수
    let add = function (x, y) {
        return x + y;
    };
    console.log(add(10, 20)); // 30
    // 화살표 함수
    add = (x, y) => {
        return x + y;
    };
    console.log(add(10, 20)); // 30
    // 화살표 함수 축약
    add = (x, y) => x + y;
    console.log(add(10, 20)); // 30
    // 기존 함수
    let add10 = function (x) {
        return x + 10;
    };
    console.log(add10(100)); // 110
    // 화살표 함수
    add10 = (x) => {
        return x + 10;
    };
    console.log(add10(100)); // 110
    // 화살표 함수 축약
    add10 = (x) => x + 10;
    console.log(add10(100)); // 110
})();
