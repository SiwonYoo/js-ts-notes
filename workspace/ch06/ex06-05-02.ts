// 유니언 타입과 타입 가드

(() => {
  // FIXME: print 함수의 타입을 정의하고 msg의 타입에 따라서 결과값 출력
  function print(msg: string | number | boolean) {
    // string일 경우
    if (typeof msg === "string") {
      console.log(`${msg} 글자수: ${msg.length}`); // world 글자수: 5
    }

    // number일 경우
    if (typeof msg === "number") {
      console.log(`${msg} + 10 = ${msg + 10}`); // 200 + 10 = 210
    }

    // boolean일 경우
    if (typeof msg === "boolean") {
      console.log(`${msg}: ${msg ? "참" : "거짓"}`); // false: 거짓
    }
  }

  print("world");
  print(200);
  print(false);
})();
