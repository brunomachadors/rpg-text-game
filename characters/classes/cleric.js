const WEAPON = require('../../attacks/weapons');
const { d20 } = require('../../rolls/rolls');
const { getAbilityScoreModifier } = require('../abilityScore');
const proficiencyModifier = 2;

const ABILITY_SCORE = {
  strength: 14,
  dexterity: 10,
  constitution: 12,
  inteligence: 10,
  wisdom: 16,
  charisma: 12,
};

const ATTACKS = {
  blunt: {
    name: WEAPON['blunt'].name,
    attack: () =>
      d20() +
      getAbilityScoreModifier(ABILITY_SCORE.strength) +
      proficiencyModifier,
    damage: () => roll(WEAPON['blunt'].damage),
  },
};

const SPELLS = {};

const CLERIC = {
  baseHp: 8,
  abilityScore: ABILITY_SCORE,
  attacks: ATTACKS,
  spells: SPELLS,
  proficiency: {
    turnUndead: true,
  },
};

module.exports = CLERIC;
