"use strict";
// 인터섹션 타입(intersection type)
(() => {
    // FIXME 타입 에러가 발생하지 않도록 TodoRegist, TodoInfo 타입을 지정하세요.
    const todo1 = {
        title: "타입스크립트 공부",
        content: "타입스크립트 수업 대비해서 미리 책 읽어보기.",
    };
    const todo2 = {
        id: 13,
        title: "타입스크립트 공부",
        content: "타입스크립트 수업 대비해서 미리 책 읽어보기.",
        done: false,
    };
    console.log(todo1.title, todo1.content); // 타입스크립트 공부 타입스크립트 수업 대비해서 미리 책 읽어보기.
    console.log(todo2.id, todo2.title, todo2.content, todo2.done); // 13 타입스크립트 공부 타입스크립트 수업 대비해서 미리 책 읽어보기. false
})();
