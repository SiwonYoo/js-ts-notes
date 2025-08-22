console.log(5 != 8); // true (5 == 8 : false)
console.log(5 != 5); // false (5 == 5 : true)
console.log(5 != "5"); // false (5 == '5' : true)

console.log(5 !== 8); // true (5 === 8 : false)
console.log(5 !== 5); // false (5 === 5 : true)
console.log(5 !== "5"); // true (5 === '5' : false)

// let x = 2;
// let result = x % 2 ? "홀수" : "짝수";

// console.log(result); // 짝수

let x = 10;
let result;

if (x % 2) result = "홀수";
else result = "짝수";

console.log(result); // 짝수

x = 3;
console.log(!!3);

console.log(!0); // true
console.log(!"Hello"); // true

console.log(!!3);
console.log(!!null);
console.log(!!"null");
console.log(!!0);
console.log(!!"Hello");

!0; // true (0: false)
!"Hello"; // false ('Hello': true)

!!0; // false
!!"Hello"; // true
!!3; // true
!!null; // false
!!"null"; // true

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

true || true; // true
true || false; // true
false || true; // true
false || false; // false

true && true; // true
true && false; // false
false && true; // false
false && false; // false

10 * 2 + 3; // 23
10 * (2 + 3); // 50

console.log(10 * 2 + 3);
console.log(10 * (2 + 3));

2 ** 2; // 2^2 = 4
2 ** 2.5; // 2^(2.5) = 5.65685424949238
2 ** 0; // 2^0 = 1
2 ** -2; // 2^(-2) = 0.25

// 음수를 거듭제곱의 밑으로 사용하려면 괄호로 묶어야 한다.
(-5) ** 2; // (-5)^2 = 25

console.log((-5) ** 2);

console.log(2 ** 2);
console.log(2 ** 2.5);
console.log(2 ** 0);
console.log(2 ** -2);

console.log(Math.pow(2, 2)); // 2^2 = 4
console.log(Math.pow(2, 2.5)); // 2^(2.5) = 5.65685424949238
console.log(Math.pow(2, 0)); // 2^0 = 1
console.log(Math.pow(2, -2)); // 2^(-2) = 0.25

Math.pow(2, 2); // 2^2 = 4
Math.pow(2, 2.5); // 2^(2.5) = 5.65685424949238
Math.pow(2, 0); // 2^0 = 1
Math.pow(2, -2); // 2^(-2) = 0.25

// 지수 연산자는 우결합성을 갖는다.
2 ** (3 ** 2);
2 ** (3 ** 2);
(2 ** 3) ** 2;

console.log(2 ** (3 ** 2));
console.log(2 ** (3 ** 2));
console.log((2 ** 3) ** 2);

let num = 5;
num **= 2; // num = num ** 2
console.log(num); //25

console.log(2 * 5 ** 2);

// 문자열 연결 연산자
"1" + 2;
1 + "2";

// 산술 연산
1 + 2; // 3

// true는 1로 타입 변환된다.
1 + true; // 2
// false는 0으로 타입 변환된다.
1 + false; // 1
// null은 0으로 타입 변환된다.
1 + null; // 1

// undefined는 숫자로 타입 변환되지 않는다.
+undefined; // NaN
1 + undefined; // NaN

console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2);
console.log(1 + true);
console.log(1 + false);
console.log(1 + null);
console.log(+undefined);
console.log(1 + undefined);

5 * 4;
"My name is " + "Deepdive";

const o = {
  x: { y: 1 },
  z: 3,
};

// 얕은 복사
const c1 = o;
console.log(c1 === o); // true
console.log(c1.x === o.x); // true

const c2 = { ...o };
console.log(c2 === o); // false
console.log(c2.x === o.x); // true

// 깊은 복사
const _ = require("lodash");
const c3 = _.cloneDeep(o);
console.log(c3 === o); // false
console.log(c3.x === o.x); // false

// this가 모듈 객체(현재 비어있음)를 가리킴
console.log("0.", this);

function func1() {
  // 호출 시점에 this가 결정됨
  console.log("1.", this);
}
function func2() {
  "use strict";

  // this가 undefined를 가리킴
  console.log("2.", this);
}

const func3 = () => {
  // this가 모듈 객체(이 함수의 상위 스코프)를 가리킴
  console.log("3.", this);
};

func1(); // 일반함수: 호출 기준 this -> 전역 객체 (객체 없이 호출됨)
func2(); // 엄격 모드: undefined
func3(); // 화살표 함수: 선언 기준 this -> 모듈 객체
