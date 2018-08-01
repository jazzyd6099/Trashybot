const Discord = require("discord.js");

const client = new Discord.Client();

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
	if (message.content.startsWith(prefix + "roll")) {
		 var roll = Math.floor(Math.random() * 6) + 1;
   		 message.reply("You rolled a " + roll);
	} else
		if (message.content.startsWith(prefix + "ur mom gay")) {
			message.guild.member(client.user).setNickname('Richi Phelps');
			bot.user.setAvatar("Richi_Phelps.jpg");
			message.reply("What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.");
  }
});

client.login(process.env.BOT_TOKEN);
