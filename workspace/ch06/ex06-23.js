// 타입 단언이 필요한 JS 코드

(()=>{

  const todo1 = {
    title: 'Ajax',
    content: '서버와 통신하는 Ajax 배우기'
  };
  const todo2 = {
    title: '기타',
    content: 'Jest 등 테스트 프레임워크 배우기'
  };

  const todo3 = {};
  todo3.title = '내장 함수';

  const todo4 = { title: '내장 객체' };
  todo4.content = 'Date, String, Array 등의 내장 객체 배우기';

  // todo4.content가 없으면 런타임 에러
  console.log(todo1, todo2, todo3, todo4.content.toUpperCase());
  
})();