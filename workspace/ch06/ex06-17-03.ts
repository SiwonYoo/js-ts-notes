// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사

(() => {
  function echo<T extends string | number>(msg: T): T {
    return msg;
  }

  console.log(echo<string>("hello")); // hello
  console.log(echo<number>(100)); // 100
  // console.log(echo<boolean>(true)); // 타입 에러 // error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

  const str = echo<string>("hello");
  const num = echo<number>(123.456);

  // 추가적인 메서드 사용
  console.log(str.toUpperCase(), num.toFixed(2)); // HELLO 123.46

  function echo2<T extends { length: number }>(msg: T): T {
    return msg;
  }

  // echo2<number>(100); // length 속성이 없음 // Type 'number' does not satisfy the constraint '{ length: number; }'.ts(2344)
  const str2 = echo2<string>("hello");
  const num2 = echo2<number[]>([10, 20]);

  console.log(str2.length, num2.length); // 5 2
})();
