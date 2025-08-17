/*
 * 함수 호출 방법 4 - 생성자 함수
 */

// 객체를 생성해서 반환하는 함수(생성자)
function Ping(name, age) {
  // const obj = {}; // 생성자 함수에서는 필요 없음 (new에 의해 생성된 빈 객체(this)를 받아옴)

  // new를 통해 생성된 Ping의 인스턴스인지 확인
  if (!(this instanceof Ping)) {
    // this가 Ping의 인스턴스가 아니라면
    return new Ping(name, age); // 생성자 함수로 생성해줌 (new를 붙여서 다시 호출, 재귀 함수)
  }

  this.name = name;
  this.age = age;
  this.getName = function () {
    return this.name;
  };

  // return obj; // 생성자 함수에서는 필요 없음 (생성한 객체(this) 자동 리턴)
}

// new의 동작
// 1. 빈 객체를 가리키는 this 생성
// 2. 생성자 함수에 전달
// 3. 생성자 함수가 아무것도 리턴하지 않는다면 this를 자동으로 리턴
const copyPing = new Ping("카피핑", 12); // 생성된 객체를 '인스턴스'라고 함 // copyPing은 Ping의 인스턴스
const baro = new Ping("바로핑", 9);
const rara = new Ping("라라핑", 8);

console.log(copyPing, copyPing.name, copyPing.age, copyPing.getName());
console.log(baro, baro.name, baro.age, baro.getName());
console.log(rara, rara.name, rara.age, rara.getName());

const pingping = Ping("핑핑", 10);
console.log(pingping);
