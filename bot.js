const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = "!";
const version = "BETA"

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

var roast = [
  "Damn, not you again.",
  "You only annoy me when you’re breathing, really.",
  "Jesus might love you, but everyone else definitely thinks you’re an idiot.",
  "You’re about as useful as a screen door on a submarine.",
  "People like you are the reason I’m on medication.",
  "I believed in evolution until I met you.",
  "Were you born this stupid or did you take lessons?",
  "I am allergic to stupidity, so I break out in sarcasm.",
  "Where's your off button?",
  "I’d slap you but I don’t want to make your face look any better.",
  "Hey, your village called, they want their idiot back.",
  "I had a nightmare. I dreamed I was you.",
  "Earth is full. Go home.",
  "You swear so much, you put Bakugou's mouth to shame.",
  "90% of your beauty could be removed with a Kleenex.",
  "I’d tell you to go fuck yourself, but that would be cruel and unusual punishment.",
  "You're so inappropriate, I don't think you'll ever mature.",
  "I'd give you a nasty look but you already got one.",
  "If you're gonna be two-faced, atleast make one of them pretty.",
  "The only way you’ll ever get laid is if you crawl up a chicken’s ass and wait.",
  "If I wanted a bitch, I’d have bought a dog.",
  "Your family tree must be a cactus because everyone on it is a prick.",
];

var fortunes = [
    "Yes.",
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definelty.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now...",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good...",
    "Very doubtful.",
];

client.on("ready", () => {
  console.log("I am ready to be a trashy ass bot.");
	
	client.user.setPresence({ game: { name: 'With you bc I was coded for it.' }, status: 'dnd' })
  .then(console.log)
  .catch(console.error);
	});
client.on('guildMemberAdd', member => {
    member.guild.channels.get('474327704280367154').send({embed: {
	    				color: embedWhite,
	    				title: "Welcome to the beta of Rainbow Planet.",
	    				description: "If you want to know what I can do, go to the text channel; #bot-commands. Also, read the rules. Enjoy the discord server and have fun.",
    					}});
	    const Member = member.guild.roles.find(`name`, `Member`)
    const Newbie = member.guild.roles.find(`name`, `Newbie`)
    member.addRole(Member);
    member.addRole(Newbie);
 });
  client.on("message", (message) => {
	if (message.content.startsWith("i'm trash")) {
		message.channel.send("No, i'm trash.")
	} else
		if (message.content == "Who's TrashyBot?"){
			message.channel.send("I'm a bot created by the server owner, Jazzyd6099(JazzyTheWeirdAdminlol) to keep watch of the server while the admins/the owner are off/AFK! I was also made for entertainment purposes so don't get any ideas. **I'm watching you.**");
		} else
			  if (message.content == "trashybot is so mean") {
    				message.reply("I'm sorry that my brutal honesty inconvenienced your ego.");
			  } else
				  if (message.content == "Hewwo, i'm Twashybwot. It's noice to mweet you >w<") {
					  message.channel.send("I want to fucking die now."); 
				  } else
					  if (message.content == "HEY, NO FUCKING SWEARING IN THIS FUCKING SERVER GODDAMMIT!") {
						  message.channel.send("HEY! DON'T FUCKING SWEAR!");
					  } else
						  if (message.content == "HEY! DON'T FUCKING SWEAR!") {
							  message.channel.send("FUCK NO FUCK OFF OLD MAN");
						  } else
							  if (message.content == "FUCK NO FUCK OFF OLD MAN") {
							  	message.channel.send("WE'RE THE SAME FUCKING PERSON HOW AM I AN OLD MAN?");
							  } else
								  if (message.content == "WE'RE THE SAME FUCKING PERSON HOW AM I AN OLD MAN?") {
										  message.channel.send("shit u right");
	}
  });
client.on("message", (message) => {
  if (message.author.bot) return;
   if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
	
  if (!message.content.startsWith(prefix)) return;
	
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong.");
		  } else
  		  if (message.content.startsWith(prefix + "clear")) {
			  if (isNaN(args[0])) return message.channel.send("Please supply a valid amount to clear messages.");
			  if (args[0] > 100) return message.channel.send("Supply an amount less than 100!");
			  	message.channel.bulkDelete(args[0]).then(() => {
  			  message.channel.send("Cleared the messages.").then(message => message.delete(5000));
			});
				} else
		  	if (message.content.startsWith(prefix + "roast")) {
			let roastedUser = message.mentions.users.first();
				
            if(message.mentions.users.size < 1) return message.reply("You forgot to mention someone for me to roast.");
           		 message.channel.send( (roast[Math.floor(Math.random() * roast.length)]) + roastedUser);
			} else
	  		if (message.content.startsWith(prefix + "turn back")) {
		message.guild.member(client.user).setNickname('Trashy Bot');
            client.user.setAvatar("https://cdn.discordapp.com/attachments/474340568474976256/474366295232479232/depositphotos_69083153-stock-photo-steel-trash-can-isolated-on.jpg");
            message.channel.send("TEST");
			} else
					if (message.content.startsWith(prefix + "invite")) {
					 message.channel.send({embed: {
                   			 color: embedMagenta,
                   			 title: "Thinking of inviting someone?",
                   		 	 description: "Send them the following link to have them join! https://discord.gg/n2w3V8T",
                    		}});
					} else
					if (message.content.startsWith(prefix + "roll")) {
					  message.channel.send({embed: {
                  			  color: embedGray,
                  			  title: "You rolled a...",
                  		 	 description: Math.floor(Math.random() * 6) + 1,
                 		   }});
					} else
					 if (message.content.startsWith(prefix + "8ball")) {
        		        message.channel.send({embed: {
            		        color: embedGray,
            		        title: "Hmmm...",
                  		description: (fortunes[Math.floor(Math.random() * fortunes.length)]),
                    }});
					 } else
						 if (message.content.startsWith(prefix + "hi")) {
							 message.reply("Hello.");
						 } else
							 if (message.content.startsWith(prefix + "welcome test")) {
								 message.channel.send({embed: {
	    				color: embedWhite,
	    				title: "Welcome to Rainbow Planet.",
	    				description: "If you want to know what I can do, go to the text channel; #bot-commands. Enjoy the discord server and have fun.",
    					}});
							 } else
								 if (message.content.startsWith(prefix + "info")) {
								  message.channel.send({embed: {
           						 	  color: 0xf50107,
          						          title: "Currently in latest version.",
        						          description: "(Version " + version + ")",
            }});
								 } else
									 if (message.content.startsWith(prefix + "emojify")) {
										 message.channel.send("Hewwo, i'm Twashybwot. It's noice to mweet you >w<");
									 } else
										 		if (message.content.startsWith(prefix + "hug")) {
												let huggedUser = message.mentions.users.first();
          							  if(message.mentions.users.size < 1) return message.reply("You forgot to mention someone to hug!");
           										 message.reply( "hugged " + huggedUser);
												} else
												// LIMITED EDITION COMMANDS
										if (message.content.startsWith(prefix + "fuck")) {
												 message.channel.send("HEY, NO FUCKING SWEARING IN THIS FUCKING SERVER GODDAMMIT!");
										} else
											if (message.content.startsWith(prefix + "admin")) {
												message.reply("Nice try, but no.");
											} else
												if (message.content.startsWith(prefix + "roles")) {
													message.reply("There is too many to say but if you want the art club title or despacito, ask one of the admins!");
												} else 
													if (message.content.startsWith(prefix + "am i okay")) {
														message.reply("Probably not.");
	
			 }
						
});

client.login(process.env.BOT_TOKEN);
