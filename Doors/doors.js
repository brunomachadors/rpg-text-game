const { select } = require("@inquirer/prompts");
const { renderGame } = require("../bin/textRPG");

function door1() {
  select({
    message: "Pick one:",
    choices: [
      {
        name: "Open treasure chest",
        value: "openChest",
      },
      {
        name: "Investigate treasure chest",
        value: "investigateChest",
      },
      {
        name: "Leave the treasure chest untouched",
        value: "leaveChest",
      },
    ],
  }).then(function (option) {
    switch (option) {
      case "openChest":
        console.log("You found a trap and died. RIP");

        break;
      case "investigateChest":
        console.log("You found trap and you can disable it!");

        break;
      case "leaveChest":
        console.log("COWAAAARRRRDDD!!!!");

        break;
      default:
        console.log("That is not a valid option");
    }
  });
}

function door2() {
  select({
    message: "Pick one:",
    choices: [
      {
        name: "Fight the skeleton!",
        value: "atackSkeleton",
      },
      {
        name: "Run away from the skeleton.",
        value: "runFromSkeleton",
      },
      {
        name: "Talk to the skeleton.",
        value: "talkToTheSkeleton",
      },
    ],
  }).then(console.log("You found a trap and you died. RIP."));
}

module.exports = { door1, door2 };
