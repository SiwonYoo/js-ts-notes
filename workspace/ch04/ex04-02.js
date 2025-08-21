// count 속성과 ride(), getCount() 메서드 작성
const Counter = function () {
  let count = 0;
  this.getCount = function () {
    return count;
  };
  this.ride = function () {
    if (count < 40) {
      count++;
    } else {
      console.log("정원이 초과되었습니다.");
    }
  };
};

const c = new Counter();
c.ride();
c.ride();

for (let i = 0; i < 40; i++) {
  c.ride(); // 정원(40) 초과되면 count가 증가하지 않음
}
c.count += 40; // c에 count 속성을 없앰. 직접 접근할 수 없음.

console.log("전체 탑승자", c.getCount());
