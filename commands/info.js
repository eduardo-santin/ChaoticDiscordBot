const { SlashCommandBuilder } = require('@discordjs/builders');
const data = new SlashCommandBuilder()
	.setName('info')
	.setDescription('Get info about a user or a server!')
	.addSubcommand(subcommand =>
		subcommand
			.setName('user')
			.setDescription('Info about a user')
			.addUserOption(option => option.setName('target').setDescription('The user')))
	.addSubcommand(subcommand =>
		subcommand
			.setName('server')
			.setDescription('Info about the server'));

module.exports = {
	data,
	async execute(interaction) {
		// if(interaction.option.getSubcommand() === 'user') {
		// 	console.log(interaction.message);
		// }
		console.log(interaction.options.getSubcommand());
		if(interaction.options.getSubcommand() === 'user') {
			if(interaction.options.getUser('target')) {
				await interaction.reply(`${interaction.options.getUser('target').tag}`);
			}
			else {
				await interaction.reply(`${interaction.user.tag}`);
			}
		}
	}
};