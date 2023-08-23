const GAME_TEXT = {
  menu: {
    mainMenu: 'Welcome to the Text RPG',
    selectCharacter: 'Before we start select your class:',
  },

  classes: {
    fighter: `Fighter: Combat expert`,
    rogue: `Rogue: Disable traps and stealth`,
    wizard: `Wizard: Cast spells and solve riddles`,
    cleric: `Cleric: Turn undeads`,
  },

  character: {
    characterSheet: '===============CHARACTER=SHEET==================',
    hpTitle: '=================CHARACTER=HP===================',
    hp: 'HP:',
    attacks: '====================ATTACKS====================',
    proficiency: '==================PROFICIENCY==================',
  },

  combat: {
    attack: '===============CHARACTER=ATTACK=================',
    gameOver: '====================GAME=OVER===================',
    damage: '---------------------DAMAGE---------------------',
    monster: '--------------------MONSTER--------------------',
    monsterAttack: '================MONSTER=ATTACK==================',
    monsterDamage: '================MONSTER=DAMAGE==================',
    hit: `YOU'VE HITTED`,
    attackDamage: 'ATTACK DAMAGE: ',
  },

  trap: {
    disable: {
      success: 'You sucessfully disabled the trap',
      failure: 'You failed to disable the trap',
      roll: (roll, bonus) => `Disable trap roll: ${roll} + ${bonus}`,
    },
  },

  textSpacing: '================================================',

  doors: 'You entered a dungeon and you see two doors, select one door',
  treasureDoor: 'You entered the door and found a treasure!',
  dangerDoor: `You entered the door and you've ran into a skeleton!`,
  invalidDoor: 'You are lost in the dungeon',
  openChest: 'You found a trap and died. RIP',
  investigateChest: 'You found trap and you can disable it!',
  leave: 'COWAAAARRRRDDD!!!!',
  attack: 'You attack the skeleton',
  talkSkeleton: 'The skeleton talks about a riddle:',

  riddle: {
    riddle: '\n The more of\n this there is,\n the less you see.\n What is it?',
    riddleAnswer: ['darkness', 'dark'],
    riddleCountZero: 'The skeleton arrived and you died.',
    riddleFailedAnswer: `You did not got the right answer try again:`,
    riddleCount: (count) => `You have more ${count} chances.`,
    riddleTitle: '===================RIDDLE=======================',
    solved: '===================SOLVED=======================',
  },
};

module.exports = GAME_TEXT;
