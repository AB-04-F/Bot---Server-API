require('dotenv').config()
const { Client, Intents } = require('discord.js')
let client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES], partials: ['MESSAGE'] });

client.login(process.env.BOT_TOKEN)


//server is running
client.on("ready", () => {
    console.log("Bot is ready!")
})

//message Type
client.on("message", msg => {
    if (msg.content === "hey") {
        msg.reply("hi there")
    } else if (msg.content === "u good bro") {
        msg.channel.send("nah")
    }
})

//Delete Message
client.on("messageDelete", msg => {
    msg.reply("stop deleting messages!!");
})


//various Replay
client.on("message", msg => {
    if (msg.content === "hey") {
        msg.reply("hi there")
    } else if (msg.content === "u good bro") {
        msg.channel.send("nah")
    } else if (msg.content === "return is epic") {
        msg.react("❤️")
    }
})