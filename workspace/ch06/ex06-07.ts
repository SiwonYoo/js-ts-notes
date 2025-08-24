// 타입 별칭으로 객체의 타입 선언

(() => {
  // 타입 별칭 생성
  type User = {
    name?: string; // (property) name?: string | undefined
    age: number;
  };

  const u1: User = {
    // name: "haru",
    age: 5,
  };
  const u2: User = {
    name: "namu",
    age: 8,
  };

  console.log(u1.age, u2.name); // 5 namu
  // console.log(u1.name.toUpperCase()); // error TS18048: 'u1.name' is possibly 'undefined'.
  console.log(u1.name?.toUpperCase()); // undefined // ?. 옵셔널 체이닝 (타입 가드)
  console.log(u2.name?.toUpperCase()); // NAMU
})();
