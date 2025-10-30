/*
제목: 시험 성적
설명: 시험 점수를 성적으로 바꾸는 문제
제출: https://www.acmicpc.net/submit/9498

문제
시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

출력
시험 성적을 출력한다.

예제 입력 1
100

예제 출력 1
A
*/

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

if (input >= 90) {
  console.log("A");
} else if (input >= 80) {
  console.log("B");
} else if (input >= 70) {
  console.log("C");
} else if (input >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// case 2.
main();

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  if (data >= 90) {
    console.log("A");
  } else if (data >= 80) {
    console.log("B");
  } else if (data >= 70) {
    console.log("C");
  } else if (data >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}

/**
 * 표준 입력장치(콘솔)에서 한 줄로 입력된 한 건의 데이터를 읽어서 반환한다.
 * @returns {string|number} 읽은 데이터 (숫자일 경우 number로 형변환하여 return)
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim();
  const result = isNaN(fileData) ? fileData : Number(fileData);

  return result;
}
