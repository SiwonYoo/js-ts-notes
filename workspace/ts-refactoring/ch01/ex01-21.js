"use strict";
/*
반복문 - for문
*/
(() => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        // 초기화, 조건식, 증감식
        sum += i; // 실행할 코드
    }
    console.log("합계", sum);
    // 1부터 몇까지 더하면 10000이 넘을까? (while)
    sum = 0;
    let count = 1;
    while (sum < 1000) {
        sum += count;
        count++;
    }
    console.log(--count, sum);
    // 1부터 10까지 출력
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    // 1부터 10까지 홀수의 합계 출력. 25
    let sumOdd = 0;
    for (let i = 1; i <= 10; i += 2) {
        sumOdd += i;
    }
    console.log("홀수 합계", sumOdd);
    // 1부터 10까지 짝수의 합계 출력. 30
    let sumEven = 0;
    for (let i = 2; i <= 10; i += 2) {
        sumEven += i;
    }
    console.log("짝수 합계", sumEven);
})();
