/*
do-while

do {
  반복할 코드;
} while (조건);
*/

let i = 1;
let sum = 0;

do {
  sum += i;
  i++;
} while (i <= 10);

console.log(sum);