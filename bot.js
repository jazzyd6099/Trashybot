const Discord = require("discord.js");

const client = new Discord.Client();

//embedColors

const embedRed = 0xff0000
const embedOrange = 0xff790c
const embedYellow = 0xffff00
const embedGreen = 0x00ff00
const embedBlue = 0x0064ff
const embedPurple = 0x6a00b0
const embedMagenta = 0x9600ff
const embedPink = 0xff00ff
const embedBlack = 0x000000
const embedWhite = 0xffffff
const embedGray = 0x777777

client.on("ready", () => {
  console.log("I am ready to be a trashy ass bot.");
	
	client.user.setPresence({ game: { name: 'Trashass' }, status: 'dnd' })
  .then(console.log)
  .catch(console.error);
	});
client.on('guildMemberAdd', member => {
    member.guild.channels.get('474327704280367154').send({embed: {
	    				color: embedWhite,
	    				title: "Welcome to RandomShit.",
	    				description: "If you want to know what I can do, go to the text channel; #bot-commands. Enjoy the discord server and have fun.",
    					}});
 });
  client.on("message", (message) => {
	if (message.content.startsWith("i'm trash")) {
		message.channel.send("No, i'm trash.")
	}
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
