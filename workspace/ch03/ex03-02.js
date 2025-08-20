/*
* prototype을 사용하지 않고 생성자 함수 내부에 메서드 작성

* User 생성자 함수에 사용자 이름을 반환하고 저장하는 메서드를 작성하세요.
* 출력값이 주석과 일치하도록 작성하세요.
*/

/**
 * 사용자 객체를 생성하는 생성자 함수
 * @param {string} name 사용자 이름
 */
const User = function (name) {
  this.name = name;

  this.getName = function () {
    return this.name;
  };
  this.setName = function (newName) {
    this.name = newName;
  };
};

const haru = new User("하루핑");
const namu = new User("나무핑");

console.log(haru.getName()); // 하루핑
console.log(namu.getName()); // 나무핑
haru.setName("이틀핑");
console.log(haru.getName()); // 이틀핑

console.log(haru.getName == namu.getName); // false
console.log(haru.setName == namu.setName); // false
