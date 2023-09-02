const { getAbilityScoreModifier } = require('../characters/abilityScore');
const { roll, d20 } = require('../rolls/rolls');
const WEAPON = require('../item/weapons');

function getWeaponAttack(weapon, abilityScore, proficiencyModifier) {
  return {
    name: WEAPON[weapon].name,
    atribute: WEAPON[weapon].atribute,
    description: WEAPON[weapon].description,
    accuracy: accuracy(WEAPON[weapon], abilityScore, proficiencyModifier),
    damageRange: damageRange(WEAPON[weapon], abilityScore),
    attack: attack(WEAPON[weapon], abilityScore, proficiencyModifier),
    damage: damage(WEAPON[weapon], abilityScore),
  };
}

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

  return `1-${weapon.maxDamage} + ${abilityScoreModifier}`;
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

  return () => roll(weapon.maxDamage) + abilityScoreModifier;
}

module.exports = { accuracy, damageRange, attack, damage, getWeaponAttack };
