// 비동기 함수 - await 사용
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 async/await 사용
// ex08-09.ts 복사

// Promise
function p1() {
  return new Promise((resolve, reject) => {
    resolve("p1 결과");
  });
}
// 비동기 함수이지만 동기 함수처럼 개발 가능
async function a1() {
  return "a1 결과";
}

function p2() {
  return new Promise((resolve, reject) => {
    reject("p2 에러");
  });
}
async function a2() {
  throw "a2 에러";
}

async function test() {
  // a1()
  //   .then((result) => {
  //     console.log("a1의 작업 결과.", result);
  //   })
  //   .then(p1)
  //   .then((result) => {
  //     console.log("p1의 작업 결과.", result);
  //   })
  //   .then(a2)
  //   .then((result) => {
  //     console.log("a2의 작업 결과.", result);
  //   })
  //   .then(p2)
  //   .then((result) => {
  //     console.log("p2의 작업 결과.", result);
  //   })
  //   .catch((error) => {
  //     console.log("에러 발생.", error);
  //   });

  try {
    const a1Result = await a1();
    console.log(a1Result);
    const p1Result = await p1();
    console.log(p1Result);
    const a2Result = await a2();
    console.log(a2Result);
    const p2Result = await p2();
    console.log(p2Result);
  } catch (error) {
    console.log("에러 발생.", error);
  }
}

console.log("1. 작업 시작.");
test();
console.log("2. 작업 종료."); //  이 메세지가 f1 작업 완료 보다 먼저 나오면 비동기로 호출된다는 의미

// 모듈에서는 탑레벨에서 await 사용 가능 (ESC2022)
// ESC2022 이전에는 즉시실행함수를 만든 후 async를 붙여 사용
const a1Result = await a1();
console.log(a1Result);

export {}; // 빈 export를 추가해서 TS에게 모듈로 인식 시킴
