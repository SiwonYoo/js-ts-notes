"use strict";
// 변수의 타입 추론
(() => {
    // 기본 데이터 타입의 변수 타입을 추론에 의지(권장)
    let name = "이일구"; // string으로 타입 추론
    // name = 23; // Type 'number' is not assignable to type 'string'.ts(2322)
    const age = 20; // number로 타입 추론
    let name2; // any로 타입 추론
    name2 = "이일구";
    name2 = 219;
    console.log(name, age, name2); // 이일구 20 219
})();
