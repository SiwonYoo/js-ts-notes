"use strict";
// URL 정보 표시
const urlInfo = document.querySelector("#urlInfo");
if (urlInfo) {
    urlInfo.textContent = `
  전체 URL: ${location.href}
  프로토콜: ${location.protocol}
  호스트: ${location.host}
  포트: ${location.port}
  경로: ${location.pathname}
  쿼리스트링: ${location.search}
  `;
}
// assign 테스트 - 구글로 이동
document.getElementById("testAssign")?.addEventListener("click", () => {
    location.assign("https://google.com");
});
// href 테스트 - Daum으로 이동
document.getElementById("testHref")?.addEventListener("click", () => {
    location.href = "https://daum.net";
});
// replace 테스트 - 네이버로 이동
document.getElementById("testReplace")?.addEventListener("click", () => {
    location.replace("https://naver.com");
});
// reload 테스트
document.getElementById("testReload")?.addEventListener("click", () => {
    location.reload();
});
// 호스트네임 변경 테스트
document.getElementById("changeHostname")?.addEventListener("click", () => {
    const newHostName = "www.example.com";
    const url = new URL(location.href); // URL 객체를 만들면 필요한 속성만 꺼내서 수정할 수 있음
    console.log(url); // url 객체 확인
    console.log(url.hostname);
    url.hostname = newHostName;
    console.log(url); // 새로운 url 객체 확인
    console.log(url.hostname);
    // location.href = url.toString();
});
// URL 파라미터 추가 테스트
document.getElementById("addParameter")?.addEventListener("click", () => {
    const currentUrl = new URL(location.href);
    currentUrl.searchParams.set("page", "2");
    currentUrl.searchParams.set("keywords", "dogs");
    location.href = currentUrl.toString();
});
