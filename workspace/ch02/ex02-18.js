console.log(Math.min(10, 100)); // 10
console.log(Math.min(200, 100, 50, 60, 80, 30)); //30
console.log(Math.min(100, 20, 60, 50, 70)); // 20

// 지정한 배열의 요소 중 최소값을 반환
function smallest(nums) {
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (num < min) {
      min = num;
    }
  }
  return min;
}

// apply 이용
function smallest(nums) {
  const min = Math.min.apply(this, nums); // this는 형식상 존재
  return min;
}

// spread 이용
function smallest(nums) {
  const min = Math.min(...nums);
  return min;
}

console.log(smallest([10, 100])); // 10
console.log(smallest([200, 100, 50, 60, 80, 30])); //30
console.log(smallest([100, 20, 60, 50, 70])); // 20
