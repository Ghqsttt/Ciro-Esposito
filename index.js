const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = 'we';
const token = 'NzA4ODQyMjI4OTMxNDkzOTE4.XrflmA.gcmraMx0Uqzsxr6BW1johz0q4iA';
 
bot.on('ready', () => {
    console.log(`${bot.user.tag} successfully logged in!`)
    bot.user.setActivity('Guerre Tra Clan', ({type: "SHOOTING"}))
})
 
bot.on('message', message => {
    let msg = message;
    if(msg.content === 'ciao'){
        msg.channel.send(`Scommett ca t chiamm ${message.author.tag}`)}
    if(msg.content === 'frat'){msg.channel.send(`Frat a vit tien sta canzon, fa abus https://youtu.be/vepYwY2qWqQ?t=95`)}
    if(msg.content === 'dove vai stasera?'){msg.channel.send(`Vado nderr merg che frat fidat perchè re cumpagn nun m fir`)}
    if(msg.content === 't sfong'){msg.channel.send(`Sce t mann a Kekk cap e bomb e a Ciruzz Undertaker`)}
    if(msg.content === 't sfong'){msg.channel.send(`Tu nun sai contro a chi ti sei messo, guardt aret ;)`)
    }
    if(msg.content === `${prefix}Help`){
        msg.author.send(`eccoti i comandi:
        -ciao 
        -frat
        -dove vai stasera?
        -t sfong`)
    }
})
 
bot.login(token);