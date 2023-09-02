const { getWeaponAttack } = require('../../attacks/weaponAttack');
const { getArmorClass } = require('../../item/armor');

const proficiencyModifier = 2;

const ABILITY_SCORE = {
  strength: 10,
  dexterity: 16,
  constitution: 12,
  inteligence: 12,
  wisdom: 10,
  charisma: 14,
};

const DAGGER = getWeaponAttack('dagger', ABILITY_SCORE, proficiencyModifier);
const ATTACKS = [DAGGER];
const ARMOR = getArmorClass('studdedLeather', ABILITY_SCORE.dexterity);

const ROGUE = {
  baseHp: 8,
  abilityScore: ABILITY_SCORE,
  attacks: ATTACKS,
  armor: ARMOR,
  proficiency: {
    sneakAttack: true,
    toolkit: true,
    stealth: true,
  },
  proficiencyModifier,
};

module.exports = ROGUE;
