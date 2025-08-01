function solve(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let pyramidHight = 0;

  while (gold <= 0) {
    pyramidHight++;
    let currentFloor = base * base;
    let currFloorStone = (base - 2) * (base - 2);

    if (currentFloor < 9) {
      gold += currentFloor;
      break;
    }

    stone += currFloorStone;

    if (pyramidHight % 5 !== 0) {
      marble += currentFloor - currFloorStone;
    } else if (pyramidHight % 5 === 0) {
      lapisLazuli += currentFloor - currFloorStone;
    }

    base -= 2;
  }
  console.log(`Stone required: ${Math.ceil(stone * increment)}`);
  console.log(`Marble required: ${Math.ceil(marble * increment)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli * increment)}`);
  console.log(`Gold required: ${Math.ceil(gold * increment)}`);
  console.log(`Final pyramid height: ${Math.floor(pyramidHight * increment)}`);
}

// solve(11, 1);
solve(11, 0.75);
// solve(12, 1);

// //ChatGPT Version
// function solve(base, increment) {
//   let stone = 0;
//   let marble = 0;
//   let lapisLazuli = 0;
//   let gold = 0;
//   let pyramidHeight = 0;

//   while (base > 2) {
//     pyramidHeight++;
//     let totalArea = base * base;
//     let innerStoneArea = (base - 2) * (base - 2);
//     let outerLayer = totalArea - innerStoneArea;

//     stone += innerStoneArea;

//     if (pyramidHeight % 5 === 0) {
//       lapisLazuli += outerLayer;
//     } else {
//       marble += outerLayer;
//     }

//     base -= 2;
//   }

//   pyramidHeight++;
//   gold += base * base;

//   console.log(`Stone required: ${Math.ceil(stone * increment)}`);
//   console.log(`Marble required: ${Math.ceil(marble * increment)}`);
//   console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli * increment)}`);
//   console.log(`Gold required: ${Math.ceil(gold * increment)}`);
//   console.log(`Final pyramid height: ${Math.floor(pyramidHeight * increment)}`);
// }

// solve(11, 1);
// solve(11, 0.75);
// solve(12, 1);
