/*
new Object() - 생성자 함수로 객체 생성
*/
(() => {
  class FooClass {
    name!: string;
    age!: number;
    job!: string;
    married!: boolean;
    "user-name"!: string;
  }

  const foo = new FooClass();
  console.log(foo);

  foo.name = "함수핑";
  foo["age"] = 6;
  foo.job = "마법사";
  foo["married"] = false;

  // 방법 1. ['속성명']
  console.log(foo["name"], foo["age"]);
  // 방법 2. dot 연산자 사용 (주로 사용)
  console.log(foo.job, foo.married);

  // 식별자로 접근할 경우 [] 사용
  const 나이 = "age";
  console.log(foo[나이]);
  // console.log(foo.나이); // age에 접근 불가 (foo의 '나이' 속성이라고 인식)

  // 주로 특수문자(ex. -)가 포함되어있을 때 [] 사용
  console.log(foo["user-name"]); // 지금은 정의되어 있지 않으므로 undefined 반환
  // console.log(foo.user-name); // 불가
})();
