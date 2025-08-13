function solve(p1, p2, p3) {
  let string = p1 + p2 + p3;
  let codes = [];
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    let curElement = string[i];
    reversedString += curElement;
  }

  for (let i = 0; i < reversedString.length; i++) {
    codes.push(reversedString.charCodeAt(i));
  }

  console.log(reversedString);
  console.log(codes.join(" "));
}

solve("a", 4, "$");
