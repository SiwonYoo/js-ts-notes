"use strict";
/*
반환값이 있는 함수 - 토스터
*/
function toaster(time, bread) {
    return time + "초 동안 구워진 " + bread;
}
const toast1 = toaster(40, "우유 식빵"); // 40초 동안 구워진 우유 식빵
const toast2 = toaster(60);
console.log(toast1);
console.log(toast2);
