const Discord = require('discord.js');
const bot = new Discord.Client();
const prompt = require('prompt');
const cmd = require('./extras');

function getlength(number) {
    return number.toString().length;
}

ChanID = 'No ChanID specified';

bot.on('message', (message) => {
    const args = message.content.slice().trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const argz = message.content.toLowerCase().split(/ +/g);

    if (message.isMentioned(bot.users.get('448500187829370890'))) {
        cmd.logmsg(`Hello, ${message.author.username}.`, message, bot);
        message.channel.send(`Hello, ${message.author.username}.`);
    }

    if (argz.indexOf('ravioli') > -1) {
        cmd.logmsg('https://www.chefboyardee.com/sites/g/files/qyyrlu321/files/images/callouts/Chef_RavioliCallout_750x556.jpg', message, bot);
        message.channel.send('https://www.chefboyardee.com/sites/g/files/qyyrlu321/files/images/callouts/Chef_RavioliCallout_750x556.jpg');
    }
    if (argz.indexOf('spaghetti') > -1) {
        cmd.logmsg('https://www.chefboyardee.com/sites/g/files/qyyrlu321/files/images/callouts/Chef_SpaghettiCallout_750x556.jpg', message, bot);
        message.channel.send('https://www.chefboyardee.com/sites/g/files/qyyrlu321/files/images/callouts/Chef_SpaghettiCallout_750x556.jpg');
    } else {
        if (argz.indexOf('meatballs') > -1) {
            cmd.logmsg('https://www.chefboyardee.com/sites/g/files/qyyrlu321/files/images/callouts/Chef_SpaghettiCallout_750x556.jpg', message, bot);
            message.channel.send('https://www.chefboyardee.com/sites/g/files/qyyrlu321/files/images/callouts/Chef_SpaghettiCallout_750x556.jpg');
        }
    }
    if (argz.indexOf('sauce') > -1) {
        cmd.logmsg('https://www.seriouseats.com/recipes/images/2014/09/20140919-easy-italian-american-red-sauce-vicky-wasik-19-1500x1125.jpg', message, bot);
        message.channel.send('https://www.seriouseats.com/recipes/images/2014/09/20140919-easy-italian-american-red-sauce-vicky-wasik-19-1500x1125.jpg');
    }

    cmd.runHive(message, bot);

});

bot.login('NDQ4NTAwMTg3ODI5MzcwODkw.DeXkJg.K6UmPUQ7jy5jOccJoF9ri64fSJY');