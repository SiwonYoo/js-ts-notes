// 내장 객체 - Date

(() => {
  // 오늘 날짜
  const today = new Date(); // 현재 시간
  console.log(today); // 2025-04-30T05:34:30.177Z // 현재 시간 출력

  console.log(today.getFullYear()); // 2025 // 4자리 년도
  console.log(today.getMonth() + 1); // 4 (0: 1월, 1: 2월, ) // 월(0부터 시작)
  console.log(today.getDate()); // 30 // 일
  console.log(today.getDay()); // 3 (0: 일요일, 1: 월요일, ..., 6: 토요일) // 요일

  console.log(today.getHours()); // 14 // 시
  console.log(today.getMinutes()); // 34 // 분
  console.log(today.getSeconds()); // 30 // 초

  console.log(today.getTime()); // 1745991450521 // 1970년 1월 1일 00:00:00 UTC부터 현재까지의 밀리초
})();
