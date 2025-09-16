/*
* 자바스크립트의 함수는 일급 객체이다.
  - 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있다.
  - 함수의 인자로 전달될 수 있다.
  - 함수의 결과 값으로 반환될 수 있다.
  - 리터럴로 생성될 수 있다.
  - 동적으로 생성된 프로퍼티를 가질 수 있다.
*/
(() => {
  const str = "hello"; // string
  const num = 100; // number
  const obj: { bar?: Function; baz?: Function } = {}; // object
  const arr: [number, string, { bar?: Function }?, Function?] = [num, str]; // object(array)

  // 함수를 변수에 할당
  const foo = function (this: any) {
    console.log(this);
  };

  // 함수를 배열의 요소로 할당
  arr.push(obj); // 배열에 객체 담기 // [100, 'hello', {}]
  arr.push(foo); // 배열에 함수 담기 // [100, 'hello', {}, function(){}]

  obj.bar = foo;
  obj.baz = function () {
    console.log(this);
  };

  foo();
  if (arr[3] instanceof Function) arr[3]();
  if (arr[2] instanceof Object && arr[2].bar instanceof Function) arr[2]?.bar();
  obj.bar(), obj.baz();
})();
