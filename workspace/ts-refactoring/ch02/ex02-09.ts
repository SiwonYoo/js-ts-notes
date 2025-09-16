/*
  함수 생성 3 (Function 생성자 함수)
*/
(() => {
  // Function 생성자 함수 이용
  const add = new Function("x", "y", "let result = x + y; return result;");

  console.log(add(10, 20)); // 30
})();
