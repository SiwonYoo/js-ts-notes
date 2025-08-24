// 인터페이스 다중 상속

(() => {
  // 할일 등록시 사용
  interface TodoRegist {
    title: string;
    content: string;
  }

  // 할일 목록 조회시 사용
  interface TodoList {
    id: number;
    title: string;
    done: boolean;
  }

  // 할일 상세 조회시 사용
  interface TodoInfo extends TodoRegist, TodoList {
    createdAt: Date;
    updatedAt: Date;
  }

  const todo1: TodoInfo = {
    id: 1,
    title: "할일1",
    content: "내용1",
    done: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  console.log(todo1);

  type TodoInfo2 = Pick<TodoList, "id" | "title">; // TodoList에서 'id'와 'title'만 가져옴
  const todo2: TodoInfo2 = {
    id: 2,
    title: "할일2",
  };
  console.log(todo2);
})();
