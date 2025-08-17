/*
* 함수 호출 방법 1 - 일반 함수
  - this는 window 객체
*/

function f1() {
  console.log(this);
  this.console.log("this. 사용");
  window.console.log("window. 사용");
  console.log("window 생략");
}
const f2 = function () {
  console.log(this);
};

f1();
f2();
