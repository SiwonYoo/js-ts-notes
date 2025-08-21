// 메모이제이션 예제
// ex02-23.js 복사

// js/mylib.js에 추가
// // 함수에 메모이제이션 기능 추가 (캐시를 위한 코드)
// // -> 모든 함수는 .memo를 호출할 수 있음 (call(), apply(), bind()처럼 사용 가능)
// Function.prototype.memo = function (key) {
//   // this = isPrime(호출 기준)

//   this._cache = this._cache || {};

//   if (this._cache[key] !== undefined) {
//     // key에 대해서 계산이 끝나고 캐시된 경우
//     return this._cache[key];
//   } else {
//     return (this._cache[key] = this(key)); // isPrime 함수를 호출해서 결과를 받은 후 캐시에 저장하고 리턴
//   }
// };

// 지정한 수가 소수인지 여부를 반환
// 함수 기능만 구현 (메모이제이션 기능은 따로 빼서 필요한 때문 사용)
const isPrime = function (num) {
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

// 소요시간: 1196.763916015625 ms

console.time("소요시간");
console.log("3 -> ", isPrime(3));
console.log("4 -> ", isPrime(4));
console.log("5 -> ", isPrime(5));
console.log("6 -> ", isPrime(6));
console.log("7 -> ", isPrime(7));
console.log("8 -> ", isPrime(8));
console.log("9 -> ", isPrime(9));
console.log("1000000007 -> ", isPrime.memo(1000000007));
console.log("1000000007 -> ", isPrime.memo(1000000007));
console.log("1000000007 -> ", isPrime.memo(1000000007));
console.timeEnd("소요시간");

// 다른 예제
const sayHello = function (name) {
  return "Hello " + name;
};

console.log(sayHello("안캐시핑"));
console.log(sayHello.memo("캐시핑"));
