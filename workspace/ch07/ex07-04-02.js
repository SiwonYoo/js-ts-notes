"use strict";
// 내장 객체 - Math
(() => {
    // FIXME 주사위를 던져서 1부터 6까지의 숫자 중 하나를 랜덤으로 반환하는 함수
    function rollDice() {
        // Math.random()은 0부터 1까지의 랜덤한 실수를 반환합니다.
        return Math.ceil(Math.random() * 6);
    }
    console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
    console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
    console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
})();
