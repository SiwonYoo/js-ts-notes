"use strict";
/*
반복문 - break, continue
*/
(() => {
    const n = 1;
    const m = 10;
    // n ~ m 까지의 정수 중에서 첫 번째 짝수를 찾아서 출력하세요.
    for (let i = n; i <= m; i++) {
        if (i % 2 == 0) {
            console.log(i);
            break;
        }
    }
    // n부터 m까지 홀수와 짝수를 구분해서 출력하세요.
    for (let i = n; i < m + 1; i++) {
        if (i % 2 === 1) {
            console.log("홀수:", i);
            continue;
        }
        console.log("짝수:", i);
    }
})();
