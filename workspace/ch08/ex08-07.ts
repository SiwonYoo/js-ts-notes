// 비동기 함수
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// ex08-06.ts 복사

(() => {
  function f1() {
    // 비동기 함수 (비동기 함수를 사용하는 함수도 비동기 함수가 됨)
    console.log("\t\t3. f1 호출됨.");
    const delay = Math.floor(Math.random() * 1000 * 10); // 0 ~ 9초 사이 랜덤

    console.log(`\t\t4. ${delay}ms 동안 작업중...`);

    setTimeout(() => {
      // 비동기 함수
      console.log("\t\t f1 작업 완료.", delay); // 클로저
    }, delay);
    console.log("\t\t5. f1 리턴됨.");
  }

  function test() {
    // 비동기 함수 (비동기 함수를 사용하는 함수도 비동기 함수가 됨)
    console.log("\t2. test 호출됨.");
    f1();
    f1();
    console.log("\t6. test 리턴됨");
  }

  console.log("1. 작업 시작.");
  test();
  console.log("7. 작업 종료.");
})();
