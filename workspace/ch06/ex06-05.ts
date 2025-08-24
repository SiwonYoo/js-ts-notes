// 유니언 타입(union type)

(() => {
  // 문자열을 받아서 콘솔에 출력하는 함수
  function logString(msg: string) {
    console.log(msg);
  }
  // 숫자를 받아서 콘솔에 출력하는 함수
  function logNumber(msg: number) {
    console.log(msg);
  }

  logString("hello"); // hello
  logNumber(123); // 123

  // 유니언 타입
  // | 연산자로 여러 타입을 지정
  function log(msg: string | number | boolean) {
    console.log(msg);
  }

  log("hello"); // hello
  log(123); // 123
  log(true); // true
})();
