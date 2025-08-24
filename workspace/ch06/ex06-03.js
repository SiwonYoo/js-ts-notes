"use strict";
// 함수에 타입 지정
(() => {
    function getCount(count) {
        // return count; // error TS2322: Type 'number' is not assignable to type 'string'.
        return "Count: " + count;
    }
    // let result = getCount("20"); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
    let result /* : string */ = getCount(20); // result의 타입은 생략 가능
    console.log(result); // Count: 20
})();
