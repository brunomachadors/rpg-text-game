const GAME_TEXT = require('../gameText/gameText');
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
    abilityScore: CLASSES[classType].abilityScore,
    attacks: CLASSES[classType].attacks ? CLASSES[classType].attacks : null,
    spells: CLASSES[classType].spells ? CLASSES[classType].spells : null,
    proficiency: CLASSES[classType].proficiency
      ? CLASSES[classType].proficiency
      : null,
    proficiencyModifier: 2,
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

function characterStatusStyled() {
  console.log(GAME_TEXT.textSpacing);
  console.log(GAME_TEXT.character.characterSheet);
  console.log(GAME_TEXT.textSpacing);
  displayInfo();
  displayAbilityScore();
  displayAttacks();
  displayProficiencies();
}

function displayInfo() {
  console.log(`CLASS: ${this.character.class}`.toUpperCase());
  console.log(`LEVEL: ${this.character.level}`);
  console.log(`HP: ${this.character.hp}`);
  console.log(`ARMOR CLASS: ${this.character.ac}`);
  console.log(GAME_TEXT.textSpacing);
}

function displayAbilityScore() {
  console.log(`ABILITY SCORE:`);
  console.log(
    `  STR: ${this.character.abilityScore.strength} (${getAbilityScoreModifier(
      this.character.abilityScore.strength
    )})`
  );
  console.log(
    `  DEX: ${this.character.abilityScore.dexterity} (${getAbilityScoreModifier(
      this.character.abilityScore.dexterity
    )})`
  );
  console.log(
    `  CON: ${
      this.character.abilityScore.constitution
    } (${getAbilityScoreModifier(this.character.abilityScore.constitution)})`
  );
  console.log(
    `  INT: ${
      this.character.abilityScore.inteligence
    } (${getAbilityScoreModifier(this.character.abilityScore.inteligence)})`
  );
  console.log(
    `  WIS: ${this.character.abilityScore.wisdom} (${getAbilityScoreModifier(
      this.character.abilityScore.wisdom
    )})`
  );
  console.log(
    `  CHA: ${this.character.abilityScore.charisma} (${getAbilityScoreModifier(
      this.character.abilityScore.charisma
    )})`
  );
  console.log(GAME_TEXT.textSpacing);
}

function displayAttacks() {
  console.log(GAME_TEXT.character.attacks);
  this.character.attacks.forEach((attack) => {
    console.log('Attack: ' + attack.name);
    console.log('Atribute: ' + attack.atribute);
    console.log('Accuracy: ' + attack.accuracy);
    console.log('Damage: ' + attack.damageRange);
    console.log(GAME_TEXT.textSpacing);
  });
}

function displayProficiencies() {
  console.log(GAME_TEXT.character.proficiency);
  if (this.character.proficiencies) {
    console.log(Object.keys(this.character.proficiencies));
  } else {
    console.log();
  }
  console.log(GAME_TEXT.textSpacing);
}

module.exports = {
  characterSheet,
  characterStatus,
  characterStatusShort,
  characterStatusStyled,
};
