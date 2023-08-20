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

  combat: {
    attack: '=====================ATTACK=====================',
    gameOver: '====================GAME=OVER===================',
    damage: '=====================DAMAGE=====================',
    monster: '====================MONSTER=====================',
    monsterAttack: '================MONSTER=ATTACK==================',
    monsterDamage: '================MONSTER=DAMAGE==================',
  },

  characterSheet: '===============CHARACTER=SHEET==================',
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
    riddle: 'The more of this there is, the less you see. What is it?',
    riddleAnswer: 'darkness',
    riddleCountZero: 'The skeleton arrived and you died.',
    riddleFailedAnswer: `You did not got the right answer try again:`,
    riddleCount: (count) => `You have more ${count} chances.`,
    riddleTitle: '===================RIDDLE=======================',
  },
};

module.exports = GAME_TEXT;
