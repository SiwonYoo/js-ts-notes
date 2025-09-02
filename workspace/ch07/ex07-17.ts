// 내장 객체 Array - find(), findIndex()

(() => {
  const arr = [1, 3, 5, 8, 9, 3, 4, 5];

  // 첫번째 2의 배수를 찾아서 출력
  console.log(arr.find((item) => item % 2 === 0)); // 8
  // 첫번째 2의 배수를 찾아서 인덱스 출력
  console.log(arr.findIndex((item) => item % 2 === 0)); // 3
  // 2의 배수만 새로운 배열로 받아서 출력
  console.log(arr.filter((item) => item % 2 === 0)); // [8, 4]

  // true를 반환한 콜백 함수가 없을 경우
  // 첫번째 10의 배수를 찾아서 출력
  console.log(arr.find((item) => item % 10 === 0)); // undefined
  // 첫번째 10의 배수를 찾아서 인덱스 출력
  console.log(arr.findIndex((item) => item % 10 === 0)); // -1
  // 10의 배수만 새로운 배열로 받아서 출력
  console.log(arr.filter((item) => item % 10 === 0)); // []
})();
