// 내장 객체 Array - unshift(), shift()

(() => {
  const fruits = ["사과", "바나나"];

  const newLength = fruits.unshift("딸기"); // 배열의 첫번째 요소로 딸기를 추가한다.
  console.log(newLength, fruits); // 3 ['딸기', '사과', '바나나']

  fruits.unshift("딸기", "포도"); // 배열의 첫번째 요소로 딸기, 두번째 요소로 포도를 추가한다.
  console.log(fruits); // ['딸기', '포도', '딸기', '사과', '바나나']

  let firstFruit = fruits.shift(); // 배열의 첫번째 요소를 추출한다.
  console.log(firstFruit); // 딸기
  console.log(fruits); // ['포도', '딸기', '사과', '바나나']

  firstFruit = fruits.shift(); // 배열의 첫번째 요소를 추출한다.
  console.log(firstFruit); // 포도
  console.log(fruits); // ['딸기', '사과', '바나나']
})();
