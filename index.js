const Discord = require('discord.js');
const bot = new Discord.Client();
const prompt = require('prompt');

/* function getlength(number) {
    return number.toString().length;
}

ChanID = 'No ChanID specified';

cHJvbXB0LnN0YXJ0KCk7DQogICAgcHJvbXB0LmdldChbJ0lEYW5kb3JNc2cnXSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7DQogICAgICAgIGNvbnN0IGFyZ3ogPSByZXN1bHQuSURhbmRvck1zZy5zbGljZSgpLnRyaW0oKS5zcGxpdCgvICsvZyk7DQogICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5JRGFuZG9yTXNnKQ0KICAgICAgICBpZihnZXRsZW5ndGgoYXJnelswXSkgPT0gMTgpIHsNCiAgICAgICAgICAgIG1zZyA9IHJlc3VsdC5JRGFuZG9yTXNnLnJlcGxhY2UoYXJnelswXSwnJyk7DQogICAgICAgICAgICBib3QuY2hhbm5lbHMuZ2V0KGFyZ3pbMF0pLnNlbmQobXNnKTsNCiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBNZXNzYWdlIFNlbnQ6ICIke21zZ30iLmApOw0KICAgICAgICAgICAgQ2hhbklEID0gYXJnelswXTsNCiAgICAgICAgfSBlbHNlIHsNCiAgICAgICAgICAgIGJvdC5jaGFubmVscy5nZXQoQ2hhbklEKS5zZW5kKHJlc3VsdC5JRGFuZG9yTXNnKTsNCiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBNZXNzYWdlIFNlbnQ6ICR7cmVzdWx0LklEYW5kb3JNc2d9LmApOw0KICAgICAgICB9DQogICAgDQogICAgfSk7 */

bot.on('message', (message) => {
    const args = message.content.slice().trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const argz = message.content.toLowerCase().split(/ +/g);

    if(message.isMentioned(bot.users.get('448500187829370890'))) {
        console.log(message.author.username+' - '+message.content);
        message.channel.send(`Hello, ${message.author.username}.`);
    }

    if(argz.indexOf('ravioli') > -1) {
        console.log(message.content, '-', message.author.username);
        message.channel.send('https://www.chefboyardee.com/sites/g/files/qyyrlu321/files/images/callouts/Chef_RavioliCallout_750x556.jpg');
    }
    if(argz.indexOf('spaghetti') > -1) {
        console.log(message.content, '-', message.author.username);
        message.channel.send('https://www.chefboyardee.com/sites/g/files/qyyrlu321/files/images/callouts/Chef_SpaghettiCallout_750x556.jpg');
    } else {
        if(argz.indexOf('meatballs') > -1) {
            console.log(message.content, '-', message.author.username);
            message.channel.send('https://www.chefboyardee.com/sites/g/files/qyyrlu321/files/images/callouts/Chef_SpaghettiCallout_750x556.jpg');
         }
    }
    if(argz.indexOf('sauce') > -1) {
        console.log(message.content, '-', message.author.username);
        message.channel.send('https://www.seriouseats.com/recipes/images/2014/09/20140919-easy-italian-american-red-sauce-vicky-wasik-19-1500x1125.jpg');
    }
/*------------------------------------------------------------------------------

 cHJvbXB0LnN0YXJ0KCk7DQogICAgcHJvbXB0LmdldChbJ0lEYW5kb3JNc2cnXSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7DQogICAgICAgIGNvbnN0IGFyZ3ogPSByZXN1bHQuSURhbmRvck1zZy5zbGljZSgpLnRyaW0oKS5zcGxpdCgvICsvZyk7DQogICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5JRGFuZG9yTXNnKQ0KICAgICAgICBpZihnZXRsZW5ndGgoYXJnelswXSkgPT0gMTgpIHsNCiAgICAgICAgICAgIG1zZyA9IHJlc3VsdC5JRGFuZG9yTXNnLnJlcGxhY2UoYXJnelswXSwnJyk7DQogICAgICAgICAgICBib3QuY2hhbm5lbHMuZ2V0KGFyZ3pbMF0pLnNlbmQobXNnKTsNCiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBNZXNzYWdlIFNlbnQ6ICIke21zZ30iLmApOw0KICAgICAgICAgICAgQ2hhbklEID0gYXJnelswXTsNCiAgICAgICAgfSBlbHNlIHsNCiAgICAgICAgICAgIGJvdC5jaGFubmVscy5nZXQoQ2hhbklEKS5zZW5kKHJlc3VsdC5JRGFuZG9yTXNnKTsNCiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBNZXNzYWdlIFNlbnQ6ICR7cmVzdWx0LklEYW5kb3JNc2d9LmApOw0KICAgICAgICB9DQogICAgDQogICAgfSk7 */

});

bot.login(process.env.Token);
