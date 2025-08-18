function solve(input) {
  let meters = input[0];
  let km = (meters / 1000).toFixed(3);
  let miles = (km * 0.621371).toFixed(2);
  console.log(`${meters} meters is equal to ${km} kilometers.`);
  console.log(`${km} kilometers is equal to ${miles} miles.`);
}

solve([1845]);
