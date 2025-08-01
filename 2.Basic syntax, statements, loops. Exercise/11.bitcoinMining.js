// получавам масив със грамове злато които съм изкопал (0 индекс - първи ден)
// всеки 3ти ден някой краде 30% от златото
// изчисли в кой ден си събрал достатъчно пари за да си купиш първият биткоин
// 1 биткоин = 11949.16 lv.
// 1г злато = 67.51
// Принт :
// First-line : `Bought bitcoins: {count}`
// Second-line : `Day of the first purchased bitcoin: {day}`
// Third-line : `Left money: {money} lv.`

function solve(array) {
  let daysCount = 0;
  let bitcoinCount = 0;
  let moneyEarned = 0;
  let firstBitcoinDay = 0;

  for (let i = 0; i <= array.length - 1; i++) {
    let dailyGold = array[i];
    daysCount++;
    if (daysCount % 3 === 0) {
      dailyGold *= 0.7;
    }
    moneyEarned += dailyGold * 67.51;

    while (moneyEarned >= 11949.16) {
      bitcoinCount++;
      moneyEarned -= 11949.16;
      if (bitcoinCount === 1) {
        firstBitcoinDay = daysCount;
      }
    }
  }
  console.log(`Bought bitcoins: ${bitcoinCount}`);
  if (firstBitcoinDay !== 0) {
    console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
  }
  console.log(`Left money: ${moneyEarned.toFixed(2)} lv.`);
}

solve([50, 100]);
