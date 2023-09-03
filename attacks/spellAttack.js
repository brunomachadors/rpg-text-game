const { getAbilityScoreModifier } = require('../characters/abilityScore');
const { d20, roll } = require('../rolls/rolls');

function spellAttack(spellcasting, spell) {
  return {
    name: spell.name,
    description: spell.description,
    atribute: spellcasting.ability,
    accuracy: `+${spellcasting.accuracy}`,
    damageRange: `1-${spell.maxDamage}`,
    attack: () => d20() + spellcasting.accuracy,
    damage: () => roll(spell.maxDamage),
    damageType: spell.damageType,
    savingThrow: {
      dc: spellcasting.dc,
      atribute: spell.savingThrow,
    },
  };
}

function checkSpellResist(spellAttack, monster) {
  const monsterRoll =
    d20() +
    getAbilityScoreModifier(
      monster.abilityScore[spellAttack.savingThrow.atribute]
    );

  console.log(
    `Monster roll: ${monsterRoll} VS CD: ${spellAttack.savingThrow.dc}`
  );

  if (spellAttack.savingThrow.dc > monsterRoll) {
    return true;
  }
  return false;
}

module.exports = { spellAttack, checkSpellResist };
