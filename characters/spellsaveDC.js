const { getAbilityScoreModifier } = require('./abilityScore');

function spellsaveDC(abilityScore, proficiencyModifier) {
  return 8 + getAbilityScoreModifier(abilityScore) + proficiencyModifier;
}

module.exports = { spellsaveDC };
