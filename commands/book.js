const { RichEmbed, Message } = require('discord.js')
const Trello = require("trello");
const productlist = "612bbeba6ec8547077983042"
const boardId1 = "612baa5eddde3d60ef8936d0"
var trello = new Trello("d83f454f404c941393c76a9b5376ccfc", "20f4761037b1566691e2959bede14b8c8c467733c6b33dcec9f498be58b42260");
const cards = trello.getCardsForList(productlist)
const rbx = require("noblox.js");
const fetch = require("node-fetch");

module.exports = {
	id: 'book',
	aliases: [], // defaults to []
	channels: 'any', // defaults to 'any'. options are: 'dm', 'guild', 'any'.
	// 'call' is an instance of the Call class, a class containing various properties and utility functions.
	exec: (call) => {
        let person = call.args[0];
        let vehicle = call.args[1];
        rbx.getIdFromUsername(person).catch(err => {
            return msg.reply(
              "sorry, that user doesn't seem to exist on ROBLOX."
            );
          });
          rbx.getIdFromUsername(person).then(id => {
            // gets user id for the specific part of the embed
              if (id) {
                fetch("https://trello.com/b/XDZIexFk/productwhitelisting.json") 
                  .then(res => res.json())
                  .then(json => {
                    const lists = json.lists;
                    const list = lists.find(c => c.name === vehicle);
                    console.log(json)
                    if (!list) {
                      return msg.reply("No vehicle has been added with this name. :sob:");
                    }

trello.addCard(id, person + ':' + vehicle, list.id)
msg.say('Successfully booked you for the next crossing (ALL BOOKINGS EXPIRE AFTER CROSSING CONCLUDES) ' + person)
                })
            }
        })
    }
}

