"use strict";
/*
  함수 생성 4 (화살표 함수 표현식)
*/
(() => {
    let arr = [10, 20, 30];
    let result = [];
    // 각 요소의 제곱값으로 구성된 새로운 배열 생성
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] ** 2);
    }
    console.log(arr, result);
    result = [];
    // Array.prototype.forEach()
    arr.forEach(function (item) {
        result.push(item ** 2);
    });
    console.log(arr, result);
    result = [];
    // Array.prototype.map()
    result = arr.map(function (item) {
        return item ** 2;
    });
    console.log(arr, result);
    result = [];
    // ECMA6 arrow function
    result = arr.map((item) => item ** 2);
    console.log(arr, result);
})();
