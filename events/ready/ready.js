const chalk=require("chalk")
module.exports = async (client) => {

  console.log(chalk`{bold.green ${client.user.tag}} is ready`);
  client.user.setActivity("help");

};
