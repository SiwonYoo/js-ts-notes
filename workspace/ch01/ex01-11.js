/*
비교 연산자 >, >=, <, <=, ==, !=, ===, !==
*/

var a = 5;
var b = 10;
var c = "5";
var d = 5;

// > (크다)
console.log(a > b); // 5 > 10 : false

// < (작다)
console.log(a < b); // 5 < 10 : true

// >= (크거나 같다)
console.log(a >= d); // 5 >= 5 : true

// <= (작거나 같다)
console.log(a <= d); // 5 <= 5 : true

// 문자열 비교
console.log(a == c); // 동등, 5 == '5' : true (형 변환)
console.log(a === c); // 일치, 5 === '5' : false

console.log("ch05" > "ch01"); // 사전순으로 비교 : true
console.log("ch12" > "ch2"); // 사전순으로 비교(1 < 2) : false
