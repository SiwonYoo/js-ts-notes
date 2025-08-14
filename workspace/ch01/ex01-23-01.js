/*
new Object() - 생성자 함수로 객체 생성
*/

const user1 = new Object();
user1.userName = "해핑";
user1.userNo = 1;
user1.userGender = "female";
user1.userAge = 5;
user1.userEmail = "haeping@gmail.com";

console.log("user1:", user1);

const user2 = new Object();
user2.userName = "키키핑";
user2.userNo = 2;
user2.userGender = "male";
user2.userAge = 7;
user2.userEmail = "kikiping@gmail.com";

console.log("user2:", user2);

console.log(`${user1.userName}의 나이: ${user1.userAge}`);
console.log(`${user2.userName}의 나이: ${user2.userAge}`);
