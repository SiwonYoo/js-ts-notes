// 인터페이스로 객체의 타입 선언
// ex06-07.ts 복사

(() => {
  // 타입 별칭 생성
  // type User = {
  //   name: string;
  //   age: number;
  // };

  // 인터페이스 생성
  interface User {
    name: string;
    age: number;
  }

  const u1: User = {
    name: "haru",
    age: 5,
  };
  const u2: User = {
    name: "namu",
    age: 8,
  };

  console.log(u1.age, u1.name); // 5 haru
  console.log(u2.age, u2.name); // 8 namu

  console.log(u1.name.toUpperCase(), u2.name.toUpperCase()); // HARU NAMU
})();
