const {
  accuracy,
  damageRange,
  attack,
  damage,
} = require('../../attacks/attack');
const WEAPON = require('../../attacks/weapons');

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
  atribute: WEAPON['staff'].atribute,
  accuracy: accuracy(WEAPON['staff'], ABILITY_SCORE, proficiencyModifier),
  damageRange: damageRange(WEAPON['staff'], ABILITY_SCORE),
  attack: attack(WEAPON['staff'], ABILITY_SCORE, proficiencyModifier),
  damage: damage(WEAPON['staff'], ABILITY_SCORE),
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
