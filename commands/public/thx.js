const Discord = require('discord.js');
const Shema = require("../../modules/thx.js");
module.exports = {
  name: "thx",
  aliases: ["شكر","tnx"],
  cooldown: "2h",
  category:"public",
  description:"شكر أحد طاقم الإدارة",
  async run(client, message, args) {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args.join(' '));
    if (!member) {
      return message.lineReply("**لم أجد الشخص الذي تريد شكره**")
    } else if (member.user.bot) {
      return message.lineReply("**لا يمكنك شكر البوتات**")
    } else if (member.id === message.author.id) {
      return message.lineReply("**لا يمكنك شكر نفسك **")
    } else if (!member._roles.includes(client.config.support_id)) {
      return message.lineReply("**لا يمكنك شكر شخص ليس من طاقم المبرمجين**")
    }
  let data=await Shema.findOne({ID:member.id})
  if(!data){
    let newdata=await Shema.create({
      ID :member.id,
      Thxs:1
    });
    newdata.save()
    message.lineReplyNoMention(`**تم شكر ${member.user.tag} بنجاح 
    
    نقاطه الآن :${1}**`)

  } else {
    await Shema.deleteMany({ID:member.id})
    let newdata=await Shema.create({
      ID:member.id,
      Thxs:data.Thxs+1
    })
    newdata.save()
    message.lineReplyNoMention(`**تم شكر ${member.user.tag} بنجاح 
    
    نقاطه الآن :${data.Thxs+1}**`)
  }


  }

}