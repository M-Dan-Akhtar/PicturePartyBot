require('dotenv').config();
const mongoose = require('mongoose');

const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');
const eventHandlers = require('./handlers/eventHandlers');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
});




client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === "add")
    {
        const num1 = interaction.options.get("first-number").value;
        const num2 = interaction.options.get("second-number").value;

        interaction.reply(`The sum is ${num1 + num2}`);
    }
   

    if(interaction.commandName === "embed")
    {
        const embed = new EmbedBuilder()
                .setTitle("Embed Title")
                .setDescription("This is an embed description")
                .setColor("Random")
                .addFields( 
                    { 
                        name: "Field Title", 
                        value: "random value", 
                        inline:true
                    },
                    { 
                        name: "Field Title 2", 
                        value: "random value 2", 
                        inline:true
                    }
                );

        
        interaction.reply({ embeds: [ embed ]})
    }
});


client.on('messageCreate', (message) => {
    
    if(message.author.bot){ return; }

    if(message.content === "hello")
    {
        message.reply("Loser");
    }
});


(async () => {

    try {
        await mongoose.connect(process.env.DB_CONNECTION);

        console.log("Connected to database")

        eventHandlers(client);
        client.login(process.env.TOKEN); 
    } catch (error) {
        console.log(error);
    }
})();


