/*
유사 배열 객체
*/
(() => {
  function printArr(arr: LikeArr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(i, arr[i]);
    }
  }

  type LikeArr = {
    [i: number]: string;
    length: number;
    push: (elem: string) => void;
  };

  const likeArr: LikeArr = {
    length: 3,
    0: "orange",
    1: "yellow",
    2: "green",

    push: function (elem: string) {
      // 배열의 모든 메서드는 배열의 생성자 함수인 Array.prototype 속성에 정의되어 있음
      Array.prototype.push.call(this, elem);
    },
  };

  likeArr.push("black");
  likeArr.push("white");
  printArr(likeArr);
})();
