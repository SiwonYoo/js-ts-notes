// 비동기 함수 - Promise 사용
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 Promise 사용
// 에러 처리 추가
// 체인 방식으로 호출
// ex08-08-02.ts 복사

(() => {
  function f1() {
    // 함수 타입 지정
    return new Promise<string>((resolve, reject) => {
      const delay = Math.floor(Math.random() * 1000 * 1);
      console.log(`\t\t3. ${delay}ms 동안 작업중...`);
      setTimeout(() => {
        if (delay < 500) {
          resolve("f1의 작업 성공 결과. " + delay); // 작업 완료 후 콜백 함수 호출
        } else {
          reject("f1 작업 실패 사유. " + delay);
        }
      }, delay);
    });
  }

  function test() {
    // // 모든 Promise가 fulfilled 되어야 성공, 하나라도 rejected 되면 실패
    // // 모든 작업이 성공하면 결과 배열 반환, 하나라도 실패하면 첫번째 실패한 Promise의 이유 반환
    // Promise.all([f1(), f1(), f1()])
    //   .then((result) => {
    //     console.log("\tf1 작업이 모두 성공한 후 호출.", result);
    //   })
    //   .catch((reason) => {
    //     console.error("\tf1 작업이 하나라도 실패한 후 호출.", reason);
    //   });

    // // 가장 먼저 fulfilled된 Promise의 결과 반환, 전부 rejected되면 실패
    // Promise.any([f1(), f1(), f1()])
    //   .then((result) => {
    //     console.log("\tf1 작업중 가장 먼저 성공한 작업의 결과.", result);
    //   })
    //   .catch((reason) => {
    //     console.error("\tf1 작업이 모두 실패한 후 호출.", reason);
    //   });

    // // 가장 먼저 settled된 결과 반환(성공, 실패 상관없이)
    // Promise.race([f1(), f1(), f1()])
    //   .then((result) => {
    //     console.log("\tf1 작업중 가장 먼저 성공한 작업의 결과.", result);
    //   })
    //   .catch((reason) => {
    //     console.error("\tf1 작업중 가장 먼저 실패한 작업의 결과.", reason);
    //   });

    // 모든 Promise가 settled된 후 결과 배열 반환
    // 결과 배열에는 각 Promise의 상태(status: fulfilled | rejected)와 결과(value | reason: 결과 | 실패 이유)가 들어감
    Promise.allSettled([f1(), f1(), f1()]).then((result) => {
      console.log("\t모든 f1 작업 결과.", result);
    });
  }

  console.log("1. 작업 시작.");
  test();
  console.log(
    "2. 작업 종료." //  이 메세지가 f1 작업 완료 보다 먼저 나오면 비동기로 호출된다는 의미
  );
})();
