/*
new Object() - 생성자 함수로 객체 생성
*/
(() => {
  interface User {
    userName: string;
    userNo: number;
    userGender: string;
    userAge: number;
    userEmail: string;
  }
  // !는 TypeScript에서 "definite assignment assertion" 이라고 불리는 문법으로, 변수나 속성이 나중에 반드시 할당될 것이라고 컴파일러에게 알려주는 역할
  class UserClass implements User {
    userName!: string;
    userNo!: number;
    userGender!: string;
    userAge!: number;
    userEmail!: string;
  }

  const user1 = new UserClass();
  user1.userName = "해핑";
  user1.userNo = 1;
  user1.userGender = "female";
  user1.userAge = 5;
  user1.userEmail = "haeping@gmail.com";

  console.log("user1:", user1);

  const user2 = new UserClass();
  user2.userName = "키키핑";
  user2.userNo = 2;
  user2.userGender = "male";
  user2.userAge = 7;
  user2.userEmail = "kikiping@gmail.com";

  console.log("user2:", user2);

  console.log(`${user1.userName}의 나이: ${user1.userAge}`);
  console.log(`${user2.userName}의 나이: ${user2.userAge}`);
})();
