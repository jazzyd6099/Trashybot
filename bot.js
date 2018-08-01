const Discord = require("discord.js");

const client = new Discord.Client();

function doMagic8BallVoodoo() {
    var rand = [
    "Yes",
    "No.",
    "It is possible.",
    "Maybe.",
    "Eh.",
    "Nah, come back next time.",
    "I don't care.",
    "Maybe not.",
    "Probably.",
    "Probably not.",
    "Nah.",
    "It's a mystery.",
    "The world may never know.",
    "I don't know.",
    "What?",
    "I cannot answer that.",
    "How would I know?",
    "Ah.. No.",
    "How the fuck do I answer this?!",
];

    return rand[Math.floor(Math.random()*rand.length)];
}

client.on("ready", () => {
  console.log("I am ready to be a trashy ass bot.");
	
		client.user.setPresence({ game: { name: 'Trashass' }, status: 'dnd' })
  .then(console.log)
  .catch(console.error);
	
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
	  if (message.content.startsWith(prefix + "8ball")) {
			message.reply('Your answer is ' + doMagic8BallVoodoo());
  }
});

client.login(process.env.BOT_TOKEN);
