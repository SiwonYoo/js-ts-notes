// 인터페이스 상속

(() => {
  // 할일 등록시 사용
  interface TodoRegist {
    // 수정은 부모에서만 하면 됨 (유지보수성이 높음)
    title: string;
    content: string;
  }

  // 할일 상세 조회시 사용
  interface TodoInfo extends TodoRegist {
    // title: string;
    // content: string;
    id: number;
    done: boolean;
  }

  const todo1: TodoRegist = {
    title: "할일1",
    content: "내용1",
  };

  console.log("등록", todo1); // 등록 { title: '할일1', content: '내용1' }

  const todo2: TodoInfo = {
    id: 1,
    title: "할일1",
    content: "내용1",
    done: false,
  };

  console.log("할일 상세 조회", todo2); // 할일 상세 조회 { id: 1, title: '할일1', content: '내용1', done: false }
})();
