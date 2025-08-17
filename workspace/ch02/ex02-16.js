/*
* 함수 호출 방법 2 - 메서드
  - this는 메서드를 정의한 객체
  - 화살표 함수는 함수 내부에 arguments나 this가 생성되지 않고 상위 컨텍스트의 arguments, this를 사용하게 됨 
*/

globalThis.name = "global"; // 브라우저는 window, Node.js는 global 객체

const getPingName = () => {
  return this.name; // 상위 Scope this를 찾는다. (window)
};

// 함수 호출하는 방법 1. 일반 함수로 호출 (this는 window)
console.log(getPingName()); // global (일반 함수 호출)

const baro = new Object();
baro.name = "바로핑";
baro.age = 9;
baro.getName = getPingName;

const rara = {
  name: "라라핑",
  age: 8,
  getName: getPingName,
};

// 함수 호출하는 방법 2. 메서드로 호출 (this는 메서드를 정의한 객체)
console.log(baro.age, baro.getName()); // getName()의 this는 global (화살표 함수)
console.log(rara.age, rara.getName()); // getName()의 this는 global (화살표 함수)
