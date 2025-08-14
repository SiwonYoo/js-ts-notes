// switch문의 다양한 사용 예제

/* 
지정한 연산자와 숫자를 받아서 사칙 연산을 수행하는 프로그램

연산자는 +, -, *, / 만 입력가능
잘못된 연산자를 입력할 경우 "잘못된 입력" 출력
0으로 나눌경우 "0으로 나눌 수 없습니다." 출력
*/

const operator = "+";
const n1 = 10;
const n2 = 20;

let result;

switch (operator) {
  case "+":
    result = n1 + n2;
    break;

  case "-":
    result = n1 - n2;
    break;

  case "*":
    result = n1 * n2;
    break;

  case "/":
    if (n2 === 0) {
      console.log("0으로 나눌 수 없습니다.");
    } else {
      result = n1 / n2;
    }
    break;

  default:
    console.log("잘못된 연산자입니다.", operator);
}

if (result !== undefined) {
  console.log(result);
}

/*
1 ~ 7 사이의 숫자를 받아서 해당 요일을 출력하는 프로그램

1은 월요일, 2는 화요일, ... 7은 일요일
1 ~ 7 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/

const day = 4;

switch (day) {
  case 1:
    console.log("월요일");
    break;

  case 2:
    console.log("화요일");
    break;

  case 3:
    console.log("수요일");
    break;

  case 4:
    console.log("목요일");
    break;

  case 5:
    console.log("금요일");
    break;

  case 6:
    console.log("토요일");
    break;

  case 7:
    console.log("일요일");
    break;

  default:
    console.log("잘못된 입력", day);
}

/*
1 ~ 12 사이의 월을 받아서 게절을 출력하는 프로그램

봄: 3 ~ 5월, 여름: 6 ~ 8월, 가을: 9 ~ 11월, 겨울: 12 ~ 2월
1 ~ 12 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/

const month = 4;

switch (month) {
  case 3:
  case 4:
  case 5:
    console.log("봄");
    break;

  case 6:
  case 7:
  case 8:
    console.log("여름");
    break;

  case 9:
  case 10:
  case 11:
    console.log("가을");
    break;

  case 12:
  case 1:
  case 2:
    console.log("겨울");
    break;

  default:
    console.log("잘못된 입력", month);
}
