// var alert = "출입 금지"; // window의 alert 함수를 덮어씌움
// console.log(alert); // 출입 금지

// alert("작업 종료"); // TypeError: alert is not a function

// function fn() {
//   var alert = "출입 금지";
//   console.log(alert);
// }
// fn(); // 출입 금지

// alert("작업 종료"); // 출입 금지(alert에 출력)

(() => {
  var alert = "출입 금지";
  console.log(alert);
})();

alert("작업 종료"); // 출입 금지(alert에 출력)
