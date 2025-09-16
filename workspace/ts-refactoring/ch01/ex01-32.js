"use strict";
/*
매개변수를 가진 함수 - 도어락

올바른 비밀번호가 입력되면 문이 열린다.
잘못된 비밀번호가 입력되면 경보음이 울린다.
*/
function doorLock(password) {
    const pwd = 1234;
    if (password === pwd) {
        console.log("문이 열립니다.");
    }
    else {
        console.log("삐! 삐! 삐! 삐!");
    }
}
doorLock(1234);
doorLock(4321);
// 인자값이 없으면 undefined로 넘어감
// js는 문법적 오류는 나지 않음 (강형언어는 인자값이 없을 경우 컴파일 에러)
doorLock();
// 마지막 값만 password와 일치하면 열리도록 함수 설계
// undefined가 들어올 경우 .slice를 사용할 수 없기 때문에 에러가 남
function doorLock2(password) {
    // 방법 1. deault parameter
    const pwd = "1234";
    const subPassword = password?.slice(-pwd.length); // 방법 2. optional chaining (undefined -> slice 안 함)
    if (subPassword === pwd) {
        console.log("문이 열립니다.");
    }
    else {
        console.log("삐! 삐! 삐! 삐!");
    }
}
doorLock2("11111234");
doorLock2("11114321");
doorLock2(); // undefined가 넘어갈 경우 확인
