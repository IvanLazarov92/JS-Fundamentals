function solve(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    console.log(n1);
    if (n2 > n3) {
      console.log(n2);
      console.log(n3);
    } else {
      console.log(n3);
      console.log(n2);
    }
  } else if (n2 > n1 && n2 > n3) {
    console.log(n2);
    if (n1 > n3) {
      console.log(n1);
      console.log(n3);
    } else {
      console.log(n3);
      console.log(n1);
    }
  } else if (n3 > n1 && n3 > n2) {
    console.log(n3);
    if (n1 > n2) {
      console.log(n1);
      console.log(n2);
    } else {
      console.log(n3);
      console.log(n1);
    }
  }
}

// GPT Solve
// function solve(n1, n2, n3) {
//   const numbers = [n1, n2, n3];
//   numbers.sort((a, b) => b - a); // сортиране в низходящ ред
//   numbers.forEach((num) => console.log(num));
// }

solve(2, 1, 3);
