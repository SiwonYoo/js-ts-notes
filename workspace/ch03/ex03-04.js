/*
 * 프로토타입 체인을 이용한 상속 기능 구현
 */

/**
 * 고등학교 성적관리 생성자 함수(총점과 평균 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function HighSchool(kor, eng) {
  this.kor = kor;
  this.eng = eng;
}

HighSchool.prototype.sum = function () {
  return this.kor + this.eng;
};

HighSchool.prototype.avg = function () {
  return this.sum() / 2;
};

const s1 = new HighSchool(100, 91);
console.log(s1.sum()); // 191
console.log(s1.avg()); // 95.5

/**
 * 대학교 성적관리 생성자 함수(총점, 평균과 학점 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function College(kor, eng) {
  this.kor = kor;
  this.eng = eng;
}
// College.prototype.sum = function () {
//   return this.kor + this.eng;
// };
// College.prototype.avg = function () {
//   return this.sum() / 2;
// };
console.log("1. College.prototype 수정 전: ", College.prototype);
College.prototype = new HighSchool(); // HighSchool 생성 시, 국어 영어 점수를 보내지 않음(undefined)
console.log("1. College.prototype 수정 후: ", College.prototype);

console.log(
  "2. College.prototype.constructor 수정 전: ",
  College.prototype.constructor
);
College.prototype.constructor = College; // 기존 College.prototype.constructor = HighSchool에서 College로 수정
console.log(
  "2. College.prototype.constructor 수정 후: ",
  College.prototype.constructor
);

College.prototype.grade = function () {
  const avg = this.avg();
  if (avg >= 90) return "A";
  else if (avg >= 80) return "B";
  else if (avg >= 70) return "C";
  else if (avg >= 60) return "D";
  else return "F";
};

const c1 = new College(80, 71);
console.log(c1.sum()); // 151
console.log(c1.avg()); // 75.5
console.log(c1.grade()); // C
