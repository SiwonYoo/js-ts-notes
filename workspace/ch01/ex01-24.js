/*
JSON 표기법 - 리터럴 방식으로 객체 생성
JavaScript Object Notation
*/

const foo = {
  name: "json-ping",
  age: 7,
  job: "요정",
  married: true,
};

foo.email = "json@gmail.com";

console.log(foo["name"], foo["age"], foo.job, foo.married);
console.log(foo.email);
console.log(typeof foo);
console.log(foo);

console.log(foo);

// JSON.stringify() 함수를 사용하면 객체를 JSON 형태의 문자열로 변환 가능
const strFoo = JSON.stringify(foo);
console.log("strFoo:", strFoo);
console.log("typeof strfoo:", typeof strFoo);
console.log(strFoo.job); // 접근 불가: undefined

// JSON.parse() 함수를 사용하면 JSON 형태의 문자열을 객체로 변환 가능
const objFoo = JSON.parse(strFoo);
console.log("objFoo:", objFoo);
console.log("typeof objFoo:", typeof objFoo);
