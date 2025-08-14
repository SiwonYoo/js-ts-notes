// while 문
// 1부터 10까지 홀수의 합계 출력 (25)
// 1부터 10까지 짝수의 합계 출력 (30)

let i = 1;
let oddSum = 0;
let evenSum = 0;

while (i <= 10) {
  if (i % 2 === 1) { // 홀수
    oddSum += i;
  } else { // 짝수
    evenSum += i;
  }
  i++;
}

console.log("홀수의 합계", oddSum);
console.log("짝수의 합계", evenSum);
