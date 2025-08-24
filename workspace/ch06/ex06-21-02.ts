// 함수의 타입 추론 - 리턴 타입 생략시

(() => {
  // 리턴 타입을 생략하면 리턴할 수 있는 모든 케이스를 다 계산해서 최대한 좁은 범위의 타입으로 추론
  // 좁은 범위의 타입과 넓은 범위의 타입이 같이 있을 경우 서로 호환된다면 좁은 타입을 넓은 범위의 타입에 포함
  // TODO checkNumber() 함수에 마우스를 올려서 리턴 타입 확인
  function checkNumber(x: number, y: number) {
    if (x === 10) {
      return 10; // 10 리터럴 타입
    } else if (x === 20) {
      return 20; // 20 리터럴 타입
    } else if (x > y) {
      return "x가 큼";
    } else if (x < y) {
      return "y가 큼";
      // (local function) checkNumber(x: number, y: number): 10 | 20 | "x가 큼" | "y가 큼" | undefined
    } else if (x === y) {
      return "x, y는 " + x;
      // (local function) checkNumber(x: number, y: number): string | 10 | 20 | undefined
    } else if (x === 10) {
      return x + y;
      // (local function) checkNumber(x: number, y: number): string | number | undefined
    } else {
      return x;
      // (local function) checkNumber(x: number, y: number): string | number
    }
  }

  const returnValue = checkNumber(10, 20);
  console.log(returnValue);
})();
