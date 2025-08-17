/*
* 나머지 매개변수 (Rest parameters)
  - 정해지지 않은 수의 매개변수를 배열로 전달 받음
  - 함수의 마지막 매개변수 앞에 ... 을 붙임
* 기본값 매개변수 (Default parameters)
  - 함수 호출 시 인자값을 전달하지 않으면 undefined가 되지만 이때 다른 값으로 초기화시키고 싶을 경우
  - 매개변수 뒤에 "= 초기값" 형태로 작성
*/

function fn(n1=0, n2=0, ...nums){
  console.log(n1, n2, nums);
  var sum = n1 + n2;
  for(var i=0; i<nums.length; i++){
    sum += nums[i];
  }
  console.log('합계', sum);
}

fn();
fn(10);
fn(20, 30);
fn(40, 50, 60);
fn(1342,53,64,57,58,67,967,6734,5,234,23,6,467,567,97,8,566,34);
