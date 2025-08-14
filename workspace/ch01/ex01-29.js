/*
2차원 배열
*/

const numbers = [
  [2, 4, 6, 8], // 2의 배수
  [3, 6, 9, 12], // 3의 배수
  [4, 8, 12, 16], // 4의 배수
  [5, 10, 15, 20], // 5의 배수
  [6, 12, 18, 24], // 6의 배수
];

console.log(numbers[0]); // [2, 4, 6, 8]
console.log(numbers[1]); // [3, 6, 9, 12]
console.log(numbers[2]); // [4, 8, 12, 16]
console.log(numbers[3]); // [5, 10, 15, 20]

console.log(numbers[0][2]); // 6
console.log(numbers[3][2]); // 15

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const row = numbers[i];
  for (let k = 0; k < row.length; k++) {
    sum += row[k];
  }
}

console.log(sum);
