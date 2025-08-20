/*
 * 프로토타입 체인을 이용한 상속 기능 구현(중계 함수 추가)
 * ex03-04.js 복사
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
  // HighSchool.call(this, kor, eng); // 이렇게도 작성 가능
}

// // College가 HighSchool을 상속받는다.
// const F = new Function();
// F.prototype = HighSchool.prototype; // F의 prototype과 HighSchool의 prototype이 동일한 prototype 객체를 가리킴
// // F에는 HighSchool의 prototype만 있음
// // kor과 eng 같은 불필요한 속성은 없음!
// College.prototype = new F();
// College.prototype.constructor = College;

// js/mylib.js에 추가
// function inherite(Parent, Child) {
//   // const F = new Function();
//   // F.prototype = Parent.prototype;
//   // Child.prototype = new F();
//   Child.prototype = Object.create(Parent.prototype); // Object.create(): 지정한 prototype 객체를 참조하는 인스턴스 생성

//   Child.prototype.constructor = Child;
// }
mylib.inherite(HighSchool, College);

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
