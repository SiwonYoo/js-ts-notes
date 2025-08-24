"use strict";
// 리터럴 타입
(() => {
    function walk(name, time) {
        console.log(`${time}시간 동안 ${name}과 산책합니다.`);
    }
    walk("하루", 1); // 1시간 동안 하루과 산책합니다.
    walk("나무", 2); // 2시간 동안 나무과 산책합니다.
    walk("이틀", 3); // 3시간 동안 이틀과 산책합니다.
    // FIXME name: '하루' 또는 '나무'로 제한
    // FIXME time: 1시간 또는 2시간으로 제한
    function walkWithMyDog(name, time) {
        console.log(`${time}시간 동안 ${name}와 산책합니다.`);
    }
    walkWithMyDog("하루", 1); // 1시간 동안 하루와 산책합니다.
    walkWithMyDog("나무", 2); // 2시간 동안 나무와 산책합니다.
    // walkWithMyDog("이틀", 3); // 타입 에러를 발생 시키고 싶음
})();
