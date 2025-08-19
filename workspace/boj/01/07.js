/*
제목: ??!
설명: 입출력을 응용하는 문제??!
제출: https://www.acmicpc.net/submit/10926

문제
준하는 사이트에 회원가입을 하다가 joonas라는 아이디가 이미 존재하는 것을 보고 놀랐다. 준하는 놀람을 ??!로 표현한다. 준하가 가입하려고 하는 사이트에 이미 존재하는 아이디가 주어졌을 때, 놀람을 표현하는 프로그램을 작성하시오.

입력
첫째 줄에 준하가 가입하려고 하는 사이트에 이미 존재하는 아이디가 주어진다. 아이디는 알파벳 소문자로만 이루어져 있으며, 길이는 50자를 넘지 않는다.

출력
첫째 줄에 준하의 놀람을 출력한다. 놀람은 아이디 뒤에 ??!를 붙여서 나타낸다.

예제 입력 1
joonas
예제 출력 1
joonas??!

예제 입력 2
baekjoon
예제 출력 2
baekjoon??!
*/

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

console.log(input + "??!");

main();

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  console.log(data + "??!");
}

/**
 * 표준 입력장치(콘솔)에서 한 줄로 입력된 한 건의 데이터를 읽어서 반환한다.
 * @returns {string} 읽은 데이터
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim();

  return fileData;
}
