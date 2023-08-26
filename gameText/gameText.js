require('colors');

const GAME_TEXT = {
  classes: {
    fighter: `Fighter: Combat expert`,
    rogue: `Rogue: Disable traps and stealth`,
    wizard: `Wizard: Cast spells and solve riddles`,
    cleric: `Cleric: Turn undeads`,
  },

  character: {
    abilityScore: '================ABILITY=SCORES==================',
    characterSheet: '===============CHARACTER=SHEET==================',
    hpTitle: '=================CHARACTER=HP===================',
    hp: 'HP:',
    attacks: '====================ATTACKS=====================',
    proficiency: '==================PROFICIENCY===================',
  },

  combat: {
    attackBar: '===============CHARACTER=ATTACK=================',
    gameOver: '====================GAME=OVER===================',
    damage: '---------------------DAMAGE---------------------',
    monster: '--------------------MONSTER--------------------',
    monsterAttack: '================MONSTER=ATTACK==================',
    monsterDamage: '================MONSTER=DAMAGE==================',
    attack: (attack) => `ATTACK ROLL:${attack}`.cyan,
    attackDamage: (damage) => `ATTACK DAMAGE:${damage}`.red,
    hit: `YOU'VE HITTED`.green,
  },

  dungeonMaster: { describe: (text) => `Dungeon Master:${text}`.blue },

  menu: {
    mainMenu: 'Welcome to the Text RPG',
    selectCharacter: 'Before we start select your class:',
  },

  monster: {
    attack: (attack, ac) => `ATTACK:${attack} VS ARMOR CLASS:${ac}`.cyan,
    damage: (monsterDamage) => `DAMAGE:${monsterDamage}`.red,
    hit: `YOU'RE HITTED`.red,
  },

  trap: {
    disable: {
      success: 'You sucessfully disabled the trap'.green,
      failure: 'You failed to disable the trap'.red,
      roll: (roll, bonus) => `Disable trap roll: ${roll} + ${bonus}`.cyan,
    },
    attack: {
      attack: (attack) => `Trap attack:${attack}`.cyan,
      damage: (damage) => `Trap damage:${damage}`.red,
      hit: 'The hited you'.red,
      missed: 'The trap missed you'.green,
    },
  },

  textSpacing: '================================================',

  doors: 'You entered a dungeon and you see two doors, select one door'.blue,
  treasureDoor: 'You entered the door and found a treasure!'.blue,
  dangerDoor: `You entered the door and you've ran into a skeleton!`.blue,
  invalidDoor: 'You are lost in the dungeon',
  openChest: 'You found a trap and died. RIP'.blue,
  investigateChest: 'You found trap and you can disable it!'.blue,
  leave: 'COWAAAARRRRDDD!!!!'.blue,
  talkSkeleton: 'The skeleton talks about a riddle:'.blue,

  riddle: {
    riddle: '\n The more of\n this there is,\n the less you see.\n What is it?'
      .blue,
    riddleAnswer: ['darkness', 'dark'],
    riddleCountZero:
      'You failed to solve the riddle and the enemy attacks you.',
    riddleFailedAnswer: `You did not got the right answer try again:`,
    riddleCount: (count) => `You have more ${count} chances.`.cyan,
    riddleTitle: '===================RIDDLE=======================',
    solved: '===================SOLVED=======================',
  },

  stealth: {
    check: (roll, bonus) => `Stealth check: ${roll} Bonus: ${bonus}`.cyan,
    success: `You approached unnoticed.`.green,
    failure: `Your presence was noticed.`.red,
  },

  sneackAttack: `You hited a sneak attack`.green,
  nextAttack: 'Next Attack will be a Sneak Attack: 2d6'.blue,

  treasure: {
    found: 'You found a treasure'.blue,
  },
};

module.exports = GAME_TEXT;
