const { spellAttack } = require('../../attacks/spellAttack');
const { turnUndeadAttack } = require('../../attacks/turnUndead');
const { getWeaponAttack } = require('../../attacks/weaponAttack');
const { getArmorClass } = require('../../item/armor');
const { getAbilityScoreModifier } = require('../abilityScore');
const CANTRIP = require('../../spells/divineSpells');

const proficiencyModifier = 2;

const ABILITY_SCORE = {
  strength: 14,
  dexterity: 10,
  constitution: 12,
  inteligence: 10,
  wisdom: 16,
  charisma: 12,
};

const spellcasting = {
  ability: 'wisdom',
  score: ABILITY_SCORE.wisdom,
  accuracy: getAbilityScoreModifier(ABILITY_SCORE.wisdom) + proficiencyModifier,
  dc: 8 + getAbilityScoreModifier(ABILITY_SCORE.wisdom) + proficiencyModifier,
};

const MACE = getWeaponAttack('mace', ABILITY_SCORE, proficiencyModifier);
const ARMOR = getArmorClass('chainMail', ABILITY_SCORE.dexterity);
const SHIELD = getArmorClass('shield');
const TURN_UNDEAD = turnUndeadAttack();
const SACRED_FLAME = spellAttack(spellcasting, CANTRIP.sacredFlame);

const ATTACKS = [MACE, TURN_UNDEAD, SACRED_FLAME];

const SPELLS = [];

const CLERIC = {
  baseHp: 8,
  abilityScore: ABILITY_SCORE,
  attacks: ATTACKS,
  armor: ARMOR + SHIELD,
  spells: SPELLS,
  proficiency: {
    turnUndead: true,
  },
  proficiencyModifier,
  spellcastingAbility: spellcasting.ability,
};

module.exports = CLERIC;
