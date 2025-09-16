"use strict";
/*
전역 변수와 지역 변수
*/
/**
 * 지정한 두 수의 최대값을 반환한다.
 * @param {number} n1
 * @param {number} n2
 * @returns {number} - 최대값
 */
// case 1.
function max(n1, n2) {
    if (n1 < n2)
        return n2;
    else
        return n1;
}
console.log(max(10, 20));
console.log(max(200, 30));
// case 2.
function max2(n1, n2) {
    let result;
    if (n1 < n2)
        result = n2;
    else
        result = n1;
    return result;
}
console.log(max2(10, 20));
console.log(max2(200, 30));
