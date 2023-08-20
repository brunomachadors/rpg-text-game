const WEAPON = require('../../attacks/weapons');
const { d20, roll } = require('../../rolls/rolls');
const { getAbilityScoreModifier } = require('../abilityScore');
const proficiencyModifier = 2;

const ABILITY_SCORE = {
  strength: 16,
  dexterity: 12,
  constitution: 14,
  inteligence: 10,
  wisdom: 12,
  charisma: 10,
};

const SWORD = {
  name: WEAPON['sword'].name,
  toHit: getAbilityScoreModifier(ABILITY_SCORE.strength) + proficiencyModifier,
  description: `Deals 1d${WEAPON['sword'].damage} + ${WEAPON['sword'].atribute}`,
  attack: () =>
    d20() +
    getAbilityScoreModifier(ABILITY_SCORE.strength) +
    proficiencyModifier,
  damage: () =>
    roll(WEAPON['sword'].damage) +
    getAbilityScoreModifier(ABILITY_SCORE.strength),
};

const BOW = {
  name: WEAPON['bow'].name,
  toHit: getAbilityScoreModifier(ABILITY_SCORE.dexterity) + proficiencyModifier,
  description: `Deals 1d${WEAPON['bow'].damage} + ${WEAPON['bow'].atribute}`,
  attack: () =>
    d20() +
    getAbilityScoreModifier(ABILITY_SCORE.dexterity) +
    proficiencyModifier,
  damage: () => roll(WEAPON['bow'].damage),
};

const ATTACKS = [SWORD, BOW];
const ARMOR = {
  heavy: 'full plate',
  ca: 18,
};

const FIGHTER = {
  baseHp: 10,
  abilityScore: ABILITY_SCORE,
  attacks: ATTACKS,
  armor: ARMOR,
};

module.exports = FIGHTER;
