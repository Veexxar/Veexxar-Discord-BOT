const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "MTAwNDQ0NDY1NjY0MzM0NjQ2Mw.GkD1fa.AZzcIb9GGHmVeP2MYRFXqb0eDqDiV9RQrjCB10"

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