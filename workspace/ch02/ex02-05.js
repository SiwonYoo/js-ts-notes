/*
  함수 생성 1 (선언문)
*/

// 선언문 방식의 함수 선언
function add(a, b) {
  console.log(this);
  const result = a + b;
  return result;
}

console.log(add(10, 20)); // 30, this = window
console.log(add.apply({ name: "apply 호출" }, [50, 60])); // 110, this = {}
console.log(add.call({ name: "call 호출" }, 10, 40)); // 70, this = {}
