const { rawlist, select } = require('@inquirer/prompts');

function renderGame() {
    rawlist({
        message: 'Bem vindo ao textRPG!!!',
    });
}
