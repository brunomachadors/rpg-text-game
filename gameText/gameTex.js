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

  doors: 'You entered a dungeon and you see two doors, select one door',
  treasureDoor: 'You entered the door and found a treasure!',
  dangerDoor: `You entered the door and you've ran into a skeleton!`,
  invalidDoor: 'You are lost in the dungeon',
  openChest: 'You found a trap and died. RIP',
  investigateChest: 'You found trap and you can disable it!',
  leave: 'COWAAAARRRRDDD!!!!',
  attack: 'You attack the skeleton with your sword',
  talkSkeleton: 'The skeleton talks about a riddle:',
  riddle: 'The more of this there is, the less you see. What is it?',
  riddleAnswer: 'Darkness',
  textSpacing: '________________',
};

module.exports = GAME_TEXT;
