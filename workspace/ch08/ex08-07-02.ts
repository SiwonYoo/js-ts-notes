// 비동기 함수 - 콜백 방식
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 콜백 함수 사용
// ex08-07.ts 복사

(() => {
  function f1(resolve: () => void) {
    console.log("\t\t3. f1 호출됨.");
    const delay = Math.floor(Math.random() * 1000 * 10);

    console.log(`\t\t4. ${delay}ms 동안 작업중...`);

    setTimeout(() => {
      console.log("\t\tf1 작업 완료.", delay);
      resolve();
    }, delay);

    console.log("\t\t5. f1 리턴됨.");
  }

  function test() {
    console.log("\t2. test 호출됨.");
    f1(() => {
      // 콜백 함수 전달
      console.log("\t8. f1 작업이 완료된 후에 호출.");
    });
    f1(() => {
      // 콜백 함수 전달
      console.log("\t9. f1 작업이 완료된 후에 호출.");
    });
    console.log("\t6. test 리턴됨");
  }

  console.log("1. 작업 시작.");
  test();
  console.log("7. 작업 종료.");
})();
