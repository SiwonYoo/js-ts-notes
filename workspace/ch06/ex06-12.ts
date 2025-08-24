// 인터페이스 정의 - 선택적 속성, 읽기 전용 속성

(() => {
  // 객체의 인터페이스 정의
  // id는 읽기 전용으로 지정하고 done은 옵셔널로 지정
  interface Todo {
    readonly id: number; // 읽기 전용
    title: string;
    content: string;
    done?: boolean; // 옵셔널
  }

  const todo1: Todo = {
    id: 1,
    title: "할일1",
    content: "내용1",
    done: false,
  };

  const todo2: Todo = {
    id: 2,
    title: "할일2",
    content: "내용2",
    // done 생략
  };

  console.log(todo1); // { id: 1, title: '할일1', content: '내용1', done: false }
  console.log(todo2); // { id: 2, title: '할일2', content: '내용2' }

  todo1.content = "내용3"; // content 수정
  console.log(todo1); // { id: 1, title: '할일1', content: '내용3', done: false }

  // id는 readonly 속성 때문에 수정 불가
  // todo1.id = 3; // error TS2540: Cannot assign to 'id' because it is a read-only property.
  // todo2.id = 3; // error TS2540: Cannot assign to 'id' because it is a read-only property.
})();
