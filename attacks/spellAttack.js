const { getAbilityScoreModifier } = require('../characters/abilityScore');
const { d20, roll } = require('../rolls/rolls');

function spellCasting(spell, spellCastingAbility) {
  const modifier = getAbilityScoreModifier(spellCastingAbility);
  const accuracy = () => d20() + modifier;
  const damage = () => roll(spell.maxDamage);

  const spellAttack = {
    name: spell.name,
    description: spell.description,
    atribute: 'null',
    accuracy: modifier,
    damageRange: `1-${spell.maxDamage}`,
    attack: accuracy,
    damage: damage,
  };

  return spellAttack;
}

module.exports = { spellCasting };