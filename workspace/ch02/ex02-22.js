const todoList = [
  {
    "id": 1,
    "title": "JavaScript 공부",
    "done": true
  },
  {
    "id": 2,
    "title": "TypeScript 공부",
    "done": false
  },
  {
    "id": 3,
    "title": "JavaScript 프로젝트",
    "done": false
  },
  {
    "id": 4,
    "title": "React 공부",
    "done": false
  },
  {
    "id": 5,
    "title": "Final 프로젝트",
    "done": true
  }
];

// 완료된 할일 목록
let doneList = [];
console.log('완료된 할일 목록', doneList);

// 남은 할일 목록
let remainList = [];
console.log('남은 할일 목록', remainList);

// 남은 할일 수
let remainCount = 0;
console.log('남은 할일 수', remainCount);

// id=2인 할일
let todo = null;
console.log('id=2인 할일', todo);

// id=3인 할일의 index
let todoIndex = -1;
console.log('id=3인 할일의 index', todoIndex);

// 남은 할일이 하나라도 있는가?
let hasTodo = false;
console.log('남은 할일이 하나라도 있는가?', hasTodo);

// 할일이 모두 완료 되었는가?
let isAllDone = true;
console.log('할일이 모두 완료 되었는가?', isAllDone);