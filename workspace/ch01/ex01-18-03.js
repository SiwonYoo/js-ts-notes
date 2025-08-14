/*
if문을 이용하여 사용자와 로그인 상태를 출력하세요.
*/

const isLogin = true;

const isUser = true;
const isSeller = false;
const isAdmin = false;

// isLogin이 true이면 "로그인 상태" 출력
// isLogin이 false이면 "로그아웃 상태" 출력
if (isLogin) {
  console.log("로그인 상태");
} else {
  console.log("로그아웃 상태");
}

// isUser가 true이면 "사용자" 출력
// isSeller가 true이면 "판매자" 출력
// isAdmin이 true이면 "관리자" 출력
if (isUser) {
  console.log("사용자");
} else if (isSeller) {
  console.log("판매자");
} else {
  console.log("관리자");
}

// isLogin이 true이고 isUser가 true 이면 "사용자 로그인 상태" 출력
// isLogin이 false이고 isUser가 true이면 "사용자 로그아웃 상태" 출력

// isLogin이 true이고 isSeller가 true이면 "판매자 로그인 상태" 출력
// isLogin이 false이고 isSeller가 true이면 "판매자 로그아웃 상태" 출력

// isLogin이 true이고 isAdmin이 true이면 "관리자 로그인 상태" 출력
// isLogin이 false이고 isAdmin이 true이면 "관리자 로그아웃 상태" 출력

if (isLogin) {
  if (isUser) {
    console.log("사용자 로그인 상태");
  } else if (isSeller) {
    console.log("판매자 로그인 상태");
  } else {
    console.log("관리자 로그인 상태");
  }
} else {
  if (isUser) {
    console.log("사용자 로그아웃 상태");
  } else if (isSeller) {
    console.log("판매자 로그아웃 상태");
  } else {
    console.log("관리자 로그아웃 상태");
  }
}
