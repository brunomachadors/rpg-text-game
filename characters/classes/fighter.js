const { getWeaponAttack } = require('../../attacks/weaponAttack');
const { getArmorClass } = require('../../item/armor');

const proficiencyModifier = 2;

const ABILITY_SCORE = {
  strength: 16,
  dexterity: 14,
  constitution: 14,
  inteligence: 10,
  wisdom: 10,
  charisma: 10,
};

const LONGSWORD = getWeaponAttack(
  'longsword',
  ABILITY_SCORE,
  proficiencyModifier
);
const BOW = getWeaponAttack('bow', ABILITY_SCORE, proficiencyModifier);
const ATTACKS = [LONGSWORD, BOW];
const ARMOR = getArmorClass('breastplate', ABILITY_SCORE.dexterity);

const FIGHTER = {
  baseHp: 10,
  abilityScore: ABILITY_SCORE,
  attacks: ATTACKS,
  armor: ARMOR,
  proficiencyModifier,
};

module.exports = FIGHTER;
