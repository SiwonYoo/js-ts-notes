"use strict";
// 에러 핸들링 - 에러 전달(throw)
(() => {
    function f1() {
        const fn = new Function("x", "y", "retrun x + y"); // SyntaxError: Unexpected identifier 'x'
        console.log(fn(10, 20));
    }
    function f2() {
        f1(); // SyntaxError 발생
    }
    try {
        f2(); // SyntaxError 발생
    }
    catch (err) {
        if (err instanceof Error) {
            console.error("에러 발생.", err.message);
        }
    }
    console.log("프로그램 종료.");
})();
