const { rawlist, select } = require("@inquirer/prompts");
const { door1, door2 } = require("../Doors/doors");

function renderGame() {
  rawlist({
    message: "Welcome to textRPG!!!",
    choices: [
      { name: "Door 1", value: "door1" },
      { name: "Door 2", value: "door2" },
    ],
  }).then(function (option) {
    switch (option) {
      case "door1":
        console.log("You entered in door1 and found a treasure!");
        door1();
        break;
      case "door2":
        console.log("You entereed door 2 and you've ran into a skeleton!");
        door2();
        break;
      default:
        console.log("That is not a valid option");
    }
  });
}

renderGame();

module.exports = { renderGame };
