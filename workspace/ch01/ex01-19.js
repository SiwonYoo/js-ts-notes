/*
switch문
*/

const pingName = "하츄핑";
let modifier;

switch (pingName) {
  case "하츄핑":
    modifier = "사랑의";
    break;

  case "포실핑":
    modifier = "복슬복슬";
    break;

  case "눈꽃핑":
    modifier = "차가운";
    break;

  case "꾸래핑":
    modifier = "거짓말쟁이";
    break;

  case "빛나핑":
    modifier = "밝은";
    break;

  case "머핑":
    modifier = "달콤한";
    break;

  default:
    modifier = "모르는";
}

console.log(`${modifier} ${pingName}`);
