"use strict";
// 비동기 함수 - Promise 사용
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 Promise 사용
// ex08-07-03.ts 복사
(() => {
    function f1( /* resolve: (result: string) => void */) {
        return new Promise((resolve, reject) => {
            console.log("\t\t3. f1 호출됨.");
            const delay = Math.floor(Math.random() * 1000 * 10);
            console.log(`\t\t4. ${delay}ms 동안 작업중...`);
            setTimeout(() => {
                console.log("\t\tf1 작업 완료.", delay);
                resolve("f1 작업 결과!"); // Promise를 성공 상태(fulfilled) 로 만들고, 그 결과 값("f1 작업 결과!")을 then()에 전달한다.
            }, delay);
            console.log("\t\t5. f1 리턴됨.");
        });
        /*     console.log("\t\t3. f1 호출됨.");
        const delay = Math.floor(Math.random() * 1000 * 10);
    
        console.log(`\t\t4. ${delay}ms 동안 작업중...`);
    
        setTimeout(() => {
          console.log("\t\tf1 작업 완료.", delay);
          resolve("f1 작업 결과!");
        }, delay);
        console.log("\t\t5. f1 리턴됨."); */
    }
    function test() {
        console.log("\t2. test 호출됨.");
        /* f1((result) => {
          console.log("\t8. f1 작업이 완료된 후에 호출.", result);
        }); */
        f1().then((result) => {
            // result = "f1 작업 결과!"
            // then은 Promise 객체가 갖고 있는 메서드
            console.log("\t8. 작업이 완료된 후에 호출.", result);
        });
        console.log("\t6. test 리턴됨");
    }
    console.log("1. 작업 시작.");
    test();
    console.log("7. 작업 종료.");
})();
