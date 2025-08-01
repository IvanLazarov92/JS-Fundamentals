function solve(age) {
  if (age < 0) {
    console.log("out of bounds");
  } else if (age <= 2) {
    console.log("baby");
  } else if (age <= 13) {
    console.log("child");
  } else if (age <= 19) {
    console.log("teenager");
  } else if (age <= 65) {
    console.log("adult");
  } else if (age >= 66) {
    console.log("elder");
  }
}

solve(-1);
solve(0);
solve(2);
solve(13);
solve(19);
solve(65);
solve(66);
solve(1586461666);
