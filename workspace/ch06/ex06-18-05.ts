// 드롭다운 리스트 생성 - 제네릭 인터페이스와 함수
// ex06-18-04.ts 복사

(() => {
  interface DropdownItem<T extends string | number> {
    // string과 number로 타입 제한
    value: T;
    selected?: boolean;
  }

  const cityList: DropdownItem<string>[] = [
    { value: "Seoul", selected: false },
    { value: "busan" },
    { value: "GwangJu", selected: true },
    // { value: 56789 },
  ];

  const zipcodeList: DropdownItem<number>[] = [
    { value: 12345, selected: false },
    { value: 34567, selected: true },
    { value: 56789 },
  ];

  // FIXME: 아래 출력 결과와 같이 출력 되도록 함수 작성
  function createDropdownList<T extends string | number>(
    list: DropdownItem<T>[]
  ) {
    let value;
    let options = "";

    for (let item of list) {
      value = item.value;

      options += `\t<option selected="${item.selected ? "selected" : ""}">${
        typeof value === "string" ? value.toUpperCase() : value
      }</option>\n`;
    }

    return `<select>\n${options}</select>\n`;
  }

  console.log(createDropdownList<string>(cityList));
  console.log(createDropdownList<number>(zipcodeList));
})();
