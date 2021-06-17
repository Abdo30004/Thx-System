const Discord = require('discord.js');
const Shema = require("../../modules/thx.js");
module.exports = {
  name: "points",
  aliases: ["نقاط"],
  cooldown: "10s",
  category:"public",
  description:"رؤية نقاط أحدهم",
  //copyrights Abderrahmane
  async run(client, message, args) {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args.join(' '));
    if (!member) {
      return message.lineReply("**لم أجد الشخص الذي تريد شكره**")
    } else if (member.user.bot) {
      return message.lineReply("**لا تملك البوتات نقاط**")
    } else if (!member._roles.includes(client.config.support_id)) {
      return message.lineReply("**هذا الشخص ليس من طاقم المبرمجين**")
    }//copyrights Abderrahmane
    let data = await Shema.findOne({ ID: member.id })
    if (!data) {
      message.lineReplyNoMention(`**لا يملك ${member.user.tag} اي نقاط**`)
//copyrights Abderrahmane
    } else {
      message.lineReplyNoMention(`**نقاط ${member.user.tag} هي :${data.Thxs}**`)
    }


  }

}