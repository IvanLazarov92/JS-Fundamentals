function solve(arr) {
  let username = arr[0];
  let password = "";
  let count = 0;

  for (let i = username.length - 1; i >= 0; i--) {
    password += username[i];
  }

  for (let i = 1; i < arr.length; i++) {
    let currString = arr[i];

    if (currString === password) {
      console.log(`User ${username} logged in.`);
      return;
    }

    count++;

    if (count === 4) {
      console.log(`User ${username} blocked!`);
      return;
    } else {
      console.log("Incorrect password. Try again.");
    }
  }
}

solve(["Acer", "login", "go", "let me in", "recA"]);
// solve(["momo", "omom"]);
// solve(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
