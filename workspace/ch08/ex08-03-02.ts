// 에러 핸들링 - 에러 전달(throw)
// ex08-02.ts 복사

(() => {
  function f1() {
    const fn = new Function("x", "y", "retrun x + y"); // SyntaxError: Unexpected identifier 'x'
    console.log(fn(10, 20));
  }

  function f2() {
    try {
      f1(); // SyntaxError 발생
    } catch (err) {
      if (err instanceof Error) {
        console.error("에러 발생.", err.message);
      }
    }
  }

  f2();
  console.log("프로그램 종료.");
})();
