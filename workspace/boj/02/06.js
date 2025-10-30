/*
제목: 오븐 시계
설명: 범위가 더 넓은 시간 계산 문제
제출: https://www.acmicpc.net/submit/2525

문제
KOI 전자에서는 건강에 좋고 맛있는 훈제오리구이 요리를 간편하게 만드는 인공지능 오븐을 개발하려고 한다. 
인공지능 오븐을 사용하는 방법은 적당한 양의 오리 훈제 재료를 인공지능 오븐에 넣으면 된다. 
그러면 인공지능 오븐은 오븐구이가 끝나는 시간을 분 단위로 자동적으로 계산한다.

또한, KOI 전자의 인공지능 오븐 앞면에는 사용자에게 훈제오리구이 요리가 끝나는 시각을 알려 주는 디지털 시계가 있다.

훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때, 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.

입력
첫째 줄에는 현재 시각이 나온다. 현재 시각은 시 A (0 ≤ A ≤ 23) 와 분 B (0 ≤ B ≤ 59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다. 
두 번째 줄에는 요리하는 데 필요한 시간 C (0 ≤ C ≤ 1,000)가 분 단위로 주어진다.

출력
첫째 줄에 종료되는 시각의 시와 분을 공백을 사이에 두고 출력한다. 
(단, 시는 0부터 23까지의 정수, 분은 0부터 59까지의 정수이다. 디지털 시계는 23시 59분에서 1분이 지나면 0시 0분이 된다.)

예제 입력 1
14 30
20
예제 출력 1
14 50

예제 입력 2
17 40
80
예제 출력 2
19 0

예제 입력 3
23 48
25
예제 출력 3
0 13
*/

// const fs = require("fs");
// const input = fs.readFileSync(0).toString().trim().split("\n");
// const input2 = input[0].split(" ");

// const A = Number(input2[0]);
// const B = Number(input2[1]);
// const C = Number(input[1]);

// let time = A * 60 + B + C;
// let h = Math.floor(time / 60);
// let m = time % 60;

// if (h >= 24) h -= 24;

// console.log(h, m);

main();

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  const h = Number(data[0][0]);
  const m = Number(data[0][1]);
  const c = Number(data[1][0]);

  const totalMin = h * 60 + m + c;

  const result = {
    h: Math.floor(totalMin / 60),
    m: totalMin % 60,
  };

  if (result.h >= 24) {
    result.h -= 24;
  }
  console.log(result.h + " " + result.m);
}

/**
 * 표준 입력장치(콘솔)에서 두 줄로 입력된 줄당 두 건의 데이터를 읽어서 숫자로 변환한 후
 * 배열로 저장하여 변환한다.
 * @returns {[]} 2차원 배열
 */
function getData() {
  const fs = require("fs");
  const arr = fs.readFileSync(0).toString().trim().split("\n");

  const result = []; // 최종 반환할 배열

  for (let i = 0; i < arr.length; i++) {
    const row = arr[i];
    const rowArr = row.trim().split(" ");

    result.push(rowArr);
  }

  return result;
}
