// 인터페이스 선언 병합

(() => {
  interface Todo {
    id: string;
    title: string;
    content: string;
  }

  interface Todo {
    // id: number; // 동일한 속성을 지정하려면 type이 같아야 함
    title: string; // type이 같다면 동일한 속성도 상관없음
    done: boolean;
    createAt: Date;
  }

  const todo: Todo = {
    id: "1",
    title: "할일1",
    content: "내용1",
    done: true,
    createAt: new Date(),
  };

  console.log(todo);
})();
