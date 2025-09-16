"use strict";
/*
Call by Value와 Call by Reference 차이
- Call by Value: 원시 타입(number, string 등)은 값을 복사하여 전달
- Call by Reference: 객체 타입(array, object 등)은 참조를 전달
*/
function add10(data1, data2) {
    data1 += 10; // data1은 지역변수로 d1과는 별개의 공간
    data2[0] += 10; // data2는 d2와 같은 배열을 참조
    console.log("함수 내부", data1, data2[0]); // 90 90
}
let d1 = 80; // number: 원시 타입
let d2 = [80]; // array(object): 참조 타입
console.log("함수 호출 이전", d1, d2[0]); // 80 80
add10(d1, d2);
console.log("함수 호출 이후", d1, d2[0]); //80 90
// d1은 변경되지 않고, d2[0]만 변경됨
