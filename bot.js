const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('ODkzMzA5NDcyMjM0MTUxOTM2.Gr2LoN.kOO5BTT0zF_Op0dXlmZ06INbAINNL7YVpjJ7_M');
