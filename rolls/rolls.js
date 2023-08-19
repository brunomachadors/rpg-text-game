function roll(dice) {
  const min = 1;
  return Math.floor(Math.random() * (dice - min + 1) + min);
}

function d20(dices = 1) {
  let totalRoll = 0;
  for (let i = 0; i < dices; i++) {
    totalRoll += roll(20);
  }
  return totalRoll;
}

module.exports = { roll };
