const { roll, d20 } = require('../rolls/rolls');

function trapAttack(trap) {
  return {
    attack: () => d20() + trap.accuracy,
    damage: () => roll(trap.maxDamage),
  };
}

function trapAttackDescription(trap) {
  console.log('Dungon Master: ' + trap.description);
}

module.exports = { trapAttack, trapAttackDescription };
