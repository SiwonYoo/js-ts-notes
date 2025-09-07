"use strict";
// 에러 핸들링 - 직접 에러 발생(throw)
(() => {
    /**
     * 두 수를 나눈 결과를 반환
     * @param x 나누어지는 수
     * @param y 나누는 수
     * @returns 나눈 결과
     * @throws 0으로 나눌 수 없습니다.
     */
    function divide(x, y) {
        if (y === 0) {
            throw new Error("0으로 나눌 수 없습니다.");
        }
        return x / y;
    }
    function f1() {
        try {
            //try ... catch로 감싸지 않으면 에러 출력 후 실행 종료
            const result1 = divide(10, Math.round(Math.random())); // 0 또는 1로 나눔 // 0으로 나누는 경우 문제 발생
            console.log(result1);
        }
        catch (err) {
            if (err instanceof Error) {
                // 타입 가드
                console.error("에러 발생", err.message); // 에러 메시지 출력
            }
        }
        const result2 = divide(10, 2);
        console.log(result2);
    }
    function f2() {
        f1();
    }
    f2();
    console.log("정상 종료");
})();
