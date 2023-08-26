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
- [ ] Turn Undead

### SNEAK ATTACK

I created the stealth and sneak attack mechanic.
When encountering an enemy, a stealth check is performed and if successful, the rogue can perform a sneak attack on the first attack.
Stealth validation is done for all characters, but does not generate the possibility of sneak attack.

## Tech

Dillinger uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [NODEMON] - To run the game
- [Inquirer](https://github.com/SBoudrias/Inquirer.js) - To create the console.log flow
- [Colors](https://github.com/Marak/colors.js) - To colorize the text console

## How to run

```sh
cd ../RPG-TEX-GAME
npm i
npm run start
```
