const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "Guilds",
        "GuildMessages"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)