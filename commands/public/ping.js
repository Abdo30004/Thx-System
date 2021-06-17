const Discord = require("discord.js")
module.exports = {
  name: "ping",
  cooldown: "10s",
  aliases: ["timetaken", "latency"],
  category: "public",
  description: "Bot ping",
  run: async (client, message, args) => {
    let msg = await message.channel.send("pong!")
//copyrights Abderrahmane
    msg.edit(`
Timetaken:${Date.now() - message.createdAt}ms
Ping: ${client.ws.ping}ms
`, { code: "xl" })

  }

};
