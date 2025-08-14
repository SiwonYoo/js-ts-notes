/*
변수 선언
*/

var a; // 변수 선언(권장)
a = 100; // 변수 초기화

var b, c; // 변수 2개 선언
var d = 10; // 변수 선언 + 초기화(권장)
var e = 100,
  f = 200; // 변수 2개 선언 + 초기화
var user = "하츄핑";
var user2 = "아자핑";

var message = '아자핑이 "안녕하세요"라고 말했다.';
var message2 = "하츄핑이 '안녕하세요'라고 생각했다.";
var message3 = '피곤핑이 "피곤해"라고 말했다.'; // 이스케이프 문자(\)
var message4 = "몰라핑이 \n모른다고 말\t했다.";
var message5 = "하루핑아 \\놀자\\라고 말했다.";

console.log(user2, message);
console.log(user, message2);
console.log(message3);
console.log(message4);
console.log(message5);

// 식별자 명명 규칙
var 변수1 = "조아핑"; // 한글 가능 (권장X)
var 이름_변수 = "싫어핑"; // _ 가능

var $money = 4;
var $4 = 4; // 4$는 사용 불가 (숫자가 맨 앞에 올 수 없음)

var pi = 3.14;

var _ = 200;
var $ = 4;

// var user-name = '안돼핑'; // - 사용 불가
var userName = "낙타핑";
var userAge = 30;
var userGender = "여자";
var userEmail = "s@n.c";

// 변수는 바뀔 수 있음
console.log("userAge 변경 전: " + userAge);
userAge = 25;
console.log("userAge 변경 후: " + userAge);
