const WEAPON = require('../../attacks/weapons');
const { d20, roll } = require('../../rolls/rolls');
const { getAbilityScoreModifier } = require('../abilityScore');
const proficiencyModifier = 2;

const ABILITY_SCORE = {
  strength: 10,
  dexterity: 14,
  constitution: 10,
  inteligence: 16,
  wisdom: 12,
  charisma: 12,
};

const STAFF = {
  name: WEAPON['staff'].name,
  attack: () =>
    d20() +
    getAbilityScoreModifier(ABILITY_SCORE.strength) +
    proficiencyModifier,
  damage: () => roll(WEAPON['staff'].damage),
};
const ATTACKS = [STAFF];

const SPELLS = {};

const WIZARD = {
  baseHp: 6,
  abilityScore: ABILITY_SCORE,
  attacks: ATTACKS,
  spells: SPELLS,
  proficiency: {
    spellbook: true,
  },
};

module.exports = WIZARD;
