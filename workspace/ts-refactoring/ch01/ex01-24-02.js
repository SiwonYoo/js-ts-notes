"use strict";
/*
국어, 영어, 수학 점수의 총점과 평균을 출력하는 프로그램
*/
(() => {
    // JSON 표기법으로 객체 만들기
    const score = {
        kor: 100,
        eng: 90,
        math: 85,
        sum: function () {
            // 총점을 반환한다.
            // 객체의 메서드가 자신의 속성에 접근할 때 this 사용
            return this.kor + this.eng + this.math;
        },
        avg: function () {
            // 평균을 반환한다.
            return this.sum() / 3;
        },
    };
    console.log(score.kor, score.eng, score["math"]);
    console.log("총점", score.sum());
    console.log("평균", score.avg());
})();
