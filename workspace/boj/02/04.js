/*
제목: 사분면 고르기
설명: 점이 어느 사분면에 있는지 알아내는 문제
제출: https://www.acmicpc.net/submit/14681

문제
흔한 수학 문제 중 하나는 주어진 점이 어느 사분면에 속하는지 알아내는 것이다.
사분면은 아래 그림처럼 1부터 4까지 번호를 갖는다.
"Quadrant n"은 "제n사분면"이라는 뜻이다.

                y축
                ^
                |
   Quadrant 2   |   Quadrant 1
   B(-12, 5) •  |  • A(12, 5)
                |
<---------------+--------------> x축
                |
   C(-12, -5) • |  • D(12, -5)
   Quadrant 3   |   Quadrant 4
                |

예를 들어, 좌표가 (12, 5)인 점 A는 x좌표와 y좌표가 모두 양수이므로 제1사분면에 속한다.
점 B는 x좌표가 음수이고 y좌표가 양수이므로 제2사분면에 속한다.

점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오.
단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.

입력
첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0) 다음 줄에는 정수 y가 주어진다. (−1000 ≤ y ≤ 1000; y ≠ 0)

출력
점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.

예제 입력 1
12
5
예제 출력 1
1

예제 입력 2
9
-13
예제 출력 2
4
*/

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const x = input[0];
const y = input[1];

if (x > 0 && y > 0) {
  console.log(1);
} else if (x < 0 && y > 0) {
  console.log(2);
} else if (x < 0 && y < 0) {
  console.log(3);
} else if (x > 0 && y < 0) {
  console.log(4);
}

// case 2.
main();

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  const x = data.a;
  const y = data.b;

  let result;

  if (x > 0 && y > 0) {
    result = 1;
  } else if (x < 0 && y > 0) {
    result = 2;
  } else if (x < 0 && y < 0) {
    result = 3;
  } else if (x > 0 && y < 0) {
    result = 4;
  }

  console.log(result);
}

/**
 * 표준 입력장치(콘솔)에서 두 줄로 입력된 한 건의 데이터를 읽어서 숫자로 변환한 후
 * 객체에 a, b 속성으로 저장하여 변환한다.
 * @returns {object} a,b 속성에 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split("\n");

  const result = new Object();

  result.a = isNaN(fileData[0]) ? fileData[0] : parseInt(fileData[0]);
  result.b = isNaN(fileData[1]) ? fileData[1] : parseInt(fileData[1]);

  return result;
}
