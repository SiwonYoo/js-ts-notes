/*
* 변수 호이스팅
  - 호이스팅 단계에서 var로 선언한 변수의 경우 선언만 되고 그 값은 undefined로 초기화 됨
  - let, const로 선언한 변수의 경우 호이스팅 단계에서 선언은 되지만 초기화가 되지 않기 때문에 
    선언 전에 접근하면 에러 발생 (undefined 값도 할당되지 않은 상태)
*/
(() => {
  // case 1. const
  // console.log(add(10, 20)); // ReferenceError: Cannot access 'add' before initialization

  // 표현식 방식의 함수 정의
  // const add = function (x, y) {
  //   return x + y;
  // };

  // console.log(add(10, 20)); // 30

  // case 2. var
  // console.log(add(10, 20)); //  error TS2454: Variable 'add' is used before being assigned.

  // 표현식 방식의 함수 정의
  var add = function (x: number, y: number) {
    return x + y;
  };

  console.log(add(10, 20)); // 30
})();
