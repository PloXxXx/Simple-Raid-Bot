const chalk = require("chalk");
const Discord = require("discord.js")
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'seticon',
    description: 'changes icon',
    execute (message, args) {
        message.delete()
        message.guild.setIcon("https://cdn.discordapp.com/attachments/857710148289298462/857710300797861968/OIP_3.jpg")
        console.log((chalk.red(`Imagen cambiada en ${message.guild.name}`)))
    }
}