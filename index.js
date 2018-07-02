const Discord = require('discord.js');
const bot = new Discord.Client();
const cmd = require('./extras');
const rempunc = require('remove-punctuation')

bot.on('message', (message) => {
    const argz = rempunc(message.content).toLowerCase().split(/ +/g);

    if (message.author.id !== '448500187829370890') {

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

        } else if (argz.indexOf('meatballs') > -1) {
            cmd.logmsg('https://www.chefboyardee.com/sites/g/files/qyyrlu321/files/images/callouts/Chef_SpaghettiCallout_750x556.jpg', message, bot);
            message.channel.send('https://www.chefboyardee.com/sites/g/files/qyyrlu321/files/images/callouts/Chef_SpaghettiCallout_750x556.jpg');
        }
        if (argz.indexOf('spaghetto') > -1) {
            cmd.logmsg('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Unu_spageto.jpg/1280px-Unu_spageto.jpg', message, bot)
            message.channel.send('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Unu_spageto.jpg/1280px-Unu_spageto.jpg')
        }
        if (argz.indexOf('meatball') > -1) {
            cmd.logmsg('http://img3.mashed.com/img/gallery/how-to-make-perfect-ikea-meatballs/whats-going-on-here-1502299624.jpg', message, bot)
            message.channel.send('http://img3.mashed.com/img/gallery/how-to-make-perfect-ikea-meatballs/whats-going-on-here-1502299624.jpg')
        }
        if (argz.indexOf('raviolo') > -1) {
            cmd.logmsg('http://bindiiberica.com/wp-content/uploads/2018/02/raviolacci-funghi-porcini_image_prodotto_fullview.jpg', message, bot)
            message.channel.send('http://bindiiberica.com/wp-content/uploads/2018/02/raviolacci-funghi-porcini_image_prodotto_fullview.jpg')
        }
        if (argz.indexOf('sauce') > -1) {
            cmd.logmsg('https://www.seriouseats.com/recipes/images/2014/09/20140919-easy-italian-american-red-sauce-vicky-wasik-19-1500x1125.jpg', message, bot);
            message.channel.send('https://www.seriouseats.com/recipes/images/2014/09/20140919-easy-italian-american-red-sauce-vicky-wasik-19-1500x1125.jpg');
        }

        cmd.runHive(message, bot);
    }
});

bot.login(process.env.Token);