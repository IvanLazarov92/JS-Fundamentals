function solve(number) {
  let sum = 0; // Declarate the sum of all numbers to be 0 for later.
  let convertedNumber = number.toString(); // Converting number to string.

  //Takeing each character of the string  one by one and summ it in one number.
  for (let i = 0; i < convertedNumber.length; i++) {
    const element = convertedNumber[i];
    sum += Number(element);
  }
  sum = sum.toString(); // Converting the sum to string.

  //Check of any of the character of sum string is equall to "9".
  for (let j = 0; j < sum.length; j++) {
    const element = sum[j];
    if (element === "9") {
      console.log(`${number} Amazing? True`);
      return;
    }
  }
  amazing = "False";
  console.log(`${number} Amazing? False`);

  // Shorter version with includes() method.
  // let result = sum.toString().includes("9");
  // console.log(result ? `${number} Amazing? True` : `${number} Amazing? False`);
}

solve(1233);
solve(999);
