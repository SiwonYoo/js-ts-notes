"use strict";
// 내장 객체 - Object
(() => {
    const haru = { name: "하루", age: 5 };
    // keys, values, entries
    console.log(Object.keys(haru)); // ['name', 'age']
    console.log(Object.values(haru)); // ['하루', 5]
    console.log(Object.entries(haru)); // [['name', '하루'], ['age', 5]]
    // fromEntries
    const newUser = Object.fromEntries([
        ["name", "나무"],
        ["age", 8],
    ]);
    console.log(newUser); // { name: '나무', age: 8 }
    const haru2 = haru;
    haru.age++;
    console.log(haru.age, haru2.age); // 6 6
    // assign(주로 객체 복사할 때 사용)
    const haru3 = Object.assign({}, haru);
    haru.age++;
    console.log(haru.age, haru3.age); // 7 6
    const haru4 = { ...haru, breed: "이탈리안 그레이 하운드" };
    haru.age++;
    console.log(haru.age, haru4.age); // 8 7
    console.log(haru, haru4); // { name: '하루', age: 8 } { name: '하루', age: 7, breed: '이탈리안 그레이 하운드' }
})();
