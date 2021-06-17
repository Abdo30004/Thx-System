const Discord = require('discord.js');require('discord-reply');
const client = new Discord.Client();
const fs = require('fs');
const { Collection } = require('discord.js');
const disbut = require('discord-buttons');
disbut(client);
const mongoose=require("mongoose");
client.config = require('./config/bot.js');

const chalk=require("chalk")
fs.readdir("./commands/", (err, categories) => {
  if (err) console.log(err)
  categories.forEach(category => {
    let categoryName = category.split('.')[0];
    fs.readdir(`./commands/${category}`, (error, files) => {
      if (error) { return console.log("error i can not find commands"); };
      files.filter(file => file.endsWith(".js")).forEach(file => {
        const command = require(`./commands/${category}/${file}`);

        client.commands.set(command.name, command)
      })
    })

  })
})
//copyrights Abderrahmane
fs.readdir('./events/', (err, categories) => {
  if (err) return console.log(err);
  categories.forEach(category => {
    let categoryName = category.split('.')[0];
    fs.readdir(`./events/${category}`, (error, files) => {
      if (error) { return console.log("error i can not find commands"); };
      files.filter(file => file.endsWith(".js")).forEach(file => {
        var event = require(`./events/${category}/${file}`);
        client.on(categoryName, event.bind(null, client))
      })
    })
  })
  })
//copyrights Abderrahmane
client.commands = new Discord.Collection();
async function start(){
  try{
await mongoose.connect(client.config.mongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
} catch{
  return console.log(chalk.red.bold('Invalid Mongo URL'))
}
try{
await client.login(client.config.token);
} catch{
  return console.log(chalk.red.bold(`Invalid token :\n
  -You can not use normal account token
  -Put your token on the env`))
}
await console.log(chalk.green.bold.visible("Starting....."))

}//copyrights Abderrahmane
start()