"use strict";
/*
기본값 매개변수(Default parameters)
*/
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
console.log(sum(50));
// b가 전달되지 않을 경우에는 a만 반환
// 1. if 문 이용 (b가 undefined이면 a 반환)
function sum1(a, b) {
    if (b === undefined) {
        return a;
    }
    else {
        return a + b;
    }
}
console.log("1.", sum1(10, 20));
console.log("1.", sum1(50));
// 2. if 문 이용 (b가 undefined이면 b = 0 할당)
function sum2(a, b) {
    if (b === undefined) {
        b = 0;
    }
    return a + b;
}
console.log("2.", sum2(10, 20));
console.log("2.", sum2(50));
// 3. || 이용 (b가 falsy면 0 할당)
function sum3(a, b) {
    b = b || 0;
    return a + b;
}
console.log("3.", sum3(10, 20));
console.log("3.", sum3(50));
console.log("3.", sum3(50, "")); // falsy 값이면 전부 0으로 들어감
// 4. 기본값 매개변수 이용 (b의 인자가 전달되지 않으면 b=0)
function sum4(a, b = 0) {
    return a + b;
}
console.log("4.", sum4(10, 20));
console.log("4.", sum4(50));
console.log("4.", sum4(50, undefined)); // undefined도 0으로 들어감
