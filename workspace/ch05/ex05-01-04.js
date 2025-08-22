/*
querySelector를 이용해서 첫번째와 마지막 항목 출력
*/
console.log("===== ST: ex05-01-04.js =====");

// purchases(id) 선택
const purchases = document.querySelector("#purchases");

// 첫 번째 항목 출력
const firstItem = document.querySelector("#purchases > li:first-child");
console.log(firstItem.firstChild.nodeValue); // 양파

const lastItem = document.querySelector("#purchases > li:last-child");
console.log(lastItem.firstChild.nodeValue); // 라면

/* 예시 코드 */
console.log("예시 코드");

// querySelector를 사용한 CSS 선택자 방식으로 첫번째 요소 선택
// #purchases: id가 purchases인 요소
// > li:first-child: purchases의 직계 자식 중 첫번째 li 요소
console.log(
  document.querySelector("#purchases > li:first-child").firstChild.nodeValue
); // 양파

// querySelector를 사용한 CSS 선택자 방식으로 마지막 요소 선택
// #purchases: id가 purchases인 요소
// > li:last-child: purchases의 직계 자식 중 마지막 li 요소
console.log(
  document.querySelector("#purchases > li:last-child").firstChild.nodeValue
); // 라면

console.log("===== ED: ex05-01-04.js =====");
