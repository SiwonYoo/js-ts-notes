/*
  함수 생성 2 (표현식)
*/

// 표현식 방식의 함수 선언(기명함수)
const add = function sum(x, y) {
  const result = x + y;
  return result;
};

console.log(add(10, 20)); // 30
// console.log(sum(10, 20)); // ReferenceError: sum is not defined
