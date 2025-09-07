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
        // f1()
        //   .then(f1)
        //   .then(f1)
        //   .then((result) => {
        //     console.log("\t4. 세 개의 f1 작업이 모두 성공한 후에 호출.", result);
        //   })
        //   .catch((reason) => {
        //     console.log("\t4. 셋 중 하나라도 실패했을 때 호출", reason);
        //   });
        // 동시에 실행하고 싶을 때 (순서 보장X)
        f1()
            .then((result) => {
            console.log("\ta. 독립적인 실행 성공", result);
        })
            .catch((reason) => {
            console.log("\ta. 독립적인 실행 실패", reason);
        });
        f1()
            .then((result) => {
            console.log("\tb. 독립적인 실행 성공", result);
        })
            .catch((reason) => {
            console.log("\tb. 독립적인 실행 실패", reason);
        });
        f1()
            .then((result) => {
            console.log("\tc. 독립적인 실행 성공", result);
        })
            .catch((reason) => {
            console.log("\tc. 독립적인 실행 실패", reason);
        });
    }
    console.log("1. 작업 시작.");
    test();
    console.log("3. 작업 종료.");
})();
