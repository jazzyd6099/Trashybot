const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready to be a trashy ass bot.");
	
	client.user.setPresence({ game: { name: 'Trashass' }, status: 'dnd' })
  .then(console.log)
  .catch(console.error);
 });
const prefix = "!";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
	
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong.");
	  } else
		  	if (message.content.startsWith(prefix + "trashtalk")) {
			let trashtalkedUser = message.mentions.users.first();
				
            if(message.mentions.users.size < 1) return message.reply("You forgot to mention someone for me to trashtalk.");
            message.channel.send("Fucking bitch, you weirdass hoe. :unamused:" + trashtalkedUser);
			} else
	  		if (message.content.startsWith(prefix + "turn back")) {
		message.guild.member(client.user).setNickname('Trashy Bot');
            client.user.setAvatar("https://cdn.discordapp.com/attachments/474340568474976256/474366295232479232/depositphotos_69083153-stock-photo-steel-trash-can-isolated-on.jpg");
            message.channel.send("TEST");
	   }
});

client.login(process.env.BOT_TOKEN);
