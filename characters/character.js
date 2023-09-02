const GAME_TEXT = require('../gameText/gameText');
const { getAbilityScoreModifier } = require('./abilityScore');
const CLASSES = require('./classes');
const { spellsaveDC } = require('./spellsaveDC');

function characterSheet(classType) {
  const baseClass = CLASSES[classType];

  let CHARACTER = {
    class: classType,
    level: 1,
    hp:
      baseClass.baseHp +
      getAbilityScoreModifier(baseClass.abilityScore.constitution),
    ac: baseClass.armor,
    abilityScore: baseClass.abilityScore,
    attacks: baseClass.attacks ? baseClass.attacks : null,
    spells: baseClass.spells
      ? {
          names: baseClass.spells,
          ability: baseClass.spellcastingAbility,
          bonus:
            getAbilityScoreModifier(
              baseClass.abilityScore[baseClass.spellcastingAbility]
            ) + baseClass.proficiencyModifier,
          dc: spellsaveDC(
            baseClass.abilityScore[baseClass.spellcastingAbility],
            baseClass.proficiencyModifier
          ),
        }
      : null,
    proficiency: baseClass.proficiency ? baseClass.proficiency : null,
    proficiencyModifier: baseClass.proficiencyModifier,
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
  displaySpells();
  displayProficiency();
}

function displayInfo() {
  console.log(`CLASS:${this.character.class}`.toUpperCase());
  console.log(`LEVEL:${this.character.level}`);
  console.log(`HP:${this.character.hp}`);
  console.log(`ARMOR CLASS:${this.character.ac}`);
  console.log('PROFICIENCY MOD:' + this.character.proficiencyModifier);
}

function displayAbilityScore() {
  console.log(GAME_TEXT.character.abilityScore);

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
}

function displayAttacks() {
  console.log(GAME_TEXT.character.attacks);
  this.character.attacks.forEach((attack) => {
    console.log('');
    console.log('Attack: ' + attack.name);
    console.log('Atribute: ' + attack.atribute);

    if (attack.accuracy) {
      console.log('Accuracy: ' + attack.accuracy);
    }

    if (attack.damageRange) {
      console.log('Damage: ' + attack.damageRange);
    }

    if (attack.description) {
      console.log('Description: ' + attack.description);
    }
    console.log('');
  });
}

function displaySpells() {
  if (this.character.spells) {
    console.log(GAME_TEXT.character.spells);
    console.log(this.character.spells);
  }
}

function displayProficiency() {
  console.log(GAME_TEXT.character.proficiency);
  if (this.character.proficiency) {
    console.log(Object.keys(this.character.proficiency));
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
