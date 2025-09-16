"use strict";
/*
* 자바스크립트의 함수는 일급 객체이다.
  - 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있다.
  - 함수의 인자로 전달될 수 있다.
  - 함수의 결과 값으로 반환될 수 있다.
  - 리터럴로 생성될 수 있다.
  - 동적으로 생성된 프로퍼티를 가질 수 있다.
*/
(() => {
    const add = function (x, y) {
        add.result = x + y; // 함수는 객체이므로 result라는 속성을 정의할 수 있음
        return add.result;
    };
    console.log(add(10, 20)); // 30
    console.log(add(30, 40), add(30, 40)); // 70 70 // 2번 호출
    const result = add(30, 40); // 보통 같은 값을 두 번 호출할 때는 변수에 담아서 사용함
    console.log(result, result); // 70 70
    add(50, 60);
    console.log(add.result); // add의 속성으로 접근
    console.log(add); // 함수의 코드 내용이 보임
    console.dir(add); // 함수의 속성들을 확인할 수 있음
})();
