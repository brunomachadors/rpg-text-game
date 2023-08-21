const GAME_TEXT = require('../gameText/gameTex');
const { getAbilityScoreModifier } = require('./abilityScore');
const CLASSES = require('./classes');

function characterSheet(classType) {
  let CHARACTER = {
    class: classType,
    level: 1,
    hp:
      CLASSES[classType].baseHp +
      getAbilityScoreModifier(CLASSES[classType].abilityScore.constitution),
    ac: CLASSES[classType].armor.ac,
    atributes: CLASSES[classType].abilityScore,
    attacks: CLASSES[classType].attacks ? CLASSES[classType].attacks : null,
    spells: CLASSES[classType].spells ? CLASSES[classType].spells : null,
    proficiencies: CLASSES[classType].proficiency
      ? CLASSES[classType].proficiency
      : null,
  };

  return CHARACTER;
}

function characterStatus() {
  console.log(GAME_TEXT.textSpacing);
  console.log(GAME_TEXT.character.characterSheet);
  console.log(GAME_TEXT.textSpacing);
  console.log(this.character);
  console.log(GAME_TEXT.textSpacing);
}

function characterStatusShort() {
  console.log(GAME_TEXT.character.hpTitle);
  console.log(GAME_TEXT.character.hp + this.character.hp);
  console.log(GAME_TEXT.textSpacing);
}

module.exports = { characterSheet, characterStatus, characterStatusShort };
