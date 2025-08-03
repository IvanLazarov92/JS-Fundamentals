function solve(string) {
  //   let reversedString = "";

  //   for (let i = string.length - 1; i >= 0; i--) {
  //     let curLetter = string[i];
  //     reversedString += curLetter;
  //   }

  //   console.log(reversedString);
  //

  let arr = string.split("");
  arr.reverse();
  let reverse = arr.join("");
  console.log(reverse);
}

solve("Hello");
