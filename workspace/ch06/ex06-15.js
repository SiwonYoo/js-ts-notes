"use strict";
// 인터페이스 다중 상속
(() => {
    const todo1 = {
        id: 1,
        title: "할일1",
        content: "내용1",
        done: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    console.log(todo1);
    const todo2 = {
        id: 2,
        title: "할일2",
    };
    console.log(todo2);
})();
