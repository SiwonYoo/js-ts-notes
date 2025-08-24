// echo 함수 - 일반 함수

(() => {
  // FIXME string 타입 매개변수를 받고 string 타입을 리턴하는 함수의 타입 지정
  function echoString(msg: string): string {
    return msg;
  }
  // FIXME number 타입 매개변수를 받고 number 타입을 리턴하는 함수의 타입 지정
  function echoNumber(msg: number): number {
    return msg;
  }
  // FIXMEboolean 타입 매개변수를 받고 boolean 타입을 리턴하는 함수의 타입 지정
  function echoBoolean(msg: boolean): boolean {
    return msg;
  }

  console.log(echoString("hello")); // hello
  console.log(echoNumber(100)); // 100
  console.log(echoBoolean(true)); // true
})();
