"use strict";
console.log("프로그램 시작.");
function a(n1) {
    console.log("a 시작.", n1); // 1. 10
    const n2 = b(n1);
    console.log("a 종료.", n2); // 6. 20
}
function b(n3) {
    console.log("b 시작.", n3); // 2. 10
    const n4 = c(n3);
    console.log("b 종료.", n4); // 5. 20
    return n4;
}
function c(n5) {
    console.log("c 시작.", n5); // 3. 10
    const n6 = n5 + 10;
    console.log("c 종료.", n6); // 4. 20
    return n6;
}
a(10);
console.log("프로그램 종료.");
