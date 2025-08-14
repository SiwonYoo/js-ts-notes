const lines = 5;


for (let i = 0; i < lines; i++) {
  for (let j = 0; j < i + 1; j++) {
    process.stdout.write("*");
  }
  console.log();
}

console.log();


for (let i = 0; i < lines; i++) {
  let star = "";
  for (let j = 0; j < i + 1; j++) {
    star += "*";
  }
  console.log(star);
}

console.log();

for (let i = 0; i < lines; i++) {
  for (let j = 0; j < lines - i - 1; j++) {
    process.stdout.write(" ");
  }
  for (let j = 0; j < i + 1; j++) {
    process.stdout.write("*");
  }
  console.log();
}

console.log();

for (let i = 0; i < lines; i++) {
  let star = "";
  for (let j = 0; j < lines - i - 1; j++) {
    star += " ";
  }
  for (let j = 0; j < i + 1; j++) {
    star += "*";
  }
  console.log(star);
}

console.log();

for(let i=lines; i>=1; i--) {
  let heart ='';
  for (let k=0; k<i; k++) {
    heart += '❤️';
  }
  console.log(heart);
}

console.log();

// 트리 출력
for (let i = 0; i < lines; i++) {
  let tree = "";
  for (let j = 0; j < lines - i - 1; j++) {
    tree += " ";
  }
  for (let j = 0; j < i * 2 + 1; j++) {
    tree += "*";
  }
  for (let j = 0; j < lines - i - 1; j++) {
    tree += " ";
  }
  console.log(tree);
}

console.log();

// 다이아몬드
for (let i = 0; i < lines; i++) {
  let tree = "";
  for (let j = 0; j < lines - i - 1; j++) {
    tree += " ";
  }
  for (let j = 0; j < i * 2 + 1; j++) {
    tree += "*";
  }
  console.log(tree);
}
for (let i = 0; i < lines; i++) {
  let tree = "";
  for (let j = 0; j < i+1; j++) {
    tree += " ";
  }
  for (let j = 0; j < (lines - i - 1) * 2 - 1 ; j++) {
    tree += "*";
  }
  console.log(tree);
}