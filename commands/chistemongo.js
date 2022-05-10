const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const {
    Guild
} = require('discord.js');
const data = new SlashCommandBuilder()
    .setName('chistemongo')
    .setDescription('Calls you out for saying a bad joke and mutes you for a while!')
    .addUserOption(option => option.setName('target').setDescription('The user to call out for'))

module.exports = {
    data,
    async execute(interaction) {
        if (interaction.options.getUser('target') ) {
            //if no user is specified, specify that you need to specify a user.
            let guild = interaction.guild;
            let target = guild.members.cache.get(interaction.options.getUser('target').id);
            let user = guild.members.cache.get(interaction.user.id);
            
            //check if the target is in a voice channel
            // console.log(target.voice.channel);
            if(target.voice.channel === null) {
                await interaction.reply('The user you specified is not in a voice channel!');
                return;
            }
            //check if the user is a voice channel
            if(user.voice.channel === null) {
                await interaction.reply('You are not in a voice channel!');
                return;
            }
            
            //check if the user is in the same voice channel as the target
            if(user.voice.channel.id !== target.voice.channel.id) {
                await interaction.reply('You are not in the same voice channel as the user you specified!');
                return;
            }

            
            








            //mute the user for 5 seconds
            await interaction.reply(target.toString() + 'is in the gulag for 5 seconds for saying a bad joke!');
        } else {
            await interaction.reply('You need to specify a user!');
        }
    }
};