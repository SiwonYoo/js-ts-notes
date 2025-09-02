"use strict";
// 내장 객체 Array - indexOf(), lastIndexOf()
(() => {
    const arr = [1, 3, 5, 8, 9, 3, 4, 5];
    console.log("첫번째 3의 위치", arr.indexOf(3)); // 1
    console.log("마지막 3의 위치", arr.lastIndexOf(3)); // 5
    console.log("첫번째 2의 위치", arr.indexOf(2)); // -1
    console.log("마지막 2의 위치", arr.lastIndexOf(2)); // -1
    console.log("lastIndexOf-fromIndex test 1.", arr.lastIndexOf(3, 4)); // 1
    console.log("lastIndexOf-fromIndex test 2.", arr.lastIndexOf(3, 5)); // 5
})();
