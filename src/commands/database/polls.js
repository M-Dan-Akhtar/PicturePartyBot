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
            .setTitle("No Active Polls")
            .setColor("Yellow");
        
        for(let i = 0; i < polls.length; ++i)
        {
            let pName = polls[i].poll_title;
            let movieList = "";

            if(polls[i].winner == "none")
            {
                embed.setTitle("Active Polls");
                console.log(pName);

                for(let j = 0; j < polls[i].movies.length; ++j )
                {
                    movieList += polls[i].movies[j].title + " \n";
                }

                embed.addFields(
                    { 
                        name: pName,
                        value: movieList, 
                        inline:true
                    }
                )
                console.log("done addFields");
            }
        }

        interaction.editReply({ embeds: [ embed, embed2 ]});
    }
}