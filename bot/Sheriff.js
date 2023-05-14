const DiscordJS = require('discord.js')
require('dotenv').config()

const client = new DiscordJS.Client()

client.on('ready', async ()=> {

    console.log(
        `
        ------------------------
                 ${client.user.username}
        ------------------------
        487604407173775370
      
        Connected to:
        ${client.guilds.cache.size} guilds
        ${client.channels.cache.size} channels
      
        Owner: NotMyFault#3732 (254790994594234370)
        ------------------------
        `
      )

      setInterval(() => {
    const statusList = ["patreon.com/IntellectualSites", "PlotSquared v6"];
    const index = Math.floor(Math.random()*(statusList.length));
    client.user.setActivity(statusList[index], { type: 'LISTENING' });
  }, 20000);
    client.user.setStatus('dnd')
})

client.on("message", message => {
    if (message.author.bot) return;
  
    if (message.channel.type === "dm") {
        let serv = client.guilds.cache.find((server) => server.id === "268444645527126017")
        
  if(message.content.length < 1) {var text = " ";}
  else {text = "**Message:**\n" + message.content;}
    const DMEmbed = new DiscordJS.MessageEmbed()
    .setColor('#1A71B9')
    .setAuthor(message.author.tag, message.author.avatarURL({format: "jpg", size: 1024, dynamic: true}), `https://discord.com/users/${message.author.id}`)
    .addField("Author:", message.author.tag + " (<@" + message.author.id + ">) -> " + message.author.id, true)
    .setDescription(`${text}`)
    .setTimestamp()
    if(message.attachments.size) {
        const attachment = message.attachments.first();
        DMEmbed.addField("Attachment:", attachment.url)
    } else {
        DMEmbed.addField("Attachment:", "None")
    }
    client.channels.cache.get("752638283581751378").send(DMEmbed)
    message.author.send("Your message has been delivered successfully.\nIf you are messaging me on behalf a PlotSquared v6 discord verification, bear in mind that the process is not automated and done by a human. The verification may take place within the next 24 hours, if there is no issue. If you have not been verified after this timeframe, visit <#679320602774994957> again and ensure your posted message is accessible, e.g. your profile is not private. You are allowed to bump your message once, if you belief, you did everything right.\nIf you have general questions about the software IntellectualSites provides, please use the proper support channels.")
  }
  })

client.login(process.env.TOKEN)
