// 에러 핸들링 - 에러가 발생하는 경우

(() => {
  function f1() {
    // TypeError 발생
    const obj = null as any; // Typescript 에러를 피하기 위해 any 강제 설정
    // obj.fn(); // TypeError: Cannot read properties of null (reading 'fn')

    // SyntaxError 발생
    const fn = new Function("x", "y", "retrun x + y"); // SyntaxError: Unexpected identifier 'x' // 프로그램 종료
    console.log(fn(10, 20)); // 실행 안 됨
  }

  function f2() {
    f1();
  }

  f2(); // 에러 발생 -> 프로그램 종료

  console.log("프로그램 종료."); // 실행 안 됨
})();
