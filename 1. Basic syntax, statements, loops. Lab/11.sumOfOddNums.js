function solve(n) {
  let sum = 0;
  let oddNumbersCount = 0;

  for (let i = 1; oddNumbersCount < n; i += 2) {
    sum += i;
    oddNumbersCount++;
    console.log(i);
  }
  console.log(`Sum: ${sum}`);
}

solve(10);
