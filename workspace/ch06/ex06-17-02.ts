// echo 함수 - 제네릭 함수
// ex06-17.ts 복사

(() => {
  // T가 아닌 아무 문자나 사용 가능하지만 관례적으로 Type의 첫 글자인 T를 사용한다.
  function echo<T>(msg: T): T {
    return msg;
  }

  console.log(echo<string>("hello")); // hello // (local function) echo<string>(msg: string): string
  console.log(echo<number>(100)); // 100 // (local function) echo<number>(msg: number): number
  console.log(echo(true)); // true // <true> 생략 시, 타입 추론 // (local function) echo<true>(msg: true): true

  function echo2<T, R>(n1: T, n2: R): R {
    console.log(typeof n1, n1);
    console.log(typeof n2, n2);
    return n2;
  }

  console.log(echo2<string, number>("hello", 3));
})();
