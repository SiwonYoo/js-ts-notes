const sum = function (x, y) {
  return x + y;
};
console.log(sum(10, 20)); // 30

// lodash의 curry 함수를 사용해서 sum을 커링
const currySum = _.curry(sum);
console.log(currySum(10)(20)); // 30

// lodash의 partial 함수를 사용해서 부분 적용 함수 생성
const sum100 = _.partial(sum, 100); // x = 100으로 고정
console.log(sum100(10)); // 110
console.log(sum100(30)); // 130

const sum200 = _.partial(sum, 200); // x = 200으로 고정
console.log(sum200(20)); // 220
console.log(sum200(40)); // 240
