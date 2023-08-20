const { getAbilityScoreModifier } = require('../characters/abilityScore');
const { roll, d20 } = require('../rolls/rolls');

function accuracy(weapon, abilityScore, proficiencyModifier) {
  let abilityScoreModifier = getAbilityScoreModifier(
    abilityScore[weapon.atribute]
  );
  return `+${abilityScoreModifier + proficiencyModifier}`;
}

function damageRange(weapon, abilityScore) {
  let abilityScoreModifier = getAbilityScoreModifier(
    abilityScore[weapon.atribute]
  );

  return `1-${weapon.damage} + ${abilityScoreModifier}`;
}

function attack(weapon, abilityScore, proficiencyModifier) {
  const abilityScoreModifier = getAbilityScoreModifier(
    abilityScore[weapon.atribute]
  );
  return () => d20() + abilityScoreModifier + proficiencyModifier;
}

function damage(weapon, abilityScore) {
  const abilityScoreModifier = getAbilityScoreModifier(
    abilityScore[weapon.atribute]
  );

  return () => roll(weapon.damage) + abilityScoreModifier;
}

module.exports = { accuracy, damageRange, attack, damage };
