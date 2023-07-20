const {ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js');

module.exports = {
    name: "ban",
    description: "Bans a member from the server!!",
    deleted:true,
    // devOnly: Boolean,
    // testOnly: Boolean,
    options: [
        {
            name: "target-user",
            description: "THe user to ban",
            require: true,
            type: ApplicationCommandOptionType.Mentionable
        },
        {
            name: "reason",
            description: "The reason for banning",
            type: ApplicationCommandOptionType.String
        }
    ],
    permissionsRequired: [PermissionFlagsBits.Administrator],
    botpermissions: [PermissionFlagsBits.Administrator],
    
    callback: (client, interaction) => {
        interaction.reply("ban...")
    }
}