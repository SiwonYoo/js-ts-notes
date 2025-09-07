// import 구문은 보통 모듈의 최상단에 정의

import { plus as add, minus } from "./math.js"; // Named Import
import MyMath from "./math.js"; // Default Import
// import MyMath, { plus as add, minus } from "./math.js"; // Mixed Import
import { type Member } from "./math.js"; // Type Import

add(1, 2);
minus(2, 3);
// MyMath(3, 4); // multiply(3, 4);

MyMath.plus(3, 5);
MyMath.minus(9, 8);
MyMath.multiply(2, 4);

const haru: Member = {
  name: "하루",
  age: 5,
};
console.log(haru);

if (MyMath.minus(5, 6) < 0) {
  // Dynamic Import
  // ES2015 Promise
  import("./math.js").then((dynamicMath) => {
    dynamicMath.plus(7, 8);
  });

  // ES2017 async/await
  const dynamicMath2 = await import("./math.js");
  dynamicMath2.minus(8, 9);
}
