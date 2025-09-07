// 비동기 함수 - Promise 사용
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 Promise 사용
// 에러 처리 추가
// ex08-08.ts 복사

(() => {
  function f1() {
    return new Promise<string>((resolve, reject) => {
      const delay = Math.floor(Math.random() * 1000 * 10);
      console.log(`\t\t2. ${delay}ms 동안 작업중...`);

      setTimeout(() => {
        if (delay < 5000) {
          resolve("f1 작업 성공! " + delay);
        } else {
          reject("f1 작업 실패 사유: " + delay);
        }
      }, delay);
    });
  }

  function test() {
    f1().then(
      (result) => {
        console.log("\t4. 작업이 완료된 후에 호출.", result);
      },
      (reason) => {
        console.log("\t4. f1 작업 실패.", reason);
      }
    );
  }

  console.log("1. 작업 시작.");
  test();
  console.log("3. 작업 종료.");
})();
