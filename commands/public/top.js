const Discord = require('discord.js');
const Shema = require("../../modules/thx.js");
module.exports = {
  name: "top",
  aliases: ["توب","leaderboard"],
  cooldown: "10s",
  category:"public",
  description:"رؤية أعلى طاقم الإدارة في النقاط",
  async run(client, message, args) {
  let data=await Shema.find({})
  if(!data.length){
//copyrights Abderrahmane
    message.lineReplyNoMention(`**لا يوجد أشخاص فالقائمة حاليا**`)

  } else {
    let i=1
    let array=data.sort((a,b)=>b.Thxs-a.Thxs).map(data=>`**${i++}. <@!${data.ID}> : \`${data.Thxs}\`**`)//copyrights Abderrahmane
    let top=array.slice(0,9).join("\n").replace("1.",":crown:")
    var tests=[]//copyrights Abderrahmane
    let test=array.forEach(data=>{
    tests.push(`${data.includes(message.author.id)}`)
    })
    console.log(tests)
    let index=tests.indexOf("true")
    if(index>9){
    top=top+`\n**You :**\n${array.slice(index,index+1).join(" ")}`
    }//copyrights Abderrahmane
    let embed=new Discord.MessageEmbed()
    .setTitle("**Top Support Team**")
    .setDescription(top)
    .setColor("#090909")
    .setFooter(`Reqested By ${message.author.tag}`,message.author.displayAvatarURL({dynamic:true,format:"png"}))
    message.lineReplyNoMention(embed)//copyrights Abderrahmane
  }


  }

}