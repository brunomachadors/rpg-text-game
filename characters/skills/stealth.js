const GAME_TEXT = require('../../gameText/gameText');
const { d20 } = require('../../rolls/rolls');
const { getAbilityScoreModifier } = require('../abilityScore');

function stealth(character, cd) {
  const proficiencyBonus = character.proficiency?.stealth
    ? character.proficiencyModifier
    : 0;

  const bonus =
    getAbilityScoreModifier(character.abilityScore.dexterity) +
    proficiencyBonus;
  const roll = d20();

  console.log(GAME_TEXT.stealth.check(roll, bonus));
  const test = roll + bonus;

  if (test >= cd) {
    console.log(GAME_TEXT.stealth.success);
    return true;
  }

  console.log(GAME_TEXT.stealth.failure);
  return false;
}

module.exports = { stealth };
