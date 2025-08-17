/*
카운터 예제
*/

let count = 0;
const myObj = {
  count: 0,
  visit: function () {
    this.count++; // this = myObj

    const visit2 = function () {
      this.count++; // this = myObj
    };
    visit2.call(this);
  },
};

myObj.visit();
myObj.visit();
console.log("방문자 수", myObj.count); // 4
