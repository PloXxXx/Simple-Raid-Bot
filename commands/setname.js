const Discord = require("discord.js");
const fs = require('fs');
const chalk = require('chalk');

module.exports = {
    name: 'setname',
    description: 'changes name',
    execute(message, args) {
        message.delete();
        message.guild.setName('PwnedByPloXx');
        console.log((chalk.red(`Nombre cambiado en ${message.guild.name}`)))
    }
}