const CLERIC = require('./classes/cleric');
const FIGHTER = require('./classes/fighter');
const ROGUE = require('./classes/rogue');
const WIZARD = require('./classes/wizard');

const CLASSES = {
  fighter: FIGHTER,
  wizard: WIZARD,
  rogue: ROGUE,
  cleric: CLERIC,
};

module.exports = CLASSES;
