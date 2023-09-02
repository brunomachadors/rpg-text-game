const { getWeaponAttack } = require('../../attacks/weaponAttack');
const { getArmorClass } = require('../../item/armor');

const proficiencyModifier = 2;

const ABILITY_SCORE = {
  strength: 16,
  dexterity: 12,
  constitution: 14,
  inteligence: 10,
  wisdom: 12,
  charisma: 10,
};

const SWORD = getWeaponAttack('sword', ABILITY_SCORE, proficiencyModifier);
const BOW = getWeaponAttack('bow', ABILITY_SCORE, proficiencyModifier);
const ATTACKS = [SWORD, BOW];
const ARMOR = getArmorClass('plate', ABILITY_SCORE);

const FIGHTER = {
  baseHp: 10,
  abilityScore: ABILITY_SCORE,
  attacks: ATTACKS,
  armor: ARMOR,
  proficiencyModifier,
};

module.exports = FIGHTER;
