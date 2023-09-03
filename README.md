# rpg-text-game

_This project has the objective of create a text game RPG based Dungeons and Dragons on medieval theme_

## Tasks:

- [x] Copy to do list
- [x] Create Game
- [x] Select Door
- [x] Classes model
- [x] Select Class
- [x] Attack System
- [x] Enemy model
- [x] Combat system
- [x] Ridde system
- [x] Spells
- [x] Disable trap
- [x] Sneak attack
- [x] Turn Undead

## Tech

Dillinger uses a number of open source projects to work properly:

- [node.js](https://nodejs.org/en)- Node.js® is an open-source, cross-platform JavaScript runtime environment.
- [Nodemon](https://www.npmjs.com/package/nodemon) - Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [Inquirer](https://github.com/SBoudrias/Inquirer.js) - To create the console.log flow
- [Colors](https://github.com/Marak/colors.js) - To colorize the text console

## How to run

```sh
cd RPG-TEX-GAME
npm i
npm run start
```

## FEATURES

### Sneak Attack

I created the stealth and sneak attack mechanic.
When encountering an enemy, a stealth check is performed and if successful, the rogue can perform a sneak attack on the first attack.
Stealth validation is done for all characters, but only the rogue can do sneak attacks.

### Turn Undead

When you find an enemy that it's an undead type and you are a cleric, it's possible to use turn undead.
The turn undead it's a test agains the cleric spell dc, if the undead fails it runs away
