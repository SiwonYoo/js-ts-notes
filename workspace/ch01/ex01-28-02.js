/*
유사 배열 객체
*/

function printArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

// const likeArr = {
//   length: 3,
//   0: "orange",
//   1: "yellow",
//   2: "green",

//   push: function (elem) {
//     likeArr[likeArr.length] = elem;
//     likeArr.length++; // length도 수정
//   },
// };

// const likeArr = {
//   length: 3,
//   0: "orange",
//   1: "yellow",
//   2: "green",

//   push: function (elem) {
//     this[this.length] = elem;
//     this.length++;
//   },
// };

// const likeArr = {
//   length: 3,
//   0: "orange",
//   1: "yellow",
//   2: "green",

//   push: function (elem) {
//     var tmpArr = new Array(); // 배열의 push 메서드를 사용하기 위해 배열을 임시로 만듦
//     tmpArr.push.call(this, elem); // call() 메서드를 사용하여 likeArr(this)를 넘겨줌
//   },
// };

const likeArr = {
  length: 3,
  0: "orange",
  1: "yellow",
  2: "green",

  push: function (elem) {
    // 배열의 모든 메서드는 배열의 생성자 함수인 Array.prototype 속성에 정의되어 있음
    Array.prototype.push.call(this, elem);
  },
};

likeArr.push("black");
likeArr.push("white");
printArr(likeArr);
