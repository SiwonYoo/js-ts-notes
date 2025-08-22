// 랜덤 고양이 이미지 가져오기 - axios 라이브러리
// ex05-13.ts 복사

// axios 타입 추가
// npm i @types/axios

import { type Cat } from "./types.js";
import { appendImages } from "./utils.js";

const url = "https://api.thecatapi.com/v1/images/search";

const btn = document.querySelector("button");

btn?.addEventListener("click", getImages);

async function getImages() {
  try {
    const response = await axios.get<Cat[]>(url); // axios 타입 정보 설치
    const data = response.data;
    appendImages(data);
  } catch (err) {
    // 네트워크 오류
    console.error("에러 발생", err);
  }
}
