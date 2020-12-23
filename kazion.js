// kazion#1337 massdm bot official
// commands:
// +massdmall - massdms to all users of all statuses
// +massdmonline - massdms to online users
// +massdmoffline - massdms to offline users
// +massdmidle - massdms to idle users
// +massdmdnd - massdms to dnd users
// +ping - sends ping

let Discord = require("discord.js")
let bot = new Discord.Client()
let prefix = "+"
const client = new Discord.Client();
client.login(process.env.token)

bot.on("ready",() => {
  
console.log("kazion massdm bot enabled")
  console.log(`${bot.user.id}`)
console.log(`${bot.user.tag}`)
})

client.on('message', (client, message, args) => {
   if(message.content.toLowerCase().startsWith(prefix + "massdmall")){
      args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
     
             message.guild.members.cache.forEach(member => {
               member.send(argresult).catch(e => console.error(`Couldn't DM member ${member.user.tag}`)).then(console.log(`DM'd ${member.user.tag}`));
          });
             
    }
}
          )

client.on('message', (client, message, args) => {
   if(message.content.toLowerCase().startsWith(prefix + "massdmonline")){
      args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
      message.guild.members.cache.forEach(member => {
        if (member.id !== client.user.id && member.presence.status === 'online' && !member.user.bot)
          member.send(argresult).catch(e => console.error(`Couldn't DM member ${member.user.tag}`)).then(console.log(`DM'd ${member.user.tag}`));
          })
   }
})

client.on('message', (client, message, args) => {
   if(message.content.toLowerCase().startsWith(prefix + "massdmdnd")){
      args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
      message.guild.members.cache.forEach(member => {
        if (member.id !== client.user.id && member.presence.status === 'dnd' && !member.user.bot)
          member.send(argresult).catch(e => console.error(`Couldn't DM member ${member.user.tag}`)).then(console.log(`DM'd ${member.user.tag}`));
          })
   }
})

client.on('message', (client, message, args) => {
   if(message.content.toLowerCase().startsWith(prefix + "massdmidle")){
      args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
      message.guild.members.cache.forEach(member => {
        if (member.id !== client.user.id && member.presence.status === 'idle' && !member.user.bot)
          member.send(argresult).catch(e => console.error(`Couldn't DM member ${member.user.tag}`)).then(console.log(`DM'd ${member.user.tag}`));
          })
   }
})

client.on('message', (client, message, args) => {
   if(message.content.toLowerCase().startsWith(prefix + "massdmoffline")){
      args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
      message.guild.members.cache.forEach(member => {
        if (member.id !== client.user.id && member.presence.status === 'offline' && !member.user.bot)
          member.send(argresult).catch(e => console.error(`Couldn't DM member ${member.user.tag}`)).then(console.log(`DM'd ${member.user.tag}`));
          })
   }
})

client.on('message', (client, message, args) => {
   if(message.content.toLowerCase().startsWith(prefix + "ping")){
     const ping = new Discord.MessageEmbed()
        .setDescription(`🏓 \`${Date.now() - message.createdTimestamp}\` ms`);


        message.channel.send(ping);
   }
})
