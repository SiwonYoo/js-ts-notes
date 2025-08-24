"use strict";
// 객체의 타입 추론
(() => {
    // 객체가 초기화 될 때 속성값에 맞춰서 타입 추론
    const todo1 = {
        id: 12, // FIXME id의 타입을 string, number 둘 다 가능하게 하고 싶음
        title: "타입 추론",
        content: "타입스크립트가 코드를 분석해서 적절한 타입을 자동으로 지정",
    };
    const todo2 = {
        id: 13,
        title: "할일 13",
        content: "내용 13",
    };
    todo2.id = "13"; // 허용 // (property) Todo.id: string | number
    console.log(todo1, todo2);
    // { id: 12, title: '타입 추론', content: '타입스크립트가 코드를 분석해서 적절한 타입을 자동으로 지정' } { id: '13', title: '할일 13', content: '내용 13' }
})();
