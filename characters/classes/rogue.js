const WEAPON = require('../../attacks/weapons');
const { d20, roll } = require('../../rolls/rolls');
const { getAbilityScoreModifier } = require('../abilityScore');
const proficiencyModifier = 2;

const ABILITY_SCORE = {
  strength: 10,
  dexterity: 16,
  constitution: 12,
  inteligence: 12,
  wisdom: 10,
  charisma: 14,
};

const DAGGER = {
  name: WEAPON['dagger'].name,
  attack: () =>
    d20() +
    getAbilityScoreModifier(ABILITY_SCORE.dexterity) +
    proficiencyModifier,
  damage: () => roll(WEAPON['dagger'].damage),
};

const ATTACKS = [DAGGER];

const ARMOR = {
  heavy: 'Leather',
  ca: 14 + ABILITY_SCORE.dexterity,
};

const ROGUE = {
  baseHp: 8,
  abilityScore: ABILITY_SCORE,
  attacks: ATTACKS,
  armor: ARMOR,
  proficiency: {
    sneakAttack: true,
    toolkit: true,
  },
};

module.exports = ROGUE;
