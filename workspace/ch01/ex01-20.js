/*
반복문 - while문
*/

// 0부터 10까지 출력
let i = 0;
while (i <= 10) {
  console.log(i++);
}

// 1부터 10까지 모든 수의 합계를 출력
let sum = 0;
i = 1; // 초기화

while (i <= 10) { // 조건식
  sum += i; // 실행할 코드
  i++; // 증감식
}

console.log(i);
console.log(sum);