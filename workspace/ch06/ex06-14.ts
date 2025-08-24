// 인터페이스 상속 - 계층 구조
// ex06-13.ts 복사

(() => {
  // 할일 등록시 사용
  interface TodoRegist {
    // 수정은 부모에서만 하면 됨 (유지보수성이 높음)
    title: string;
    content: string;
  }

  // 할일 상세 조회시 사용
  interface TodoInfo extends TodoRegist {
    // title: string; // TodoRegist
    // content: string; // TodoRegist
    id: number;
    done: boolean;
  }

  interface TodoInfoWithDate extends TodoInfo {
    // title: string; // TodoRegist
    // content: string; // TodoRegist
    // id: number; // TodoInfo
    // done: boolean; // TodoInfo
    createdAt: Date;
    updatedAt: Date;
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

  const todo3: TodoInfoWithDate = {
    id: 1,
    title: "할일1",
    content: "내용1",
    done: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  console.log("날짜 포함", todo3);
  // 날짜 포함 { id: 1, title: '할일1', content: '내용1', done: false, createdAt: 2025-04-29T01:06:06.647Z, updatedAt: 2025-04-29T01:06:06.647Z }
})();
