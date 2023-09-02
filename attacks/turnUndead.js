const { d20 } = require('../rolls/rolls');
const { getAbilityScoreModifier } = require('../characters/abilityScore');

function turnUndeadAttack() {
  const turnUndeadAttack = {
    name: 'Turn Undead',
    description:
      'Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. ',
    atribute: 'Inteligence',
    attack: (spellsaveDC, target) => turnUndead(spellsaveDC, target),
  };

  return turnUndeadAttack;
}

function turnUndead(spellsaveDC, target) {
  const modifier = getAbilityScoreModifier(target.abilityScore.wisdon);
  const result = d20() + modifier;
  console.log('CD: ' + spellsaveDC);
  console.log('Monster roll: ' + result);

  if (result < spellsaveDC) {
    return true;
  }
  return false;
}

module.exports = { turnUndead, turnUndeadAttack };
