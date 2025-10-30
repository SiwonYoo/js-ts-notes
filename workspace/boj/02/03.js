/*
제목: 윤년
설명: 윤년을 판별하는 문제
제출: https://www.acmicpc.net/submit/2753

문제
연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.

윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.

예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다. 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 하지만, 2000년은 400의 배수이기 때문에 윤년이다.

입력
첫째 줄에 연도가 주어진다. 연도는 1보다 크거나 같고, 4000보다 작거나 같은 자연수이다.

출력
첫째 줄에 윤년이면 1, 아니면 0을 출력한다.

예제 입력 1
2000
예제 출력 1
1

예제 입력 2
1999
예제 출력 2
0
*/

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

if ((input % 4 == 0 && !(input % 100 == 0)) || input % 400 == 0) {
  console.log(1);
} else {
  console.log(0);
}

// case 2.
main();

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  let result = 0; // 초기값은 윤년이 아님

  // 윤년이 되는 경우
  // 4의 배수 && (100의 배수가 아니거나 400의 배수)
  if (data % 4 === 0 && (data % 100 !== 0 || data % 400 === 0)) {
    result = 1;
  }
  console.log(result);
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
