// Named Export
export function plus(a: number, b: number) {
  console.log(`${a} + ${b} = ${a + b}`);
  return a + b;
}

export function minus(a: number, b: number) {
  console.log(`${a} - ${b} = ${a - b}`);
  return a - b;
}

// Default Export
/* export default  */ function multiply(a: number, b: number) {
  console.log(`${a} * ${b} = ${a * b}`);
  return a * b;
}

export default { plus, minus, multiply }; // 객체로 내보냄

// 타입 내보내기
export type Member = {
  name: string;
  age: number;
};
