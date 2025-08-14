/*
논리 연산자 &&, ||, !
*/

// 논리 합(OR):
// 피연산자 둘 중 하나라도 true일 경우 true
// 둘 다 false인 경우에만 false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

var id = "dedfsfdsl";
var invalidId = id.length < 4 || id.length > 12;
var invalidId = !(id.length >= 4 && id.length <= 12);
console.log("id 입력 조건에 맞지 않음", invalidId);

// 앞의 값이 참이면 앞의 값을 반환
// 앞의 값이 거짓이면 뒤의 값을 반환
// falsy: number 0, string '', boolean false, null, undefined
// truthy: 100, 'hello', true, ' '(공백)
console.log("hello" || "world"); // hello
console.log(90 || 30); // 90
console.log(null || "world"); // world
console.log(undefined || "hello"); // hello
console.log(0 || 100); // 100
console.log("" || "hello"); // hello

let userName = "체리핑";
console.log(userName || "guest"); // 체리핑

let userName2 = "";
console.log(userName2 || "guest"); // guest

let userName3 = null;
console.log(userName3 || "guest"); // guest

let userAge = 8;
console.log(userAge || "나이 미상"); // 8

let userAge2 = undefined;
console.log(userAge2 || "나이 미상"); // 나이 미상

console.log("--------------------");

// 논리곱(AND):
// 피연산자 둘 다 true일 경우 true
// 둘 중 하나라도 false일 경우 false
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// 앞의 값이 참이면 뒤의 값을 반환
// 앞의 값이 거짓이면 앞의 값을 반환
var id = "dedfsfdsl";
console.log("글자 수", id.length);

// null일 경우 .length를 사용할 수 없음(에러)
id = null;
// null 값을 확인한 후 속성을 읽어야 함
// 해결 1. && 사용
console.log("글자수", id && id.length);
// 해결 2. Optional Chaining (?.) 사용
console.log("글자수", id?.length);
