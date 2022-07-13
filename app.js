var DiscordJS = require('discord.js');
var bodyParser = require('body-parser');
var express = require("express");
const { json } = require('body-parser');
var app = express();
var jsonParser = bodyParser.json()
var imgurl = "";
var chktime = "";
var chkdate = "";
var persontemp = "";
var personmask = "";
const client = new DiscordJS.Client({
    intents: [
        DiscordJS.Intents.FLAGS.GUILDS,
        DiscordJS.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

client.on('ready', () => {
    console.log('The bot is ready');
})

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong',
        });
    }
})

app.listen(3000, () => {
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
    res.json(["Tony","Lisa","Masdsdfsdfichael","Ginger","Foodzaza"]);
   });

app.post("/", jsonParser, (req, res, next) => {
    res.json("Server Status: 200 OK");
    imgurl = req.body[0]['img'];
    chktime = req.body[0]['chktime'];
    chkdate = req.body[0]['chkdate'];
    persontemp = req.body[0]['persontemp'];
    personmask = req.body[0]['personmask'];
    const exampleEmbed = {
        color: 0x0099ff,
        title: 'Covid-19',
        url: 'https://www.st.ac.th',
        author: {
            name: 'CovidBox.Alert',
            icon_url: 'https://www.st.ac.th/wp-content/uploads/2013/03/card_logo1.jpg',
            url: 'https://www.st.ac.th',
        },
        description: 'A student or teacher has their tempurature higher than ...°C',
        thumbnail: {
            url: 'https://i.imgur.com/AfFp7pu.png',
        },
        fields: [
            {
                name: 'Time',
                value: chktime,
                inline: true,
            },
            {
                name: 'Date',
                value: chkdate,
                inline: true,
            },
            {
                name: 'Temperature',
                value: persontemp,
                inline: false,
            },
            {
                name: 'Mask',
                value: personmask,
                inline: false,
            }
        ],
        image: {
            url: 'https://i.imgur.com/AfFp7pu.png',
        },
        timestamp: new Date(),
    };
    client.channels.cache.get('996372633706827837').send({ embeds: [exampleEmbed] });
   }
);

client.login('TOKEN');
