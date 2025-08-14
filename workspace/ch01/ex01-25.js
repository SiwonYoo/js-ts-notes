/*
객체의 속성 관리
*/

const foo = {
  name: "푸푸핑",
  mainJob: "magician",
};

// 객체 프로퍼티 읽기
console.log("객체 프로퍼티 읽기: ", foo.name, foo["mainJob"], foo.subJob);

// 객체 프로퍼티 갱신
foo.mainJob = "fairy";
console.log("객체 프로퍼티 갱신: ", foo.name, foo["mainJob"], foo.subJob);

// 객체 프로퍼티 동적 생성
foo.subJob = "celeb";
console.log("객체 프로퍼티 동적 생성: ", foo.name, foo["mainJob"], foo.subJob);

// 객체 프로퍼티 삭제
delete foo.mainJob;
console.log("객체 프로퍼티 삭제: ", foo.name, foo["mainJob"], foo.subJob);

// 객체의 모든 프로퍼티 읽기 : for in
console.log("객체의 모든 프로퍼티 읽기: ");
for (let prop in foo) {
  // 변수(prop)로 정의된 속성: [] 사용하여 접근
  console.log(prop, foo[prop]);
}
