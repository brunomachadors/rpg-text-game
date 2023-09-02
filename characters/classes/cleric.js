const { turnUndeadAttack } = require('../../attacks/turnUndead');
const { getWeaponAttack } = require('../../attacks/weaponAttack');
const { getArmorClass } = require('../../item/armor');

const proficiencyModifier = 2;
const spellcastingAbility = 'wisdom';

const ABILITY_SCORE = {
  strength: 14,
  dexterity: 10,
  constitution: 12,
  inteligence: 10,
  wisdom: 16,
  charisma: 12,
};

const MACE = getWeaponAttack('mace', ABILITY_SCORE, proficiencyModifier);
const TURN_UNDEAD = turnUndeadAttack();
const ATTACKS = [MACE, TURN_UNDEAD];
const SPELLS = [];
const ARMOR = getArmorClass('chainMail', ABILITY_SCORE.dexterity);

const CLERIC = {
  baseHp: 8,
  abilityScore: ABILITY_SCORE,
  attacks: ATTACKS,
  armor: ARMOR,
  spells: SPELLS,
  proficiency: {
    turnUndead: true,
  },
  proficiencyModifier,
  spellcastingAbility: spellcastingAbility,
};

module.exports = CLERIC;
