"use strict";
// 에러 핸들링 - try...catch 문
// ex08-02.ts 복사
(() => {
    function f1() {
        try {
            const fn = new Function("x", "y", "retrun x + y"); // SyntaxError: Unexpected identifier 'x'
            console.log(fn(10, 20)); // 실행 안 됨
        }
        catch (err) {
            // 기본적으로 catch에 전달되는 에러는 unkown 타입이 됨
            if (err instanceof Error) {
                // (local var) err: unknown // unknown 타입은 타입 가드가 필요
                console.error("에러 발생", err.message); // (local var) err: Error
            }
        }
    }
    function f2() {
        f1();
    }
    f2();
    console.log("프로그램 종료."); // 실행됨 (try catch 문으로 에러를 잡았기 때문)
})();
