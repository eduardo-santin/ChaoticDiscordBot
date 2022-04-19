const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('node:fs');
const dotenv = require('dotenv');

dotenv.config();


const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	console.log(file);
	const command = require(`./commands/${file}`);
	console.log(command);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(process.env.token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(process.env.clientId, process.env.guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
