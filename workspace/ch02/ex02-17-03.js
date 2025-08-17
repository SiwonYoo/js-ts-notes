/*
카운터 예제
*/

let count = 0;
const myObj = {
  count: 0,
  visit: function () {
    this.count++; // this = myObj

    const visit2 = () => {
      this.count++; // this = myObj (화살표 함수: 상위 this 사용)
    };
    visit2();
  },
};

myObj.visit();
myObj.visit();
console.log("방문자 수", myObj.count); // 4
