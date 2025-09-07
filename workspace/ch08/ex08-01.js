"use strict";
// 에러 핸들링 - Error 객체
(() => {
    function f1() {
        const err = new Error("에러 발생");
        console.log(err.name); // Error
        console.log(err.message); // 에러 발생
        console.log(err.stack);
        // Error: 에러 발생
        // at f1 (/Users/yusiwon/likelion-bootcamp/febc13/01_js/JS/workspace/ch08/ex08-01.ts:5:17)
        // at f2 (/Users/yusiwon/likelion-bootcamp/febc13/01_js/JS/workspace/ch08/ex08-01.ts:12:5)
    }
    function f2() {
        f1();
    }
    f2();
})();
