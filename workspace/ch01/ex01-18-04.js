/*
1. 정보처리 기사 필기 시험의 과목은 소프트웨어 설계, 소프트웨어 개발, 데이터베이스 구축, 프로그래밍 언어 활용, 정보 시스템 구축 관리 입니다.
다섯 과목의 점수가 다음과 같을 때 총점과 평균을 출력하는 프로그램을 작성하세요.

const softwareDesign = 48; // 1. 소프트웨어 설계
const softwareDevelopment = 80; // 2. 소프트웨어 개발
const databaseSetup = 50; // 3. 데이터베이스 구축
const programmingUsage = 70; // 4. 프로그래밍 언어 활용
const systemManagement = 55; // 5. 정보 시스템 구축 관리

출력 결과:
총점: 303
평균: 60.6
*/

const softwareDesign = 48; // 1. 소프트웨어 설계
const softwareDevelopment = 80; // 2. 소프트웨어 개발
const databaseSetup = 50; // 3. 데이터베이스 구축
const programmingUsage = 70; // 4. 프로그래밍 언어 활용
const systemManagement = 55; // 5. 정보 시스템 구축 관리

const total =
  softwareDesign +
  softwareDevelopment +
  databaseSetup +
  programmingUsage +
  systemManagement;
const avg = total / 5;

console.log("총점: " + total);
console.log("평균: " + avg);

/*
2. 최고점과 최저점을 추가로 출력하세요
출력 결과:
총점: 303
평균: 60.6
최고점: 80
최저점: 48
*/

// 방법 1.
let max = 0;
let min = 0;

if (
  softwareDesign > softwareDevelopment &&
  softwareDesign > databaseSetup &&
  softwareDesign > programmingUsage &&
  softwareDesign > systemManagement
) {
  max = softwareDesign;
} else if (
  softwareDevelopment > softwareDesign &&
  softwareDevelopment > databaseSetup &&
  softwareDevelopment > programmingUsage &&
  softwareDevelopment > systemManagement
) {
  max = softwareDevelopment;
} else if (
  databaseSetup > softwareDesign &&
  databaseSetup > softwareDevelopment &&
  databaseSetup > programmingUsage &&
  databaseSetup > systemManagement
) {
  max = databaseSetup;
} else if (
  programmingUsage > softwareDesign &&
  programmingUsage > softwareDevelopment &&
  programmingUsage > databaseSetup &&
  programmingUsage > systemManagement
) {
  max = programmingUsage;
} else {
  max = systemManagement;
}

if (
  softwareDesign < softwareDevelopment &&
  softwareDesign < databaseSetup &&
  softwareDesign < programmingUsage &&
  softwareDesign < systemManagement
) {
  min = softwareDesign;
} else if (
  softwareDevelopment < softwareDesign &&
  softwareDevelopment < databaseSetup &&
  softwareDevelopment < programmingUsage &&
  softwareDevelopment < systemManagement
) {
  min = softwareDevelopment;
} else if (
  databaseSetup < softwareDesign &&
  databaseSetup < softwareDevelopment &&
  databaseSetup < programmingUsage &&
  databaseSetup < systemManagement
) {
  min = databaseSetup;
} else if (
  programmingUsage < softwareDesign &&
  programmingUsage < softwareDevelopment &&
  programmingUsage < databaseSetup &&
  programmingUsage < systemManagement
) {
  min = programmingUsage;
} else {
  min = systemManagement;
}

console.log("최고점: " + max);
console.log("최저점: " + min);

// 방법 2. Math 함수 사용
const maxScore = Math.max(
  softwareDesign,
  softwareDevelopment,
  databaseSetup,
  programmingUsage,
  systemManagement
);
const minScore = Math.min(
  softwareDesign,
  softwareDevelopment,
  databaseSetup,
  programmingUsage,
  systemManagement
);

console.log("maxScore: " + maxScore);
console.log("minScore: " + minScore);

// 방법 3. 최고점, 최저점 구하는 다른 방법
let maxScore2 = softwareDesign;
if (softwareDevelopment > maxScore2) {
  maxScore2 = softwareDevelopment;
}
if (databaseSetup > maxScore2) {
  maxScore2 = databaseSetup;
}
if (programmingUsage > maxScore2) {
  maxScore2 = programmingUsage;
}
if (systemManagement > maxScore2) {
  maxScore2 = systemManagement;
}
console.log("maxScore2: " + maxScore2);

let minScore2 = softwareDesign;
if (softwareDevelopment < minScore2) {
  minScore2 = softwareDevelopment;
}
if (databaseSetup < minScore2) {
  minScore2 = databaseSetup;
}
if (programmingUsage < minScore2) {
  minScore2 = programmingUsage;
}
if (systemManagement < minScore2) {
  minScore2 = systemManagement;
}
console.log("minScore2: " + minScore2);

/*
3. 과목당 40점 이상, 전과목 평균 60점 이상이면 합격입니다.
합격 여부를 추가로 출력하세요.
출력 결과:
총점: 303
평균: 60.6
최고점: 80
최저점: 48
축하합니다. 합격입니다.
*/

if (minScore >= 40 && avg >= 60) {
  console.log("축하합니다. 합격입니다.");
}

/*
4. 만약 불합격일 경우 불합격 사유를 추가로 출력하세요.
출력 결과 1: softwareDesign = 40일 경우
총점: 295
평균: 59
최고점: 80
최저점: 40
아쉽지만 불합격입니다. 사유: 평균 60점 미달

출력 결과 2: softwareDesign = 30일 경우;
총점: 285
평균: 57
최고점: 80
최저점: 30
아쉽지만 불합격입니다. 사유: 평균 60점 미달(57점)
아쉽지만 불합격입니다. 사유: 과락 40점 미달(30점)
*/

if (avg < 60) {
  console.log(`아쉽지만 불합격입니다. 사유: 평균 60점 미달(${avg}점)`);
}
if (minScore < 40) {
  console.log(`아쉽지만 불합격입니다. 사유: 과락 40점 미달(${minScore}점)`);
}
