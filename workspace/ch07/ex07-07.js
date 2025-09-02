"use strict";
// 내장 객체 - String
(() => {
    let msg = "  Hello World ";
    console.log(`[${msg}]`);
    // 앞뒤 공백 제거
    msg = msg.trim();
    console.log(`[${msg}]`); // [Hello World]
    // 지정한 위치의 문자를 반환
    console.log(msg.charAt(8)); // r
    console.log(msg.at(8)); // r
    console.log(msg.at(-2)); // l(뒤에서 2번째 위치의 문자 반환)
    // 지정한 위치의 문자 유니코드 값 반환
    console.log(msg.charCodeAt(0)); // 72
    // 지정한 문자의 위치 반환(앞에서부터 찾은 첫 번째 위치 반환)
    console.log(msg.indexOf("o")); // 4
    // 지정한 문자의 위치 반환(뒤에서부터 찾은 첫 번째 위치 반환)
    console.log(msg.lastIndexOf("o")); // 7
    // 지정한 문자열 포함 여부 확인
    console.log(msg.includes("Hello")); // true
    // 지정한 문자열로 시작하는지 여부 확인
    console.log(msg.startsWith("H")); // true
    // 지정한 문자열로 끝나는지 여부 확인
    console.log(msg.endsWith("d")); // true
    // 지정한 문자열을 연결해서 반환
    console.log(msg.concat(" and", " JavaScript")); // Hello World and JavaScript
    // 지정한 문자열을 찾아서 다른 문자열로 치환해서 반환(첫번째 찾은 문자열만)
    console.log(msg.replace("Hello", "Hi")); // Hi World
    // 지정한 문자열을 찾아서 다른 문자열로 치환해서 반환(모든 문자열)
    console.log(msg.replaceAll("o", "O")); // HellO WOrld
    // 지정한 횟수만큼 문자열을 반복하여 연결해서 반환
    console.log(msg.repeat(3)); // Hello WorldHello WorldHello World
    // 지정한 문자열을 지정한 구분자로 분리하여 배열로 반환
    console.log(msg.split(" ")); // ['Hello', 'World']
    // 지정한 위치에서 지정한 길이만큼 문자열을 반환
    console.log(msg.slice(0, 3)); // Hel(0번째 위치부터 3번째 위치 이전까지 반환(0~2))
    console.log(msg.slice(7, 9)); // or(7번째 위치부터 9번째 위치 이전까지 반환(7~8))
    console.log(msg.slice(-3)); // rld(뒤에서 3번째 위치부터 끝까지 반환)
    console.log(msg.slice(7, -1)); // orld(7번째 위치부터 뒤에서 1번째 위치 이전까지 반환)
    // 모든 문자열을 소문자로 변환해서 반환
    console.log(msg.toLowerCase()); // hello world
    // 모든 문자열을 대문자로 변환해서 반환
    console.log(msg.toUpperCase()); // HELLO WORLD
})();
