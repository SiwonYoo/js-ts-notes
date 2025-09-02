// 내장 객체 Array - includes(), concat()

(() => {
  const arr = ["오렌지", "딸기", "레몬"];
  console.log(arr.includes("레몬")); // true
  console.log(arr.includes("사과")); // false

  // 배열 결합
  const arr2 = arr.concat(["사과", "바나나"], ["포도"]);
  console.log(arr2.includes("사과")); // true

  console.log(arr); // [ '오렌지', '딸기', '레몬' ]
  console.log(arr2); // [ '오렌지', '딸기', '레몬', '사과', '바나나', '포도' ]
})();
