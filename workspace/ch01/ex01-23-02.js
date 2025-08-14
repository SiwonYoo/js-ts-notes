/*
국어, 영어, 수학 점수의 총점과 평균을 출력하는 프로그램
*/

// 원시형 데이터 타입
let kor = 100;
let eng = 90;
let math = 85;

let sum = kor + eng + math;
let avg = sum / 3;

console.log("총점", sum);
console.log("평균", avg);

// 객체로 만들기
const score = new Object();
score.kor = 100;
score.eng = 90;
score.math = 85;

score.sum = score.kor + score.eng + score.math;
score.avg = score.sum / 3;

console.log("총점", score.sum);
console.log("평균", score.avg);
