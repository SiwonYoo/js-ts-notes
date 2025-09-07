// 다른 라이브러리와의 충돌을 막기 위해 prefix 추가
const mylib = {};

// isPrime(5): 메모이제이션 안됨
// isPrime = isPrime.memoize();
// isPrime(5): 메모이제이션한 결과 변환
// 일급 객체, this, arguments, apply, prototype, closure
Function.prototype.memoize = function () {
  const fn = this; // fn에 this 저장(호출한 한수 (isPrime))
  return function () {
    return this.memo.apply(fn, arguments); // isPrime.memo(5)
  };
};

// ex04-05.js
// 함수에 메모이제이션 기능 추가 (캐시를 위한 코드)
Function.prototype.memo = function (key) {
  this._cache = this._cache || {};

  if (this._cache[key] !== undefined) {
    return this._cache[key];
  } else {
    return (this._cache[key] = this(key));
  }
};

// ex03-05.js
// Child가 Parent를 상속받는다.
mylib.inherite = function (Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);

  Child.prototype.constructor = Child;
};
