// 주요 내장 함수 - clearTimeout
// ex07-02.ts 복사

(() => {
  console.log("시작");
  const timerId = setInterval(() => {
    console.log("1. 취소할 타이머");
  }, 3000);

  setInterval(
    (a: number, b: number) => {
      console.log("2. ", a + b);
    },
    1000 * 3,
    10,
    20
  );

  clearInterval(timerId);

  console.log("종료");
})();
