const Discord = require("discord.js");

const client = new Discord.Client();

function doMagic8BallVoodoo() {
    var rand = [
    "yes.",
    "no.",
    "it is possible.",
    "maybe.",
    "eh.",
    "nah, come back next time.",
    "I don't care.",
    "maybe not.",
    "probably.",
    "probably not.",
    "nah.",
    "it's a mystery.",
    "the world may never know.",
    "I don't know.",
    "what?",
    "I cannot answer that.",
    "how would I know?",
    "ah.. No.",
    "how the fuck do I answer this?!",
];

    return rand[Math.floor(Math.random()*rand.length)];
}

client.on("ready", () => {
  console.log("I am ready to be a trashy ass bot.");
	
		client.user.setPresence({ game: { name: 'Trashass' }, status: 'dnd' })
  .then(console.log)
  .catch(console.error);
	
});
client.on('guildMemberAdd', member => {
    member.guild.channels.get('474327704280367154').send("Welcome to RandomShit. If you want to know the commands for me go to the text channel; #bot-commands. Enjoy the discord server and have fun."); 
});
  client.on("message", (message) => {
	if (message.content.startsWith("i'm trash")) {
		message.channel.send("No, i'm trash.")
	} else
	if (message.content == "Hey trashybot".toLowerCase() || message.content == "hey trashybot".toLowerCase() ||  message.content == "Hey trashybot!".toLowerCase()){
			message.reply("Wassup lil bitch!");
		}
  });
const prefix = "!";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
	
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong.");
	    } else
	  if (message.content.startsWith(prefix + "8ball")) {
			message.reply('The answer is ' + doMagic8BallVoodoo());
  }
});

client.login(process.env.BOT_TOKEN);
