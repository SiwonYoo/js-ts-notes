/*
제목: 꼬마 정민
설명: 더 큰 수를 더하는 문제
제출: https://www.acmicpc.net/submit/11382

문제
꼬마 정민이는 이제 A + B 정도는 쉽게 계산할 수 있다. 이제 A + B + C를 계산할 차례이다!

입력
첫 번째 줄에 A, B, C (1 ≤ A, B, C ≤ 1012)이 공백을 사이에 두고 주어진다.

출력
A+B+C의 값을 출력한다.

예제 입력 1
77 77 7777

예제 출력 1
7931
*/

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

console.log(a + b + c);

// case 2.
main();

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성

  console.log(data.a + data.b + data.c);
}

/**
 * 표준 입력장치(콘솔)에서 한 줄로 입력된 세 건의 데이터를 읽어서 숫자로 변환한 후 객체에 a, b, c 속성으로 저장하여 반환한다.
 * @returns {a: number, b: number, c: number} a, b, c 속성에 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split(" ");

  const result = new Object();

  result.a = parseInt(fileData[0]);
  result.b = parseInt(fileData[1]);
  result.c = parseInt(fileData[2]);

  return result;
}
