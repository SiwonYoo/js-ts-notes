const ua = document.querySelector("#user-agent");
const lang = document.querySelector("#language");
const platform = document.querySelector("#platform");
const isOnline = document.querySelector("#online-status");

if (ua) {
  ua.textContent = window.navigator.userAgent; // window는 생략 가능
}
if (lang) {
  lang.textContent = navigator.language;
}
if (platform) {
  // platform.textContent = window.navigator.platform;
  platform.textContent = (navigator as any).userAgentData.platform;
}
if (isOnline) {
  isOnline.textContent = navigator.onLine ? "온라인" : "오프라인";
}
