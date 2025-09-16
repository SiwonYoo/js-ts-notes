/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
*/
(() => {
  // 배열의 모든 요소 출력
  // 1. for 문
  const arr = [10, 20, 30];

  console.log("=====for=====");

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    console.log(i, elem);
  }

  // 배열 모든 요소의 합계, 홀수값의 합계, 짝수값의 합계를 출력
  const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let sum = 0;
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < arr2.length; i++) {
    const num = arr2[i];

    sum += num;
    if (num % 2 === 1) {
      oddSum += num;
    } else {
      evenSum += num;
    }
  }

  console.log(
    `모든 요소의 합계는 ${sum}, 홀수 값의 합계는 ${oddSum}, 짝수 값의 합계는 ${evenSum}입니다.`
  );

  // 2. for-of 문
  console.log("\n=====for-of=====");

  // 속성 값에 하나씩 접근
  for (let elem of arr2) {
    console.log(elem);
  }

  // 3. for-in 문
  console.log("\n=====for-in=====");
  const arr3 = ["A", "B", "C", "D", "E"];

  // for-in: 객체의 속성명에 하나씩 접근 (배열은 인덱스)
  for (let prop in arr3) {
    console.log(prop);
  }

  // 속성값을 출력하고 싶으면
  for (let prop in arr3) {
    console.log(arr3[prop]);
  }
})();
