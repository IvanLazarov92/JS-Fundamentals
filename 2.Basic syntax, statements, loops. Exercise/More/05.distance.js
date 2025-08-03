function solve(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  let distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  console.log(distance);
}

solve(2, 4, 5, 0);
