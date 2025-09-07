// Named Export
export function plus(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
    return a + b;
}
export function minus(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
    return a - b;
}
// Default Export
/* export default  */ function multiply(a, b) {
    console.log(`${a} * ${b} = ${a * b}`);
    return a * b;
}
export default { plus, minus, multiply }; // 객체로 내보냄
