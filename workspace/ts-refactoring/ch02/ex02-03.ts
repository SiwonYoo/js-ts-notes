/*
* 자바스크립트의 함수는 일급 객체이다.
  - 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있다.
  - 함수의 인자로 전달될 수 있다.
  - 함수의 결과 값으로 반환될 수 있다.
  - 리터럴로 생성될 수 있다.
  - 동적으로 생성된 프로퍼티를 가질 수 있다.
*/

(() => {
  // 함수는 함수의 결과 값으로 반환될 수 있다.
  function foo() {
    console.log("foo 호출.");
    return function () {
      console.log("bar 호출.");
      return function () {
        console.log("baz 호출.");
      };
    };
  }

  const bar = foo(); // foo 호출 -> 함수 리턴
  const baz = bar(); // bar 호출 -> 함수 리턴
  baz();
  console.log("- - - - -");

  foo(); // foo() 실행
  console.log("- - - - -");
  foo()(); // foo()의 리턴 함수 실행
  console.log("- - - - -");
  foo()()(); // foo()의 리턴 함수의 리턴 함수 실행
})();
