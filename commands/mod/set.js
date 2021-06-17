const Discord = require('discord.js');
const Shema = require("../../modules/thx.js");
module.exports = {
  name: "set",
  aliases: ["نقطة"],
  cooldown: "10s",
    category:"mod",
  description:"تغيير عدد نقاط أحد الإدارة",
  async run(client, message, args) {
    if (!message.member._roles.includes(client.config.mod_id) && !message.member.hasPermission("ADMINISTRATOR")) return
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) {
      return message.lineReply("**لم أجد الشخص الذي تريد تعيين نقاطه**")//copyrights Abderrahmane
    } else if (member.user.bot) {
      return message.lineReply("**لا يمكنك تعيين نقاط البوتات**")//copyrights Abderrahmane
    } else if (!member._roles.includes(client.config.support_id)) {
      return message.lineReply("**لا يمكنك تعيين نقاط شخص ليس من طاقم المبرمجين**")//copyrights Abderrahmane
    } else if (!args[1] || isNaN(parseInt(args[1])) || parseInt(args[1]) < 0) {
      return message.lineReply("**إختر رقما أكبر من 0 من فضلك**")//copyrights Abderrahmane
    }
    let data = await Shema.findOne({ ID: member.id })
    if (!data) {
      let newdata = await Shema.create({
        ID: member.id,
        Thxs: parseInt(args[1])
      });
      newdata.save()
      message.lineReplyNoMention(`**تم تعيين نقاط ${member.user.tag} بنجاح 
    
    نقاطه الآن :${parseInt(args[1])}**`)

    } else {
      await Shema.deleteMany({ ID: member.id })
      let newdata = await Shema.create({
        ID: member.id,
        Thxs: parseInt(args[1])
      })
      newdata.save()
      message.lineReplyNoMention(`**تم تعيين نقاط ${member.user.tag} بنجاح 
    
    نقاطه الآن :${parseInt(args[1])}**`)
    }


  }

}