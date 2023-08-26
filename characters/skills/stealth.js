const GAME_TEXT = require('../../gameText/gameText');
const { d20 } = require('../../rolls/rolls');
const { getAbilityScoreModifier } = require('../abilityScore');

function stealth(character, cd) {
  const proficiencyBonus = checkProficiency(character);
  const bonus = getBonus(character, proficiencyBonus);
  const roll = d20();
  const test = roll + bonus;
  console.log(GAME_TEXT.stealth.check(roll, bonus));
  return stealthCheck(test, cd);
}

function checkProficiency() {
  return character.proficiency?.stealth ? character.proficiencyModifier : 0;
}

function getBonus(character, proficiencyBonus) {
  return (
    getAbilityScoreModifier(character.abilityScore.dexterity) + proficiencyBonus
  );
}

function stealthCheck(test, cd) {
  if (test >= cd) {
    console.log(GAME_TEXT.stealth.success);
    return true;
  }

  console.log(GAME_TEXT.stealth.failure);
  return false;
}

module.exports = { stealth };
