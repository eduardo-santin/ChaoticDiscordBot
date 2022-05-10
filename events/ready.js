const leagueshame = require('./functions/leagueshame');
const createdb = require('./functions/createdb');
module.exports = {
		name: 'ready',
		once: true,
		async execute(client) {


			console.log(`Logged in as ${client.user.tag}!`);
			

			client.user.setPresence({activities: [{name: 'with the bot', type: 'WATCHING'}], status: 'dnd'});
			//create database if it doesn't exist
			leagueshame(client);
			createdb();
			
		}
			
					};