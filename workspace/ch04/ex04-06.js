// 메모이제이션 예제
// ex02-23.js 복사

// 지정한 수가 소수인지 여부를 반환
(() => {
  let isPrime = function (num) {
    // 소수 판별 코드
    let prime = true;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }

    return prime;
  };
  console.time("소요시간1");
  for (let i = 0; i < 5; i++) {
    console.log("1000000007 -> ", isPrime(1000000007));
  }
  console.timeEnd("소요시간1"); // 소요시간1: 5826.111083984375 ms
  console.log(isPrime);

  // isPrime 함수에 메모이제이션 기능 추가 (재정의)
  isPrime = isPrime.memoize();

  console.time("소요시간2");
  for (let i = 0; i < 5; i++) {
    console.log("1000000007 -> ", isPrime(1000000007));
  }
  console.timeEnd("소요시간2"); // 소요시간2: 1163.84716796875 ms
  console.log(isPrime);
})();
