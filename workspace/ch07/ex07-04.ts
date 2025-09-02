// 내장 객체 - Math

(()=>{

  console.log(Math.abs(-5)); // 5 절대값
  console.log(Math.round(4.6)); // 5 소수 첫째자리에서 반올림
  console.log(Math.ceil(4.1)); // 5 소수 첫째자리에서 올림
  console.log(Math.floor(4.9)); // 4 소수 첫째자리에서 내림
  console.log(Math.floor(-4.9)); // -5 소수 첫째자리에서 내림
  console.log(Math.trunc(4.9)); // 4 소수 버림
  console.log(Math.trunc(-4.9)); // -4 소수 버림
  console.log(Math.sign(-10)); // -1 부호, 양수: 1, 음수: -1, 0: 0

  // 0 이상 1 미만 사이의 난수
  console.log(Math.random());

  // 인자값들 중 최대값
  console.log(Math.max(1, 5, 3)); // 5

  // 인자값들 중 최소값
  console.log(Math.min(1, 5, 3)); // 1
  console.log(Math.pow(2, 3)); // 8 거듭제곱
  console.log(Math.sqrt(9)); // 3 제곱근
  console.log(Math.PI); // 3.141592653589793
  
})();


