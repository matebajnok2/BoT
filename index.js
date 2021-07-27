const Discord = require("discord.js");
const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});

let botname = "Teszt bot"

bot.on("ready", async() => {
    console.log(`${bot.user.username} elindult!`)

    let státuszok = [
        "Prefix: !",
        "https://discord.gg/YJGQmMWcC8",
    ]

    setInterval(function() {
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]

        bot.user.setActivity(status, {type: "WATCHING"})
    }, 3000)
})

bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

    if(cmd === `${prefix}szerver`){
        message.channel.send("╭ ・ :muscle:  ・**LIQUIDEMPIRE**\n●▬▬▬▬▬▬▬▬๑۩✰۩๑▬▬▬▬▬▬▬▬●\n:speaking_head:  ・*play.liquidempire.tk*\n:speaking_head: ・*SkyPots | Leírás: !skypots*\n:speaking_head: ・*1.8.9 | Ajánljuk a TLauncher használatát...*\n:speaking_head: ・*...így láthatjuk egymás beállított skinjét!*\n:speaking_head: ・*Van -e jelenleg tagfelvétel? !tgf*\n:speaking_head: ・*Melyik hostról béreljük? **LGHHost***\n\n:speaking_head: ・*Egyéb kérdésed lenne? ()*\n●▬▬▬▬▬▬▬▬๑۩✰۩๑▬▬▬▬▬▬▬▬●\n╰ ・ :tada: ・**Kellemes időtöltést a szerveren!**");
    }
    if(cmd === `${prefix}skypots`){
        message.channel.send("╭ ・ :crossed_swords:  ・**LIQUIDEMPIRE**\n●▬▬▬▬▬▬▬▬๑۩✰۩๑▬▬▬▬▬▬▬▬●\n:speaking_head: ・*A skypots egy Skypvphez hasonló szervertéma!*\n:speaking_head: ・*Az űrben levő szigeteken kell ugrálni,...\n:speaking_head: ・*...a kitekben Heal és Heal II potik vannak!*\n:speaking_head: ・*PVP közben ezzel töltheted újra az életed.*\n:speaking_head: ・*Kincsesládákból tudod szerezni a jobbnál jobb tárgyakat!*\n:speaking_head: ・*Néhol OP, erő II és EP is megbújik!*\n:speaking_head: ・*Nincs Véd 4 Tör 3-nál erősebb szett*\n:speaking_head: ・*Nincs él 5-nél erősebb kard, erő 5nél erősebb íj!*\n:speaking_head: ・***SPAWNKILL => BAN***\n●▬▬▬▬▬▬▬▬๑۩✰۩๑▬▬▬▬▬▬▬▬●\n╰ ・ :tada: ・**Kellemes időtöltést a szerveren!**")
    }
    if(cmd === `${prefix}tgf`){
        message.channel.send("╭ ・ :crossed_swords:  ・**LIQUIDEMPIRE**\n●▬▬▬▬▬▬▬▬๑۩✰۩๑▬▬▬▬▬▬▬▬●\n:speaking_head: ・*Tagfelvétel: Aktív*\n:speaking_head: ・*Mire van tagfelvétel? Építészre és Moderátorra*\n:speaking_head: ・*Ha Youtuber szeretnél lenni, nyiss hibajegyet!*\n:speaking_head: ・*Ha partnerséget szeretnél kötni, nyiss hibajegyet!*\n\n:speaking_head: ・``Moderátor tagfelvétel``\n:speaking_head: ・ __Feltételei:__\n:speaking_head: ・ - Minimum 13. életév betöltése:exclamation:\n:speaking_head: ・ - Alapfokú parancsok ismerete:exclamation:\n:speaking_head: ・ - Megfelelő mikrofon és 2 hetes büntetetlen előélet:exclamation:\n:speaking_head: ・ - Jó probléma megoldóképesség  és csapatmunka:exclamation:\n:speaking_head: ・Jelentkezni szeretnél? **Írj rá egy Vezérigazgatóra!**\n\n:speaking_head: ・``Építész tagfelvétel``\n:speaking_head: ・ __Feltételei:__\n:speaking_head: ・ - Minimum 12. életév betöltése:exclamation:\n:speaking_head: ・ - Alapfokú parancsok ismerete és Worldedit parancsok:exclamation:\n:speaking_head: ・ - Jó probléma megoldóképesség  és csapatmunka:exclamation:\n:speaking_head: ・ - Tudj építeni Medieval és Modern stílusban:exclamation:\n:speaking_head: ・Jelentkezni szeretnél? **Írj rá egy Vezérigazgatóra!**\n●▬▬▬▬▬▬▬▬๑۩✰۩๑▬▬▬▬▬▬▬▬●\n╰ ・ :tada: ・**Kellemes időtöltést a szerveren!**")
    }


})




bot.login(tokenfile.token);