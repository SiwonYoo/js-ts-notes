"use strict";
/*
국어, 영어, 수학 점수의 총점과 평균을 출력하는 프로그램
*/
(() => {
    // 원시형 데이터 타입
    let kor = 100;
    let eng = 90;
    let math = 85;
    let sum = kor + eng + math;
    let avg = sum / 3;
    console.log("총점", sum);
    console.log("평균", avg);
    class ScoreClass {
        kor;
        eng;
        math;
        // getter: 외부에서 속성처럼 보이게 하면서 내부적으로 계산하고 싶은 경우 사용 (읽기 전용 속성)
        // 메서드: 계산이 복잡하거나 입력값이 필요한 동작일 때 사용 (함수 역할)
        get sum() {
            return this.kor + this.eng + this.math;
        }
        get avg() {
            return this.sum / 3;
        }
    }
    // 객체로 만들기
    const score = new ScoreClass();
    score.kor = 100;
    score.eng = 90;
    score.math = 85;
    console.log("총점", score.sum);
    console.log("평균", score.avg);
})();
