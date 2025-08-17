// 지정한 수가 소수인지 여부를 반환
var isPrime = function (num) {
  // 캐시를 위한 코드
  isPrime._cache = isPrime._cache || {};

  if (isPrime._cache[num] !== undefined) {
    // num에 대해서 계산이 끝나고 캐시된 경우
    return isPrime._cache[num];
  }
  // 소수 판별 코드
  let prime = true;

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }

  // 캐시를 위한 코드
  isPrime._cache[num] = prime; // 외부에서 접근할 필요가 없는 변수일 때 _로 시작 (isPrime 내부에서만 사용)
  return prime;
};

// 캐시 전: 소요시간: 3512.7060546875 ms
// 캐시 후: 소요시간: 1205.489013671875 ms
// num -> num / 2: 소요시간: 609.466064453125 ms
// num / 2 -> Math.sqrt(num): 소요시간: 1.7490234375 ms

console.time("소요시간");
console.log("3 -> ", isPrime(3));
console.log("4 -> ", isPrime(4));
console.log("5 -> ", isPrime(5));
console.log("6 -> ", isPrime(6));
console.log("7 -> ", isPrime(7));
console.log("8 -> ", isPrime(8));
console.log("9 -> ", isPrime(9));
console.log("1000000007 -> ", isPrime(1000000007));
console.log("1000000007 -> ", isPrime(1000000007));
console.log("1000000007 -> ", isPrime(1000000007));
console.timeEnd("소요시간");
