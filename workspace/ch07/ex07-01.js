"use strict";
// 주요 내장 함수 - parseInt, parseFloat
(() => {
    console.log(parseInt("100")); // 100
    console.log(parseInt("100", 10)); // 100
    console.log(parseInt("100", 2)); // 4
    console.log(parseInt("100", 16)); // 256
    console.log(parseInt("99.876")); // 99 // 소수는 버림
    console.log(parseFloat("99.876")); // 99.876
})();
