const {
  accuracy,
  damageRange,
  attack,
  damage,
} = require('../../attacks/attack');
const WEAPON = require('../../attacks/weapons');
const proficiencyModifier = 2;

const ABILITY_SCORE = {
  strength: 14,
  dexterity: 10,
  constitution: 12,
  inteligence: 10,
  wisdom: 16,
  charisma: 12,
};

const BLUNT = {
  name: WEAPON['blunt'].name,
  atribute: WEAPON['blunt'].atribute,
  accuracy: accuracy(WEAPON['blunt'], ABILITY_SCORE, proficiencyModifier),
  damageRange: damageRange(WEAPON['blunt'], ABILITY_SCORE),
  attack: attack(WEAPON['blunt'], ABILITY_SCORE, proficiencyModifier),
  damage: damage(WEAPON['blunt'], ABILITY_SCORE),
};

const ATTACKS = [BLUNT];

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
