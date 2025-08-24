// 타입 가드 - 함수가 null을 리턴할 수 있을 경우

(() => {
  const a = document.querySelector('a[href="ch06/ex06-24.js"]'); // const a: Element | null

  // FIXME 타입 가드를 사용해서 타입 에러를 없애세요.
  if (a !== null) {
    // 타입 가드
    a.textContent += " 클릭"; // const a: Element
  }

  // Non-null assertion(!): TS 문법. 지정한 객체가 null이나 undefined가 아님을 단언
  // 이번 예제와 같은 상황에서는 권장하지 않음 (DOM 객체는 null이 될 수도 있기 때문)
  a!.textContent += " 클릭";
})();
