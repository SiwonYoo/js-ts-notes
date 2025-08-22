// 랜덤 고양이 이미지 가져오기 - Fetch API 사용
// ex05-12.ts 복사

import { type Cat } from "./types.js";
import { appendImages } from "./utils.js";

const url = "https://api.thecatapi.com/v1/images/search";
// 잘못된 주소로 테스트
// const url = "https://api.thecatapi.com/v1/images/";

const btn = document.querySelector("button");
btn?.addEventListener("click", getImages);

async function getImages() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data: Cat[] = await response.json(); // Promise 반환 -> await
      appendImages(data);
    } else {
      console.error(response.status, "에러 발생");
    }
  } catch (err) {
    console.error("에러 발생", err);
  }
  // // Ajax 프로그래밍 순서 (실행 순서: 1 -> 2 -> 4 -> 3)
  // // 1. XMLHttpRequest 객체 생성
  // const xhr = new XMLHttpRequest();

  // // 2. 요청 준비 (open)
  // xhr.open("GET", url, true);

  // // 3. 응답 데이터 처리
  // xhr.addEventListener("load", function () {
  //   const result = this.responseText;
  //   console.log(result);

  //   const data: Cat[] = JSON.parse(result);
  //   appendImages(data);
  // });

  // // 4. 서버에 요청 (send)
  // xhr.send();
}
