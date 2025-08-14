/*
if문을 이용하여 사용자와 로그인 상태를 출력하세요.
*/

const isLogin = true;

const isUser = true;
const isSeller = false;
const isAdmin = false;

// isLogin이 true이면 "로그인 상태" 출력
if (isLogin === true) console.log("로그인 상태");
// isLogin이 false이면 "로그아웃 상태" 출력
if (isLogin === false) console.log("로그아웃 상태");

// isUser가 true이면 "사용자" 출력
if (isUser === true) console.log("사용자");
// isSeller가 true이면 "판매자" 출력
if (isSeller === true) console.log("판매자");
// isAdmin이 true이면 "관리자" 출력
if (isAdmin === true) console.log("관리자");

// isLogin이 true이고 isUser가 true 이면 "사용자 로그인 상태" 출력
if (isLogin === true && isUser === true) console.log("사용자 로그인 상태");
// isLogin이 false이고 isUser가 true이면 "사용자 로그아웃 상태" 출력
if (isLogin === false && isUser === true) console.log("사용자 로그아웃 상태");

// isLogin이 true이고 isSeller가 true이면 "판매자 로그인 상태" 출력
if (isLogin === true && isSeller === true) console.log("판매자 로그인 상태");
// isLogin이 false이고 isSeller가 true이면 "판매자 로그아웃 상태" 출력
if (isLogin === false && isSeller === true) console.log("판매자 로그아웃 상태");

// isLogin이 true이고 isAdmin이 true이면 "관리자 로그인 상태" 출력
if (isLogin === true && isAdmin === true) console.log("관리자 로그인 상태");
// isLogin이 false이고 isAdmin이 true이면 "관리자 로그아웃 상태" 출력
if (isLogin === false && isAdmin === true) console.log("관리자 로그아웃 상태");

// Boolean type이므로 true / false 비교 생략 가능
if (isLogin && isUser) console.log("사용자 로그인 상태");
if (!isLogin && isUser) console.log("사용자 로그아웃 상태");

// 변수 사용하기
let loginStatus;
let userType;

if (isLogin) loginStatus = "로그인 상태";
if (!isLogin) loginStatus = "로그아웃 상태";

if (isUser) userType = "사용자";
if (isSeller) userType = "판매자";
if (isAdmin) userType = "관리자";

console.log(userType, loginStatus);
