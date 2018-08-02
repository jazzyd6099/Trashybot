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
	   }
});

client.login(process.env.BOT_TOKEN);
