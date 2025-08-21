const topLevel = "최상위 변수";

function outer() {
  const innerVal = "outer의 지역변수";
  console.log(topLevel); // 하위 Scope에서 접근 가능
  console.log(innerVal); // 지역변수는 선언한 함수내에서만 접근 가능

  /*
  * closure
    - 외부함수(outer)의 지역변수(innerVal)를 외부함수의 실행이 완료한 후
      내부함수의 호출로 참조하는 현상 또는 내부함수
    - closure가 만들어지는 조건
      1. 함수 내부에서 함수를 생성
      2. 내부함수가 외부함수의 지역변수를 참조
  */
  const fn = function () {
    console.log(innerVal);
  };
  return fn;
}

console.log(topLevel); // 같은 Scope 내에서 접근 가능
// console.log(innerVal); // 지역변수는 선언한 함수내에서만 접근 가능

const returnFn = outer();
returnFn();
