const GAME_TEXT = require('../../gameText/gameText');
const { d20 } = require('../../rolls/rolls');
const { getAbilityScoreModifier } = require('../abilityScore');

function disableTrap(character, trap) {
  const proficiencyBonus = character.proficiency?.toolkit
    ? character.proficiencyModifier
    : 0;

  console.log(proficiencyBonus);

  const bonus =
    getAbilityScoreModifier(character.abilityScore.dexterity) +
    proficiencyBonus;
  const roll = d20();

  console.log(GAME_TEXT.trap.disable.roll(roll, bonus));
  const test = roll + bonus;

  if (test >= trap.cd) {
    console.log(GAME_TEXT.trap.disable.success);
    return true;
  }

  console.log(GAME_TEXT.trap.disable.failure);
  return false;
}

module.exports = { disableTrap };
