function solve(ppl, groupType, day) {
  let totalPrice = 0;

  switch (day) {
    case "Friday":
      switch (groupType) {
        case "Students":
          totalPrice = ppl * 8.45;
          if (ppl >= 30) {
            totalPrice *= 0.85;
          }
          break;
        case "Business":
          if (ppl >= 100) {
            totalPrice = ppl * 10.9 - 10 * 10.9;
          } else {
            totalPrice = ppl * 10.9;
          }
          break;
        case "Regular":
          totalPrice = ppl * 15;
          if (ppl >= 10 && ppl <= 20) {
            totalPrice *= 0.95;
          }
          break;
        default:
          break;
      }
      break;
    case "Saturday":
      switch (groupType) {
        case "Students":
          totalPrice = ppl * 9.8;
          if (ppl >= 30) {
            totalPrice *= 0.85;
          }
          break;
        case "Business":
          if (ppl >= 100) {
            totalPrice = ppl * 15.6 - 10 * 15.6;
          } else {
            totalPrice = ppl * 15.6;
          }
          break;
        case "Regular":
          totalPrice = ppl * 20;
          if (ppl >= 10 && ppl <= 20) {
            totalPrice *= 0.95;
          }
          break;
        default:
          break;
      }
      break;
    case "Sunday":
      switch (groupType) {
        case "Students":
          totalPrice = ppl * 10.46;
          if (ppl >= 30) {
            totalPrice *= 0.85;
          }
          break;
        case "Business":
          if (ppl >= 100) {
            totalPrice = ppl * 16 - 10 * 16;
          } else {
            totalPrice = ppl * 16;
          }
          break;
        case "Regular":
          totalPrice = ppl * 22.5;
          if (ppl >= 10 && ppl <= 20) {
            totalPrice *= 0.95;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

// solve(30, "Students", "Sunday");
// solve(40, "Regular", "Saturday");
// solve(29, "Students", "Friday");
solve(100, "Business", "Friday");
// solve(100, "Regular", "Friday");
// solve(40, "Regular", "Saturday");
// solve(40, "Regular", "Saturday");
// solve(40, "Regular", "Saturday");
// solve(40, "Regular", "Saturday");
