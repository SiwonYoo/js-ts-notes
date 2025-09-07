"use strict";
// 비동기 함수 - Promise 사용
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 Promise 사용
// 에러 처리 추가
// 체인 방식으로 호출
// ex08-08-02.ts 복사
(() => {
    function f1() {
        return new Promise((resolve, reject) => {
            const delay = Math.floor(Math.random() * 1000 * 5);
            console.log(`\t\t2. ${delay}ms 동안 작업중...`);
            setTimeout(() => {
                if (delay < 3000) {
                    resolve("f1 작업 성공! " + delay);
                }
                else {
                    reject("f1 작업 실패 사유: " + delay);
                }
            }, delay);
        });
    }
    function test() {
        f1()
            .then((result) => {
            console.log("\t4. 작업이 완료된 후에 호출.", result);
        })
            .then(f1)
            .then((result) => {
            console.log("\t5. 작업이 완료된 후에 호출.", result);
        })
            .then(f1)
            .then((result) => {
            console.log("\t6. 작업이 완료된 후에 호출.", result);
        })
            .catch((reason) => {
            console.log("첫번째, 두번째 또는 세번째 작업이 실패한 후 호출", reason);
        })
            // catch 뒤에 then을 계속 이어붙일 수 있음
            .then(f1)
            .then((result) => {
            console.log("\t7. 작업이 완료된 후에 호출.", result);
        })
            .catch((reason) => {
            console.log("네번째 작업이 실패한 후 호출", reason);
        })
            .finally(() => {
            console.log("f1의 성공/실패와 상관없이 항상 호출");
        });
    }
    console.log("1. 작업 시작.");
    test();
    console.log("3. 작업 종료.");
})();
