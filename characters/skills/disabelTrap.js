const GAME_TEXT = require('../../gameText/gameText');
const { d20 } = require('../../rolls/rolls');
const { getAbilityScoreModifier } = require('../abilityScore');
const ROGUE = require('../classes/rogue');
const TRAPS = require('../../challenges/traps');
const FIGHTER = require('../classes/fighter');
const WIZARD = require('../classes/wizard');
const CLERIC = require('../classes/cleric');

function disableTrap(character, trap) {
  const proficiencyBonus = character.proficiency?.toolkit
    ? character.proficiencyModifier
    : 0;

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
disableTrap(FIGHTER, TRAPS.arrow);
disableTrap(ROGUE, TRAPS.arrow);
disableTrap(WIZARD, TRAPS.arrow);
disableTrap(CLERIC, TRAPS.arrow);
module.exports = { disableTrap };
