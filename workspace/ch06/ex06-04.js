"use strict";
// 선택적 파라미터(optional parameter)
(() => {
    function user(name, age) {
        // age를 생략해도 됨(undefined 전달)
        console.log(name, age);
    }
    user("하루", 5); // 하루 5
    user("나무"); // 나무 undefined
})();
