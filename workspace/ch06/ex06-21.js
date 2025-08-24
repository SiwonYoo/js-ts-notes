"use strict";
// 함수의 타입 추론
(() => {
    // 매개변수의 타입을 지정하지 않으면 num은 암묵적으로 any 타입이 됨
    // tsconfig.json에서 noImplicitAny: true로 설정하면 암묵적 any 타입에 대해서 에러 발생
    // FIXME 매개변수의 타입을 지정해서 암묵적 any 타입이 되지 않도록 하세요.
    function add10(num) {
        return num + 10;
    }
    const result = add10(99.8756);
    console.log(result.toFixed(1)); // 109.9
    // 타입을 생략하고 기본값을 지정하면 기본값의 타입을 따라가도록 타입 추론하고 옵셔널 매개변수(?) 추가
    // 리턴 타입을 생략하면 리턴값의 타입을 따라가도록 타입 추론(number + 20 = number)
    // FIXME 매개변수의 기본값을 지정해서 암묵적 any 타입이 되지 않도록 하세요.
    function add20(num = 0) {
        // (local function) add20(num?: number): number
        return num + 20;
    }
    const result2 = add20(100.12345);
    console.log(result2.toFixed(2)); // 120.12
})();
