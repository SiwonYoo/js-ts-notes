/*
 * 클래스 정의와 상속
 * ex03-05.js 복사
 */
/*

/**
 * 고등학교 성적관리 생성자 함수(총점과 평균 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
class HighSchool {
  constructor(kor, eng) {
    this.kor = kor;
    this.eng = eng;
  }

  sum() {
    return this.kor + this.eng;
  }

  avg() {
    return this.sum() / 2;
  }
}

const s1 = new HighSchool(100, 91);
console.log(s1.sum()); // 191
console.log(s1.avg()); // 95.5

/**
 * 대학교 성적관리 생성자 함수(총점, 평균과 학점 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
class College extends HighSchool {
  constructor(kor, eng) {
    super(kor, eng); // 부모(HighSchool)의 생성자 호출
  }

  grade() {
    const avg = this.avg();
    if (avg >= 90) return "A";
    else if (avg >= 80) return "B";
    else if (avg >= 70) return "C";
    else if (avg >= 60) return "D";
    else return "F";
  }
}

const c1 = new College(80, 71);
console.log(c1.sum()); // 151
console.log(c1.avg()); // 75.5
console.log(c1.grade()); // C

console.log(College.prototype);
