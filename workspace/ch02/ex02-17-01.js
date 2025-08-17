/*
카운터 예제
*/

let count = 0;
const myObj = {
  count: 0,
  visit: function () {
    // 방문자를 한 명 증가시킨다.
    // myObj.count++;
    this.count++; // this = myObj

    const that = this; // that = this = myObj;
    const visit2 = function () {
      that.count++; // that = myObj
    };
    visit2();
  },
};

myObj.visit();
myObj.visit();
console.log("방문자 수", myObj.count); // 4
