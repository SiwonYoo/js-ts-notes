// 인터페이스 사용 - 변수, 함수의 매개변수, 리턴타입
// ex06-09.ts 복사

(() => {
  // 인터페이스 생성
  interface User {
    name: string;
    age: number;
  }

  // 인터페이스를 객체의 타입으로 지정
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

  // 함수의 리턴 타입으로 인터페이스 지정
  const createUser = function (name: string, age: number): User {
    return { name /* : name */, age /* : age */ }; // 속성명과 속성값의 변수가 같으면 속성값 생략 가능
  };

  const u3: User = createUser("유저핑", 9);
  console.log(u3.age, u3.name); // 9 유저핑

  // 함수의 매개 변수의 타입으로 인터페이스 지정
  function getAge(user: User): number {
    return user.age;
  }

  console.log(getAge(u1), getAge(u2), getAge(u3)); // 5 8 9
})();
