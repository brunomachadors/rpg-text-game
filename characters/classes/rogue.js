const {
  accuracy,
  damageRange,
  attack,
  damage,
} = require('../../attacks/weaponAttack');
const WEAPON = require('../../attacks/weapons');
const { getAbilityScoreModifier } = require('../abilityScore');

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
  atribute: WEAPON['dagger'].atribute,
  description: WEAPON['dagger'].description,
  accuracy: accuracy(WEAPON['dagger'], ABILITY_SCORE, proficiencyModifier),
  damageRange: damageRange(WEAPON['dagger'], ABILITY_SCORE),
  attack: attack(WEAPON['dagger'], ABILITY_SCORE, proficiencyModifier),
  damage: damage(WEAPON['dagger'], ABILITY_SCORE),
};

const ATTACKS = [DAGGER];

const ARMOR = {
  type: 'Leather',
  ac: 12 + getAbilityScoreModifier(ABILITY_SCORE.dexterity),
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
