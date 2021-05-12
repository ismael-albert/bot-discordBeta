const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")


client.on("ready", () => {
  console.log(`bot 7mal foi iniciado, com ${client.users.cache.size} usuários e em ${client.guilds.cache.size} servidores.`);
  client.user.setActivity('7mal no comando', { type: 'PLAYING' });(`Eu estou em ${client.guilds.cache.size} servidores`);
});

client.on("guildCreate", guild => {
    console.log(`O bot 7mal entrou no servidor: ${guild.name} (ID do servidor: ${guild.id}). Membros: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores.`);
});

client.on("guildDelete", guild => {
    console.log(`O bot 7mal foi removido do servidor: ${guild.name} (ID do servidor: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
});


client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    //----------------area de comandos--------------

    if (comando === "ping"){
        const m =await message.channel.send("Ping");
        m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A latencia da API é ${Math.round(client.ping)}ms`);
    }

    if (comando === "oi"){
        message.channel.send("salveeee hehe")
        message.channel.send("salveeee hehe")
    }
    if (comando === "youtube"){
        message.channel.send("https://www.youtube.com/channel/UCfz1CjbUlxwi1NBsrTqjDgw")
       
    }
    //----------------------------------------------
    if (comando === "cep"){
        
    }
    //----------------------------------------------
});

client.login(config.token);