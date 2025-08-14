/*
입력한 값이 홀수인지 짝수인지 출력하는 코드를 작성하세요.

입력값 예시 1:
15
출력값 1:
15는 홀수 입니다.

입력값 예시 2:
12
출력값 2:
12는 짝수 입니다.
*/

const fs = require("fs"); // file system에서 데이터를 입/출력할 때 사용
const fileBuffer = fs.readFileSync(0); // 동기 방식으로 파일을 읽음 .readFileSync('파일명') *.readFileSync(0): 콘솔입력장치에서 읽어옴
console.log('fileBuffer', fileBuffer);
const data = fileBuffer.toString();
console.log('data', data);

let num = Number(data);
let result = num % 2 === 0 ? "짝수" : "홀수";
console.log(`${num}은 ${result}입니다.`);
