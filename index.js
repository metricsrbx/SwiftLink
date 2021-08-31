require('dotenv').config();
const { Client, Intents } = require('discord.js');
const handler = require('d.js-command-handler');
const token = process.env.TOKEN;
const Trello = require("trello");
const productlist = ""
const boardId1 = ""
const trello = new Trello(process.env.trelloAppKey, process.env.trelloToken);
const cards = trello.getCardsForList(productlist)
const rbx = require("noblox.js");
const fetch = require("node-fetch");



const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
	console.log(client.user.username + ' has successfully booted up.');
});

handler(__dirname + '/commands', client, { customPrefix: '!' });

client.login(process.env.TOKEN)