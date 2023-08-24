const {
  accuracy,
  damageRange,
  attack,
  damage,
} = require('../../attacks/weaponAttack');
const WEAPON = require('../../attacks/weapons');
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
  atribute: WEAPON['sword'].atribute,
  description: WEAPON['sword'].description,
  accuracy: accuracy(WEAPON['sword'], ABILITY_SCORE, proficiencyModifier),
  damageRange: damageRange(WEAPON['sword'], ABILITY_SCORE),
  attack: attack(WEAPON['sword'], ABILITY_SCORE, proficiencyModifier),
  damage: damage(WEAPON['sword'], ABILITY_SCORE),
};

const BOW = {
  name: WEAPON['bow'].name,
  atribute: WEAPON['bow'].atribute,
  description: WEAPON['bow'].description,
  accuracy: accuracy(WEAPON['bow'], ABILITY_SCORE, proficiencyModifier),
  damageRange: damageRange(WEAPON['bow'], ABILITY_SCORE),
  attack: attack(WEAPON['bow'], ABILITY_SCORE, proficiencyModifier),
  damage: damage(WEAPON['bow'], ABILITY_SCORE),
};

const ATTACKS = [SWORD, BOW];

const ARMOR = {
  type: 'full plate',
  ac: 18,
};

const FIGHTER = {
  baseHp: 10,
  abilityScore: ABILITY_SCORE,
  attacks: ATTACKS,
  armor: ARMOR,
  proficiencyModifier,
};

module.exports = FIGHTER;
