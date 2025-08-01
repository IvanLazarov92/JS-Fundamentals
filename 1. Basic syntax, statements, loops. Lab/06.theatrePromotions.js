// function solve(typeOfDay, age) {
//   let ticketPrice = 0;

//   if (age >= 0 && age <= 18) {
//     if (typeOfDay === "Weekday") {
//       ticketPrice = 12;
//     } else if (typeOfDay === "Weekend") {
//       ticketPrice = 15;
//     } else if (typeOfDay === "Holiday") {
//       ticketPrice = 5;
//     }
//     console.log(`${ticketPrice}$`);
//   } else if (age > 18 && age <= 64) {
//     if (typeOfDay === "Weekday") {
//       ticketPrice = 18;
//     } else if (typeOfDay === "Weekend") {
//       ticketPrice = 20;
//     } else if (typeOfDay === "Holiday") {
//       ticketPrice = 12;
//     }
//     console.log(`${ticketPrice}$`);
//   } else if (age > 64 && age <= 122) {
//     if (typeOfDay === "Weekday") {
//       ticketPrice = 12;
//     } else if (typeOfDay === "Weekend") {
//       ticketPrice = 15;
//     } else if (typeOfDay === "Holiday") {
//       ticketPrice = 10;
//     }
//     console.log(`${ticketPrice}$`);
//   }

//   if (age < 0 || age > 122) {
//     console.log("Error!");
//   }
// }

function solve(typeOfDay, age) {
  let ticketPrice = 0;

  if (age < 0 || age > 122) {
    console.log("Error!");
    return;
  } else if (age <= 18) {
    if (typeOfDay === "Weekday") {
      ticketPrice = 12;
    } else if (typeOfDay === "Weekend") {
      ticketPrice = 15;
    } else if (typeOfDay === "Holiday") {
      ticketPrice = 5;
    }
    console.log(`${ticketPrice}$`);
  } else if (age <= 64) {
    if (typeOfDay === "Weekday") {
      ticketPrice = 18;
    } else if (typeOfDay === "Weekend") {
      ticketPrice = 20;
    } else if (typeOfDay === "Holiday") {
      ticketPrice = 12;
    }
    console.log(`${ticketPrice}$`);
  } else if (age <= 122) {
    if (typeOfDay === "Weekday") {
      ticketPrice = 12;
    } else if (typeOfDay === "Weekend") {
      ticketPrice = 15;
    } else if (typeOfDay === "Holiday") {
      ticketPrice = 10;
    }
    console.log(`${ticketPrice}$`);
  }
}
// solve("Weekday", 17);
// solve("Weekend", 55);
// solve("Holiday", 100);
solve("Weekday", 123);
