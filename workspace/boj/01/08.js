/*
제목: 1998년생인 내가 태국에서는 2541년생?!
설명: 식을 직접 세워서 계산하는 문제
제출: https://www.acmicpc.net/submit/18108

문제
ICPC Bangkok Regional에 참가하기 위해 수완나품 국제공항에 막 도착한 팀 레드시프트 일행은 눈을 믿을 수 없었다.
공항의 대형 스크린에 올해가 2562년이라고 적혀 있던 것이었다.
불교 국가인 태국은 불멸기원(佛滅紀元), 즉 석가모니가 열반한 해를 기준으로 연도를 세는 불기를 사용한다.
반면, 우리나라는 서기 연도를 사용하고 있다. 불기 연도가 주어질 때 이를 서기 연도로 바꿔 주는 프로그램을 작성하시오.

입력
서기 연도를 알아보고 싶은 불기 연도 y가 주어진다. (1000 ≤ y ≤ 3000)

출력
불기 연도를 서기 연도로 변환한 결과를 출력한다.

예제 입력 1
2541

예제 출력 1
1998
*/

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

console.log(input - 543);

main();

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  console.log(data - 543);
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
