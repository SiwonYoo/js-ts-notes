/*
연산자 우선순위
*/

// 괄호 우선
let result = 5 + 3 * 2;
console.log(result);

result = (5 + 3) * 2;
console.log(result);

// 산술 연산자 우선, 비교 연산자 나중
result = 5 + 3 > 6 * 2;
console.log(result);

// 논리 연산자
result = 5 + 3 > 6 * 2 || 3 * 4 < 5 + 10;
console.log(result);
