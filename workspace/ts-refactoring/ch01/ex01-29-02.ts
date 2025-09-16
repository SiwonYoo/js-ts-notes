/*
2차원 배열
FEBC 수강생의 이름을 저장하는 배열을 작성해 보자.
*/

const students = [
  ["하츄핑", "바로핑", "아자핑", "차차핑", "라라핑"],
  ["로미", "마야", "메리루"],
  ["사라", "이안", "카일", "준"],
];

// 1. 각 캠프의 수강생과 전체 수강생은 몇명인가?
let sum = 0; // 전체 수강생 수를 저장할 변수

// 각 캠프를 순회하면서 처리
for (let i = 0; i < students.length; i++) {
  // 현재 처리 중인 캠프의 수강생 배열
  const campStudents = students[i];
  // 각 캠프의 수강생 수 출력
  console.log(`${i + 1}. 수강생 ${campStudents.length}명`);

  // 전체 수강생 수 누적
  sum += campStudents.length;
}

// 전체 수강생 수 출력
console.log("전체 수강생", sum);

// 2. 바로핑이라는 수강생이 있는가? (캠프별로 확인하기)
for (let i = 0; i < students.length; i++) {
  const campStudents = students[i];
  let isInStudent = false;

  for (let k = 0; k < campStudents.length; k++) {
    if (campStudents[k] === "바로핑") {
      isInStudent = true;
      break; // 바로핑을 찾으면 더 이상 검색할 필요가 없으므로 반복문 종료
    }
  }

  // 바로핑 존재 여부 출력
  if (isInStudent) {
    console.log(`${i + 1}. 바로핑 있음`);
  } else {
    console.log(`${i + 1}. 바로핑 없음`);
  }
}

// includes 사용하기
const isInChacha = students[0].includes("차차핑");
if (isInChacha) {
  console.log("차차핑 있음");
} else {
  console.log("차차핑 없음");
}
