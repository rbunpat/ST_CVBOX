var DiscordJS = require('discord.js');
var bodyParser = require('body-parser');
var express = require("express");
const { json } = require('body-parser');
var app = express();
var jsonParser = bodyParser.json()
var imgURL = "";
var checkTime = "";
var checkDate = "";
var personTemp = "";
var personMask = "";
var devLoc = "";
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
    console.log("API Server running on port 3000");
});

app.get("/", (req, res, next) => {
    res.json(["GET Requests does nothing lol, refer to README.md for more info"]);
   });

app.post("/", jsonParser, (req, res, next) => {
    res.json("Server Status: 200 OK");
    imgURL = req.body[0]['img'];
    checkTime = req.body[0]['chktime'];
    checkDate = req.body[0]['chkdate'];
    devLoc = req.body[0]['devloc'];
    personTemp = req.body[0]['persontemp'];
    personMask = req.body[0]['personmask'];
    const exampleEmbed = {
        color: 0x0099ff,
        title: 'Covid-19',
        url: 'https://www.st.ac.th',
        author: {
            name: 'CovidBox.Alert',
            icon_url: 'https://www.st.ac.th/wp-content/uploads/2013/03/card_logo1.jpg',
            url: 'https://www.st.ac.th',
        },
        description: 'A student or teacher has their tempurature higher than 37.5°C',
        thumbnail: {
            url: 'https://i.imgur.com/AfFp7pu.png',
        },
        fields: [
            {
                name: 'Time',
                value: checkTime,
                inline: true,
            },
            {
                name: 'Date',
                value: checkDate,
                inline: true,
            },
            {
                name: 'Location',
                value: devLoc,
                inline: true,
            },
            {
                name: 'Temperature',
                value: personTemp,
                inline: false,
            },
            {
                name: 'Mask',
                value: personMask,
                inline: false,
            }
        ],
        image: {
            url: imgURL,
        },
        timestamp: new Date(),
    };
    client.channels.cache.get('996760524131934289').send({ embeds: [exampleEmbed] });
   }
);

client.login('YOUR TOKEN HERE');
