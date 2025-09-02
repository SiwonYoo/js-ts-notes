"use strict";
// 내장 객체 - RegExp
(() => {
    const regex = /^[a-z0-9]+$/i; // 영문자, 숫자만 포함된 1글자 이상의 문자열인지 확인
    console.log(regex.test("Hello123")); // true
    const emailExp = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
    const passwordExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // 영문, 숫자 조합 8자리 이상
    const nicknameExp = /^[가-힣a-zA-Z0-9]{2,10}$/; // 한글, 영문, 숫자 2~10자리
    const phoneExp = /^01\d{1}-\d{3,4}-\d{4}$/; // 01로 시작하고 3자리-3~4자리-4자리 숫자
    console.log(emailExp.test("uzoolove@gmail.com")); // true
    console.log(passwordExp.test("ab123456")); // true
    console.log(nicknameExp.test("하루")); // true
    console.log(phoneExp.test("010-1234-5678")); // true
})();
