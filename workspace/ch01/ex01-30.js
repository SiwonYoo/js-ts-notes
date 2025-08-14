/*
기본 함수
*/

// 함수 생성
function sayHello() {
  console.log("Hello Function!");
}

// 함수 호출
sayHello();

// 여러 번 호출
for (let i = 0; i < 10; i++) {
  sayHello();
}

// 즉시 실행 함수
(function sayHello() {
  console.log("안녕 함수");
})();
