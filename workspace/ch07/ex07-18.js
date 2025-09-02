"use strict";
// 내장 객체 Array - some(), every()
(() => {
    const arr = [1, 2, 3];
    // 2의 배수가 하나라도 있나?
    const hasEven = arr.some((item) => item % 2 === 0); // true
    // 전부 2의 배수인가?
    const allEven = arr.every((item) => item % 2 === 0); // false
    console.log(hasEven, allEven);
})();
