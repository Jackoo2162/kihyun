const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', message => {
  if (message.content === 'niga isseoya sal su isseo every day, every night I can feel you') {
   // message.reply('pong');
    message.channel.sendMessage('neon neomu areumdawo nuneul ttel suga eopseo oh no');
  }
});


bot.on('message', message => {
  if (message.content === 'oh no') {
   // message.reply('pong');
    message.channel.sendMessage('kkoche pin gasigati jjillil geot gatado neol gatgo sipeo');
  }
});

bot.on('message', message => {
  if (message.content === 'hi') {
   // message.reply('pong');
    message.channel.sendMessage('bye');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});


bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});


bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});


bot.on("ready", () => {
  bot.user.setPresence({game: {name:"DRINKING COFFEE WITH MINHYUK BOT"}})
  console.log('I have jackoo: {SERVERNAME}')
})


bot.on('ready', ()=>{
  console.log(`Logged in as ${bot.user.tag}!`);
  voiceChannel = bot.guilds.find('name', 'DREAMENERG3T1CER').channels.find('name', 'KIHYUN');
  voiceChannel.join().then(()=>{
      console.log(`Connected to ${voiceChannel.name}!`);
  });
});

// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});


bot.login('');
