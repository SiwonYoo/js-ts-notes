"use strict";
/*
유사 배열 객체
*/
/**
 * 전달받은 배열의 모든 요소를 인덱스와 함께 출력한다.
 * @returns {any[]} arr - 배열
 */
(() => {
    function printArr(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(i, arr[i]);
        }
    }
    // 베열
    console.log("=====배열=====");
    const colorArr = ["orange", "yellow", "green"];
    colorArr.push("black"); // 배열: push 사용 가능
    printArr(colorArr);
    // 객체
    console.log("\n=====객체=====");
    class Obj {
        length;
    }
    const obj = new Obj();
    // printArr(obj); // length 속성이 없기 때문에 for 문을 돌 수 없음
    // length를 추가하고 다시 확인해보기
    obj.length = 1;
    console.log(obj);
    printArr(obj); // for 문 실행 가능. 내부에 값은 없으므로 undefined 반환
    // 유사 배열 객체
    console.log("\n=====유사 배열 객체=====");
    // length와 0부터 시작해서 1씩 증가하는 속성이 있음
    const likeArr = {
        length: 3,
        0: "orange",
        1: "yellow",
        2: "green",
    };
    // length가 있으므로 printArr() 사용 가능
    printArr(likeArr);
    // 배열은 아니므로 push는 불가
    // likeArr.push("black"); // 에러(TypeError)
    // 유사배열객체에 push 속성 추가하기
    likeArr.push = function (elem) {
        // 배열의 push 메서드 사용
        // 배열의 모든 메서드는 배열의 생성자 함수인 Array.prototype 속성에 정의되어 있음
        // Array.prototype.push(elem); // 안 됨
        var tmpArr = new Array();
        tmpArr.push.call(this, elem); // 배열을 임시로 만들어서 사용. call() 메서드를 사용하여 likeArr(this)를 넘겨줌
    };
    likeArr.push("black");
    likeArr.push("white");
    printArr(likeArr); // black 추가된 것 확인 가능
    // 유사배열객체에 push를 추가해서 사용하기보다는
    // push까지 포함되어있는 배열을 사용하는 것 권장
    // 문자열도 유사 배열 객체의 일종
    console.log("\n=====문자열도 유사 배열 객체=====");
    printArr("이것은 문자열");
})();
