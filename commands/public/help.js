const Discord = require("discord.js")
module.exports = {
  name: "help",
  cooldown: "10s",
  aliases: ["أوامر", "اوامر", "مساعدة"],

  run: async (client, message, args) => {
    let prefix = client.config.prefix
    let embed = new Discord.MessageEmbed()
      .setTitle(`**Commands List**`)//copyrights Abderrahmane
      .addField("**Public Commands|| الأوامر العامة**", client.commands.filter(cmd => cmd.category == "public").map(cmd => `\`${prefix}${cmd.name}\` **${cmd.description}**`))
      .addField("**Mod Commands|| أوامر المشرفين**", client.commands.filter(cmd => cmd.category == "mod").map(cmd => `\`${prefix}${cmd.name}\` **${cmd.description}**`))
      .setColor("#090909")//copyrights Abderrahmane
      .setFooter(`Reqested By ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: "png" }))//copyrights Abderrahmane
    message.lineReplyNoMention(embed)
  }
};
