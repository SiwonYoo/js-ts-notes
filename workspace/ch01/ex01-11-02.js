/*
[비교 연산자 실습]

다음 값들을 비교한 결과를 예측하고 실제 결과와 비교해보세요.
예측한 결과를 주석으로 작성하고, console.log()를 통해 실제 결과를 확인해보세요.

문제1. 다음 비교 연산의 결과는 true일까요? false일까요?
*/

// 1-1. '3' === 3
// 예측:
console.log("1-1: ", "3" === 3); // false (타입이 다르므로 false)

// 1-2. '3' == 3
// 예측:
console.log("1-2: ", "3" == 3); // true (자동 형변환으로 인해 true)

// 1-3. 0 === false
// 예측:
console.log("1-3: ", 0 === false); // false (타입이 다르므로 false)

// 1-4. 0 == false
// 예측:
console.log("1-4: ", 0 == false); // true (자동 형변환으로 인해 true)

// 1-5. '' == false
// 예측:
console.log("1-5: ", "" == false); // true (자동 형변환으로 인해 true)

/*
문제2. 크기 비교
age1과 age2를 비교하여 age1이 더 나이가 많으면 true, 아니면 false를 출력하세요.
*/
let age1 = "20";
let age2 = 19;
// 결과:
console.log("문제2: ", age1 > age2); // true, 20 > 19 (자동 형 변환)

/*
문제3. 문자열 비교
str1과 str2를 비교하여 str1이 사전순으로 더 앞에 있으면 true, 아니면 false를 출력하세요.
*/
let str1 = "apple";
let str2 = "banana";
// 결과:
console.log("문제3: ", str1 < str2); // true (사전순으로 apple이 banana보다 앞에 있음)

/*
문제4. null과 undefined 비교
다음 비교 연산의 결과를 예측해보세요.
*/

// 4-1. null === undefined
// 예측:
console.log("4-1: ", null === undefined); // false (타입이 다르므로 false)

// 4-2. null == undefined
// 예측:
console.log("4-2: ", null == undefined); // true (느슨한 비교에서는 true)

/*
문제5. 응용
다음 변수들을 비교하여 가장 큰 수를 찾으세요.
*/
let num1 = "9";
let num2 = 10;
let num3 = 11;
let num4 = "12";

// 가장 큰 수:
num1 = Number(num1);
num4 = Number(num4);

console.log(
  "가장 큰 수: ",
  num1 < num2 && num3 < num2 && num4 < num2
    ? num2
    : num1 < num3 && num2 < num3 && num4 < num3
    ? num3
    : num1 < num4 && num2 < num4 && num3 < num4
    ? num4
    : num1
); // 12

// Math.max 사용
let max = Math.max(Number(num1), num2, num3, Number(num4));

console.log("가장 큰 수: ", max);
