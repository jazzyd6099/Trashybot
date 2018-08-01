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

var x = [
    1,
    2,
    3,
    4,
    5,
]

var output = x[Math.floor(Math.random()*x.length)];

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
	  } else
			if (message.content.startsWith(prefix + "trashtalk")) {
				let trashtalkedUser = message.mentions.users.first();
            
            if(message.mentions.users.size < 1) return message.reply("You forgot to mention someone for me to trashtalk.");
            message.channel.send("Fucking bitch, you weirdass hoe. :unamused:" + trashtalkedUser);
		} else
		if (message.content == "roll") {
			message.channel.send({embed: {
                    color: embedRed,
                    title: "You rolled...",
                    description: Math.floor(Math.random() * 6) + 1,  
  }
});

client.login(process.env.BOT_TOKEN);
