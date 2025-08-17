const todoList = [
  {
    id: 1,
    title: "JavaScript 공부",
    done: true,
  },
  {
    id: 2,
    title: "TypeScript 공부",
    done: false,
  },
  {
    id: 3,
    title: "JavaScript 프로젝트",
    done: false,
  },
  {
    id: 4,
    title: "React 공부",
    done: false,
  },
  {
    id: 5,
    title: "Final 프로젝트",
    done: true,
  },
];

// 완료된 할일 목록 (done: true)
let doneList = [];
// for문으로 순회하는 코드 작성
for (let i = 0; i < todoList.length; i++) {
  if (todoList[i].done === true) {
    // doneList.push(todoList[i]);
    doneList.push(todoList[i].title);
  }
}
console.log("완료된 할일 목록", doneList);

// 남은 할일 목록 (done: false)
let remainList = [];
for (let i = 0; i < todoList.length; i++) {
  if (todoList[i].done === false) {
    // remainList.push(todoList[i]);
    remainList.push(todoList[i].title);
  }
}
console.log("남은 할일 목록", remainList);

// 남은 할일 수
let remainCount = 0;
remainCount = remainList.length;
console.log("남은 할일 수", remainCount);

// id=2인 할일
let todo = null;
for (let i = 0; i < todoList.length; i++) {
  if (todoList[i].id === 2) {
    // todo = todoList[i];
    todo = todoList[i].title;
  }
}
console.log("id=2인 할일", todo);

// id=3인 할일의 index
let todoIndex = -1;
for (let i = 0; i < todoList.length; i++) {
  if (todoList[i].id === 3) {
    todoIndex = i;
  }
}
console.log("id=3인 할일의 index", todoIndex);

// 남은 할일이 하나라도 있는가?
let hasTodo = false;
if (remainList.length > 0) hasTodo = true;
console.log("남은 할일이 하나라도 있는가?", hasTodo);

// 할일이 모두 완료 되었는가?
let isAllDone = true;
if (remainList.length !== 0) isAllDone = false;
console.log("할일이 모두 완료 되었는가?", isAllDone);
