const Discord = require('discord.js');
const Shema = require("../../modules/thx.js");
module.exports = {
  name: "reset",
  aliases: ["إعادة-تعيين"],
  cooldown: "10s",
  category: "mod",
  description: "إعادة تعيين النقاط",
  async run(client, message, args) {
    if (!message.member._roles.includes(client.config.mod_id) && !message.member.hasPermission("ADMINISTRATOR")) return
    if (["الكل", "all"].includes(args.join(" ").toLowerCase())) {
      let newdata = await Shema.deleteMany({})
      message.lineReplyNoMention("**تم إعادة تعيين نقاط الجميع بنجاح**")//copyrights Abderrahmane
    } else {
      let member = message.mentions.members.first() || message.guild.members.cache.get(args.join(' '));
      if (!member) {
        return message.lineReply("**لم أجد الشخص الذي تريد إعادة تعيين نقاطه**")//copyrights Abderrahmane
      } else if (member.user.bot) {
        return message.lineReply("**ليس للبوتات نقاط**")
      } else if (!member._roles.includes(client.config.support_id)) {
        return message.lineReply("**هذا الشخص ليس من طاقم المبرمجين**")//copyrights Abderrahmane
      }
      let data = await Shema.findOne({ ID: member.id })
      if (!data) {
        message.lineReplyNoMention(`**لا توجد نقاط لهذا المستخدم**`)//copyrights Abderrahmane

      } else {
        let newdata = await Shema.deleteMany({ ID: member.id })
        newdata.save()
        message.lineReplyNoMention(`**تم إعادة تعيين نقاط ${member.user.tag} بنجاح **`)
      }
    }

  }

}