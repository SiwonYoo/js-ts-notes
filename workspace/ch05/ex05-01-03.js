/*
첫번째와 마지막 구매 항목을 출력
firstChild, firstElementChild, lastChild, lastElementChild: 자식요소 접근
*/
console.log("===== ST: ex05-01-03.js =====");

const purchases = document.getElementsByClassName("list");
console.log(purchases); // HTMLCollection [ul#purchases.list, purchases: ul#purchases.list]
console.log(purchases[0]); // <ul>...</ul>
console.log(purchases[0].firstElementChild); // <li>...</li>
console.log(purchases[0].firstElementChild.firstChild); // 양파(객체)
console.log(purchases[0].firstElementChild.firstChild.nodeValue); // 양파(텍스트)

// 첫 번째 구매 항목 출력
console.log(purchases[0].firstElementChild.firstChild.nodeValue); // 양파

// 마지막 구매 항목 출력
console.log(purchases[0].lastElementChild.firstChild.nodeValue); // 라면

/* 예시 코드 */
console.log("예시 코드");
// getElementsByClassName: class 속성으로 요소 선택 (배열 형태로 반환되므로 인덱스 지정 필요)
const shoppingList = document.getElementsByClassName("list")[0]; // ul 요소 선택

// firstElementChild 사용: 직접 첫 번째 자식 요소 선택
const firstLi = shoppingList.firstElementChild; // 첫번째 li 요소 선택

// firstChild를 사용하여 텍스트 노드 선택(요소 노드의 실제 텍스트 내용)
const firstTextNode = firstLi.firstChild; // 텍스트 노드 객체 선택
console.log("제일 먼저 구매할 항목", firstTextNode.nodeValue); // nodeValue로 실제 텍스트 값 출력 // 제일 먼저 구매할 항목 양파

// lastElementChild를 사용하여 마지막 li 요소의 텍스트 내용 출력
console.log(
  "마지막으로 구매할 항목",
  shoppingList.lastElementChild.firstChild.nodeValue
); // 마지막으로 구매할 항목 라면

console.log("===== ED: ex05-01-03.js =====");
