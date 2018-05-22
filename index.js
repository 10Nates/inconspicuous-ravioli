const Discord = require('discord.js');
const bot = new Discord.Client();
const prompt = require('prompt');
function getlength(number) {
    return number.toString().length;
}

ChanID = 'No ChanID specified';

prompt.start();
prompt.get(['IDandorMsg'], function (err, result) {
    const argz = result.IDandorMsg.slice().trim().split(/ +/g);
    console.log(result.IDandorMsg)
    if(getlength(argz[0]) == 18) {
        msg = result.IDandorMsg.replace(argz[0],'');
        bot.channels.get(argz[0]).send(msg);
        console.log(`Message Sent: ${msg}.`);
        ChanID = argz[0];
    } else {
        bot.channels.get(ChanID).send(IDandorMsg);
        console.log(`Message Sent: ${IDandorMsg}.`);
    }

});

bot.on('message', (message) => {
    const args = message.content.slice().trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(message.isMentioned(bot.users.get('448500187829370890'))) {
        console.log(message.author.username+' - '+message.content);
        message.channel.send(`Hello, ${message.author.username}.`);
    }

    prompt.start();
    prompt.get(['IDandorMsg'], function (err, result) {
        const argz = result.IDandorMsg.slice().trim().split(/ +/g);
        console.log(result.IDandorMsg)
        if(getlength(argz[0]) == 18) {
            msg = result.IDandorMsg.replace(argz[0],'');
            bot.channels.get(argz[0]).send(msg);
            console.log(`Message Sent: ${msg}.`);
            ChanID = argz[0];
        } else {
            bot.channels.get(ChanID).send(result.IDandorMsg);
            console.log(`Message Sent: ${result.IDandorMsg}.`);
        }
    
    });

});

bot.login(process.env.Token);
