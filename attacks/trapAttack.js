const GAME_TEXT = require('../gameText/gameText');
const { roll, d20 } = require('../rolls/rolls');

function trapAttack(trap) {
  return {
    attack: () => d20() + trap.accuracy,
    damage: () => roll(trap.maxDamage),
  };
}

function trapAttackDescription(trap) {
  console.log(GAME_TEXT.dungeonMaster.describe(trap.description));
}

module.exports = { trapAttack, trapAttackDescription };
