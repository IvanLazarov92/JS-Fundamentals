function solve(num) {
  for (let i = 1; i <= num; i++) {
    let sumOfDigits = 0;
    let curDigit = String(i);
    for (let j = 0; j < curDigit.length; j++) {
      sumOfDigits += Number(curDigit[j]);
    }
    let isSpecial =
      sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11;
    console.log(`${curDigit} -> ${isSpecial}`);
  }
}
solve(15);
