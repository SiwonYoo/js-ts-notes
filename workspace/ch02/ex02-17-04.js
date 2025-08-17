/*
카운터 예제
Function.prototype.bind는 this를 지정하는 기능 뿐만 아니라 커링을 구현한 함수이기 때문에 인자값도 미리 전달이 가능
*/

let count = 0;
const myObj = {
  count: 0,
  visit: function () {
    // 방문자를 한 명 증가시킨다.
    this.count++; // this = myObj

    const visitN = function (n) {
      this.count += n; // this = myObj
    };
    // call()을 사용할 경우 매번 호출해야 함(매번 this와 2를 넘겨줌)
    visitN.call(this, 2); // 방문자를 2명 증가
    visitN.call(this, 2);

    // bind = call이나 apply 같이 this를 넘겨줌 + partial 같이 인자를 미리 넘겨줌(부분 적용 함수)
    // this와 n 값을 미리 보내놓음(visit3에 binding)
    const visit3 = visitN.bind(this, 3);
    visit3(); // 이렇게 호출 가능
    visit3();
  },
};

myObj.visit();
myObj.visit();
console.log("방문자 수", myObj.count);
