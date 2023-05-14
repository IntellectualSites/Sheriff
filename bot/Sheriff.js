const { Client, GatewayIntentBits, Partials, EmbedBuilder} = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages,], partials: [Partials.Channel] });

require('dotenv').config();

const channelID = '752638283581751378';

client.on('ready', () => {

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
      );

    setInterval(() => {
    const statusList = ["patreon.com/IntellectualSites", "PlotSquared v6"];
    const index = Math.floor(Math.random()*(statusList.length));
    client.user.setActivity(statusList[index], { type: 'LISTENING' });
  }, 20000);
    client.user.setStatus('online')
});

client.on('messageCreate', async message => {
  console.log(message.content);
  if (!message.guild) {
    const channel = await client.channels.fetch(channelID);
    if (channel) {
      const embed = new EmbedBuilder()
        .setColor('#1A71B9')
        .setAuthor(
          { name: message.author.tag, iconURL: message.author.avatarURL({ dynamic: true, size: 1024 }) },
        )
        .addFields(
          { name: 'Message: ', value: message.content },
          { name: 'Author: ', value: `${message.author.tag} (${message.author.toString()}) -> ${message.author.id}` },
        )
        .setTimestamp();
      channel.send({ embeds: [embed] });
      message.author.send("Your message has been delivered successfully.\nIf you are messaging me on behalf a PlotSquared" +
        "v6 discord verification, bear in mind that the process is not automated and done by a human. The verification" +
        "may take place within the next 24 hours, if there is no issue. If you have not been verified after this timeframe, " +
        "visit <#679320602774994957> again and ensure your posted message is accessible, e.g. your profile is not private. " +
        "You are allowed to bump your message once, if you belief, you did everything right.\nIf you have general questions" +
        " about the software IntellectualSites provides, please use the proper support channels.")
        .catch(console.error);
    } else {
      console.log(`Cannot find channel with ID ${channelID}`);
    }
  }
});

client.login(process.env.TOKEN);
