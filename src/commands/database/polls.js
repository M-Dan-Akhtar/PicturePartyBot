module.exports = {
    name: "polls",
    description: "Displays active polls!",
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: Objectp[]
    
    callback: async (client, interaction) => {
        await interaction.deferReply();

        const Poll = require("../../models/poll");
        const { EmbedBuilder } = require('discord.js');
        let polls = await Poll.find();

        let embed = new EmbedBuilder()
            .setTitle("Active Polls")
            .setColor("Yellow");
            
        for(let i = 0; i < polls.length; ++i)
        {
            let pName = polls[i].poll_title;
            if(polls[i].winner == "none")
            {
                embed.addFields(
                    { 
                        name: `${pName}`, 
                    }
                )
            }
            else
            {
                embed.setTitle("No Active Polls");
            }
        }

        interaction.editReply({ embeds: [ embed ]});
    }
}