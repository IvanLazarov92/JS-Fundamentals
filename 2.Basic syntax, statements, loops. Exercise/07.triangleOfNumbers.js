// function solve(num) {
//   for (let i = 1; i <= num; i++) {
//     let print = "";
//     for (let j = 1; j <= i; j++) {
//       print += j + " ";
//     }
//     console.log(print);
//   }
// }

// solve(5);

function solve(num) {
  for (let i = 1; i <= num; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += i;
      if (j < i) {
        line += " ";
      }
    }
    console.log(line);
  }
}

solve(5);
