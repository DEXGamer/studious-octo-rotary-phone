const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-مساعدة`,"http://twitch.tv/el3alwawi")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

// كود هلب
client.on('message', message => {
    if (message.content === "-مساعدة") {
    let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
.setThumbnail(message.author.avatarURL)
.addField('**هذي اوامر بوت القبيلة الفخمة واذا مافهمت شي راسل الادمن صاحب البوت**' , '------------------')
.addField('**لرؤية صورتك الشخصية** :point_left: **-صورة**' , '-----')
.addField('**لرؤية معلومات عن السيرفر** :point_left: **-سيرفر القبيلة**' , '-----')
.addField('**لرؤية معلومات عنك** :point_left: **-هوية**' , '-----')
.addField('**لمعرفة البينق لك وللبوت** :point_left: **-ping**' , '-----')
.addField('**يرسل لك البوت رابط اينفايت بالخاص** :point_left: **-رابط**' , '-----')
.addField('**ترحيب بعضو جديد بالصورة** :point_left: **ارحب**' , '-----')
.addField('**ترحيب بعضو جديد بالصورة** :point_left: **حياك**' , '-----')
.addField('**لما تروح وترجع مرة ثانية** :point_left: **باك**' , '-----')
.addField('**اذا تبي البوت يضحك معك على شي ** :point_left: **اضحك اضحك**' , '-----')
.addField(':small_orange_diamond::small_orange_diamond:__**معلومات للاداريين فقط**__:small_orange_diamond::small_orange_diamond:' ,' ** ** ')
.addField('     **-mute** ' ,' **لاعطاء شخص ميوت شات** ')
.addField('     **-كيك** ' ,' **لطرد العضو مع السبب بعد المنشن** ')
.addField('     **-باند** ' ,' **لحظر العضو مع السبب بعد المنشن** ')
.addField('     **-قفل الشات** ' ,' **اغلاق الشات على الجميع ماعدى الادارة** ')
.addField('     **-افتح الشات** ' ,' **اعادة فتح الشات للجميع** ')
.setColor("#000000")
.addField("Done | تــــم" , ":envelope: | :sleuth_or_spy::skin-tone-3:")
  
  
  
  message.channel.sendEmbed(embed);
  }
  });





client.on('message', message => {
    if(message.content === 'هلا'){
        message.channel.send(':watermelon: هـلُِآ وُغلُِآ منوُوُوُوُرٍ :watermelon:')
    }
});
client.on('message', message => {
    if(message.content === 'مع السلامة'){
        message.channel.send('🌟 آلُِلُِهـ يسلُِمڪ وُآن شُآء آلُِلُِهـ نشُوُفُڪ فُي أقٌرٍبَ وُقٌت 🌟')
    }
});
client.on('message', message => {
    if(message.content === 'صباح الخير'){
        message.channel.send('**`صبَآحٍ آلُِوُرٍرٍرٍرٍدِ منوُرٍ حٍبَيبَي 👳`**')
    }
});
client.on('message', message => {
    if(message.content === 'مساء الخير'){
        message.channel.send('**`منوُوُوُوُرٍ آلُِمسآء ڪلُِوُ 💖 مسآء آلُِسعٍآدِة`**')
    }
});
client.on('message', message => {
    if(message.content === 'منور'){
        message.channel.send('**آإلنور نورگ♥̨̥̬̩**')
    }
});
client.on('message', message => {
    if(message.content === 'السلام عليكم'){
        message.channel.send('**وعليكم السلام ورحمة الله تعالى وبركاته**')
    }
});
client.on('message', message => {
    if(message.content === 'اهلين'){
        message.channel.send('**آهـلُِين وُسهـلُِين وُمرٍحٍبَتين 😎**')
    }
});
client.on('message', message => {
    if(message.content === 'تصبح على خير'){
        message.channel.send('**وانت من اهل الخير حبي ♥**')
    }
});
client.on('message', message => {
    if(message.content === 'تصبحو على خير'){
        message.channel.send('**نوم العوافي وشكراً على وقتك الحلو ياحلو :relaxed:**')
    }
});

// معلوما ت السيرفر //

client.on('message', function(msg) {
    if(msg.content.startsWith ('-سيرفر القبيلة')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`معلومات عن :  **${msg.guild.name}**`)
      .addField('🌐**__ نوع السيرفر__**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`[**${msg.guild.owner}**]`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      .addField('🙃**__ الايموجيات :__**', `[**${msg.guild.emojis.size}**] \`[\` **${msg.guild.emojis.map(m => m).join('**|**')} \`]\`**`, true);

      msg.channel.send({embed:embed});
    }
  });


// افاتار
client.on('message', message => {
    var prefix = '-'
    if (message.content.startsWith(prefix + "صورة")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


// ترحيب
client.on('guildMemberAdd', Sal => { //By Salto7#4595
    var embed = new Discord.RichEmbed()
    .setAuthor(Sal.user.username, Sal.user.avatarURL)
    .setThumbnail(Sal.user.avatarURL)
    .setImage('https://i0.wp.com/dl2.glitter-graphics.net/pub/729/729642g8z5cf0f0r.gif') //هنا حط الصوره الي تبيها
    .setTitle('**عضو جديد!**')
    .setDescription('**آهـلُِآ بَڪ فُي سيرٍفُرٍ قٌبَيلُِة آلُِبَطُيخـ آلُِفُخـمة**')
    .addField('** 👤  انت العضو رقم **',`**[ ${Sal.guild.memberCount} ]**`,true)
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('name', 'شُآت💭آلُِقٌبَيلُِة') // هنا حط اسم الروم الي تبيه يكتب فيه
    if (!channel) return;
    channel.send({embed : embed});
    });

// هوية
client.on("message", msg => {
  if(msg.content === '-' + "هوية") {
      const embed = new Discord.RichEmbed();
  embed.addField("**🔱| اسم الحساب :**", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("**🆔| الاي دي :**", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('**📛| الحالة :**', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('**🎲| بلاينج :**', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('**🏅| الرتب : **', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('**📅| تم الانضمام للديسكورد في :**', `${msg.createdAt}`,true)
          .addField('**🤖| هل هو بوت ؟**', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});

// مسح الشات بالعدد
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "مسح") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("**```ضع عدد الرسائل التي تريد مسحها 👌```**").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});


// بينق
client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('-ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });


// ميوت شات
client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "-mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'خاص');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم اعطاع العضو ميوت مسبقا**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
  });
    }
  
  };
  
  });


// قفل الشات
client.on('message', message => {
 
    if (message.content === "-قفل الشات") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
 
           }).then(() => {
               message.reply("  **تم تقفيل الشات  :white_check_mark:**  ")
           });
             }
//™¦༺♚ƙἶղց|MaS♚༺¦™#7105
if (message.content === "-افتح الشات") {
    if(!message.channel.guild) return message.reply(' This command only for servers');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
 
           }).then(() => {
               message.reply("  **تم فتح الشات  :white_check_mark:**  ")
           });
             }
 
 
 
});

// كود الباند مع سبب
var prefix = "-"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "باند") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

// كود كيك مع سبب
var prefix = "-"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "كيك") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).kick();
 
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


// رابط
client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith("-رابط")) {

        message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send(`** تم أرسال الرابط برسالة خاصة **`)

      message.author.send(`**هـذَآ هـوُ رٍآبَطُ سيرٍفُرٍنآ آذَآ حٍآبَبَ تجٍيبَ آصدِقٌآء وُترٍبَعٍ رٍتبَ زْيآدِة معٍنآ
مدة الرابط : يـوم
 عدد استخدامات الرابط : 10 **`)
    }
});

// تقديم هوية الاعضاء
var guilds = {};
client.on('message',async message => {
 var prefix2 = '#';//البرفكس
  if(message.content.startsWith(prefix2 + "تعريف")) {
if(!message.channel.guild) return message.reply(' ');
  let submite = message.guild.channels.find(`name`, "التقديمات");
  if(!submite) return message.channel.send("❌لم اجد الروم الخاص بالتقديمات");
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
    message.channel.send('📝 **| من فضلك اكتب اسمك الأن... ✏ **').then(msg => {
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 90000,
      errors: ['time']
    })
    .then(collected => {
      collected.first().delete();
      thisMessage = collected.first().content;
      let boi;
      msg.edit('📜 **| من فضلك اكتب عمرك  الأن... ✏ **').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: ['time']
          })
          .then(collected => {
            collected.first().delete();
            boi = collected.first().content;
            let boi2;
            msg.edit('🤵 **| من فضلك اكتب من اي بلد انت الأن... ✏ **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ['time']
              })
              .then(collected => {
                collected.first().delete();
              boi2 = collected.first().content;
      msg.edit('🛡 **|  هل انت متأكد من تقديمك؟ |  نعم  او  لا**');
 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        if(collected.first().content === 'لا') {
          msg.delete();
          message.delete();
          thisFalse = false;
        }
        if(collected.first().content === 'نعم') {
          if(thisFalse === false) return;
          msg.edit('🕊 **| Done ✅, تم بنجاح نشر تقديم في روم التقديمات**');
          collected.first().delete();
          submite.send(`**[:arrow_down: ${message.guild.name} :arrow_down:]**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
:sunglasses: **__اسم العضو__** : **${thisMessage}**
:boy:  **__عمره__** : **${boi}**
:earth_africa: **__من بلد__** : **${boi2}**
:thumbsup: **__تم التقديم بواسطة__** : **${message.author}**
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
@everyone | @here
`);
        }
      }
  );
});
    });
  }
    );
  });
}
);
})}});

// كود انفايت البوت
client.on('message', message => {
  if (true) {
if (message.content === 'invite bot') {
      message.author.send('  **هذا هو رابط البوت وتستطيع اضافته الى سيرفرك بنجاع** |	  https://discordapp.com/api/oauth2/authorize?client_id=533994333607690275&permissions=8&scope=bot  ').catch(e => console.log(e.stack));
    }
   }
  }); 
client.on('message', message => {
     if (message.content === "invite bot") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField("** Done | تــــم **" , "**تم ارسال رابط انفايت البوت في الخاص**")
  message.channel.sendEmbed(embed);
    }
});

// سحب الكل لروم الصوت
 client.on('message', message => {
    if(message.content.startsWith(prefix + 'سحب الكل')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });

// سحب عضو
client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'سحب')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "سحب [م]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("**لا تستطيع سحب **"+ message.mentions.members.first() +"** يجب ان يكون هذه العضو في روم صوتي**")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});

// ميوت شات انفايت سيرفر
 client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers **');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('**` انت معاقب ميوت شاتي بسبب نشر سيرفرات ان كان عن طريق الخطا من فضلك تكلم مع الادارة `**');
   
       
    }
})

// ايموجي البوت يكتب
const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};
'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});
client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "اكتب")) {
          let args = message.content.split(" ").slice(1);
  if (args.length < 1) {
    message.channel.send('You must provide some text to emojify!');
}

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
);
};
});

// امر تذكير بالوقت
var attentions = {};
var times = {
    "1⃣": "m",
    "2⃣": "h",
    "3⃣": "d"
}
var times_ms = {
    "m": 1000 * 60,
    "h": 1000 * 60 * 60,
    "d": 1000 * 60 * 60 * 24
}
var times_name = {
    "m": "الدقائق",
    "h": "الساعات",
    "d": "الأيام"
}
console.log('Alarm Code . By NorElden..');
client.on('message',( message )=>{
    if( message.content.startsWith( prefix + 'ذكرني' ) ){
        if( attentions[ message.member ] ) {
            message.channel.send( message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                m.react('1⃣').then( r1 => {
                    m.react('2⃣').then( r2 => {
                        setTimeout(function ( ){
                            m.edit( message.member +', ** يوجد تذكير مضاف بالفعل, هل تريد حذفه ؟ ** \n**:one: نعم** \n **:two: لا** ' );
                            m.awaitReactions((reaction, user) => user.id == message.author.id, {time: 60000, maxEmojis: 1})
                            .then(result => {
                                var reaction = result.firstKey();
                                if( reaction == "1⃣" || reaction == "2⃣" ){
                                    if( reaction == "1⃣" ){
                                        clearTimeout(attentions[message.member]['timer']);
                                        attentions[message.member] = undefined;
                                        m.edit(message.member + '**:white_check_mark: تم حذف التذكير, يمكنك الآن أضافة واحد**');
                                    } else if( reaction == "2⃣" ){
                                        m.edit(message.member + '** لن يتم حذف التذكير **')
                                    }
                                    m.clearReactions();
                                }
                            });
                        },1000);
                    });
                });
            });
           
        } else {
            attentions[message.member] = { };
            message.channel.send( message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                m.edit( message.member + ', **:writing_hand: ماذا تريد ان يكون عنوان التذكير **' )
                m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                    m1 = m1.first();
                    attentions[message.member]['title'] = m1.content;
                    m1.delete();
                    m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                        m.edit( message.member + ', **:writing_hand: ماذا تريد ان يكون وصف التذكير **' )
                        m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                            m2 = m2.first();
                            attentions[message.member]['desc'] = m2.content;
                            m2.delete()
                            m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( ()=>{
                                m.react('1⃣').then( r1 => {
                                    m.react('2⃣').then( r2 => {
                                        m.react('3⃣').then( r2 => {
                                            setTimeout(function ( ){
                                                m.edit(message.member + ', **:writing_hand: حدد موعد التذكير التقريبي**\n **:one: بعد دقائق ** \n **:two: بعد ساعات ** \n **:three: بعد أيام**');
                                                m.awaitReactions((reaction, user) => user.id == message.author.id, {time: 60000, maxEmojis: 1})
                                                    .then(result => {
                                                        var reaction = result.firstKey();
                                                        if( reaction == "1⃣" || reaction == "2⃣" || reaction == "3⃣" ){
                                                            attentions[message.member]['time'] = times_ms[times[reaction]];
                                                            m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then ( ( ) =>{
                                                            m.clearReactions().then( () =>{
                                                                m.edit(message.member + ', **:timer: اذكر عدد '+times_name[times[reaction]]+'**' )
                                                                    m.channel.awaitMessages( m3 => m3.author == message.author && !isNaN(m3.content),{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                                                        m3 = m3.first();
                                                                        attentions[message.member]['time_num'] = m3.content;
                                                                        m3.delete();
                                                                        attentions[message.member]['timer'] = setTimeout(function( ){
                                                                            message.member.send('** '+message.member+' تذكير !! **')
                                                                            var embed = new Discord.RichEmbed( );
                                                                            embed.setTitle( attentions[message.member]['title'] );
                                                                            embed.setDescription( attentions[message.member]['desc'] );
                                                                            embed.setTimestamp();
                                                                            message.member.send({embed});
                                                                            message.member.send('** '+message.member+' تذكير !! **')
                                                                        }, attentions[message.member]['time_num'] * attentions[message.member]['time'] );
                                                                       
                                                                        message.reply('** :white_check_mark: تم أضافة التذكير, سيتم تذكيرك لاحقاً **');
                                                                        m.delete();
                                                                        message.delete();
                                                                    }).catch(function(){ m.delete( ); attentions[message.member] = undefined; } );
                                                                });
                                                            });
                                                        }
                                                    });
                                            },1000);
                                        });
                                    });
                                });
                            }).catch(function() { m.delete();attentions[message.member] = undefined;  });
                        }).catch(function() { m.delete(); attentions[message.member] = undefined;  });
                    });
                   
                }).catch(function( ) {m.delete(); attentions[message.member] = undefined; });
            });
        }
    }
});









client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

 
// برودكاست
 client.on('message', message => {
	    var prefix = "-";
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Speed Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... قد أرسلت رسالتك الى :  __${message.guild.members.size}__ عضو من القبيلة**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
  
  var bc = new
       Discord.RichEmbed()
       .setColor('000000')
       .setTitle(':small_orange_diamond: **__رسالة جديدة من قائد القبيلة__**  :small_orange_diamond:')
       .addField(':file_cabinet:  **__سيرفر__**', message.guild.name)
       .addField(':passport_control:  **__المرسل__**', message.author.username)
       .addField(':incoming_envelope:  **__الرسالة__**', args)
       .setImage('https://img.roro44.net/imgcache/2013/11/9810.gif')
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**البرودكاست تكنسل ☺**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });     


// منع روابط //
client.on('message', message => {
    if(message.content.toLowerCase().startsWith(`discord.gg`)){
        message.member.addRole(message.guild.roles.find('name', 'Muted'));
        var embed = new Discord.RichEmbed()
        .setDescription(`تمت معاقبتك لنشرك سيرفر اخر هنا`)
            message.delete();
        message.channel.send(`<@${message.author.id}`);
        message.channel.send({embed});
    }
});





client.on('message', message => {
    if (message.content.startsWith("<@533994333607690275>"))
    
    message.reply("هـلُِآ وُغلُِآ");
 });

client.on('message', message => {
            if (message.content === 'ارحب') {
              message.channel.sendFile("https://orig00.deviantart.net/f531/f/2013/021/5/a/miku_welcome_sign__free_to_use__by_pinkbunnii-d5s9380.gif");
            }
         });
client.on('message', message => {
            if (message.content === 'حياك') {
            message.channel.sendFile("https://pa1.narvii.com/6872/b7d232511ac768a1f60d5e38aefd58236ee09402r1-736-544_hq.gif");
            }
         });
client.on('message', message => {
            if (message.content === 'اضحك اضحك') {
            message.channel.sendFile("https://www.bancuri.lol/wp-content/themes/bancuri/images/logo.gif");
            }
         });
client.on('message', message => {
            if (message.content === 'باك') {
            message.channel.sendFile("https://media.giphy.com/media/l1J9urAfGd3grKV6E/giphy.gif");
            }
         });



















////////////// العاب البوت //////////////

// لعبة اسئلة فري فاير
const pubg = [
     'free fire | ما هو اقوي سلاح برائيك ؟',
     'free fire | اين تجد سلاح الجروزا ؟ Grozza',
     'free fire | ماذا تفضل اكثر ام فور ام سكار ؟',
     'free fire | ايهما تفضل vss ام Awm',
     'free fire | ماذا تفضل اكثر ؟ سولو ام سكواد ؟',
     'free fire | كم جيم كسبت في العبه ؟',
     'free fire | ما هو اكثر عدد قتلت في مسيرتك بالعبه',
     'free fire | اذا انت المركز ال 2 هل سوف تقوم بتمشي علي رجلك ام ستاخذ سياره تحميك ؟',
     'free fire | اذا وجدت شخصين يتقاتلان , هل سوف تتقاتل معهم ام تنتظر قليلا حتي يقتل احدهما الاخر ؟',
     'free fire | اذا صديقك بالاسكواد يحتاج مساعده هل تساعده ام تتركه ؟',
     'free fire | اذا تم عمل لصديقك كونك اوت وامامك لوت كثير جدا سوف تذهب لتساعده ام تاخذ الوت وتدعه يموت ؟',
     'free fire | ايهما تفضل ؟ الاختباء حتي يتبقي اشخاص قليله ام تذهب لتقتل ولا تختبئ',
     'free fire | اين تفضل ان تهبط من الطائره ؟ الاماكن الهادئيا لوت صغير ام الاماكن المزدحمه بالاعبين لاكن لوت كثير',
     'free fire | كم عدد المرات التي فزت بها لوحدك سولو ؟',
     'free fire | ما هو افضل سلاح تجيد استخدامه ؟',
     'free fire | ما هو اندر سلاح قد تجده برائيك ؟',
     'free fire | ما هو اندر سلاح جديد قد تجده برائيك ؟',
     'free fire | ما هو عدوك في العبه لاق البنق ام لاق الفريمات الاف بي اس ؟',
     'free fire | ايهما تفضل العب ؟ فـ المساء ام الصباح ؟',
     'free fire | هل تحب ان يكون الجيم ملئ بلاعبين ام لاعبين قليلين ؟',
     'free fire | هل الملابس تعبر عن انك محترف ام لا ؟',
     'free fire | كم معك من مال ( كوين ) بلعبه ؟',
     'free fire | ما هو اكثر شئ تكرهه في العبه ؟',
     'free fire | ما هو اكثر شئ تحبه بلعبه ؟',
     'free fire | ماذا تفضل شتو قن ( بندقيه ) ام قناصه ؟',
     'free fire | ماذا تفضل اكثر ؟ درع لفل 3 متضرر ام درع لفل 2 غير متضرر',
     'free fire | تفضل ان تلعب مع صديقك سكواد ام شخص غريب ؟',
     'free fire | هل تظن انك افضل شخص في اصدقائك بهذه اللعبه؟',
     'free fire | قيم نفسك من 10 كـ احتراف لك بالعبه',
     'free fire | هل فزت جيم من قبل بالعبه ؟',
     'free fire | هل وصلت للمركز ال 10 ( توب 10 ) قبل هكذا بلعبه ؟',
     'free fire | هل قمت بلعب مع صديقك من قبل بلعبه ؟',
     'free fire | هل تعلم من اخترع العبه ؟',
     'free fire | لو خيروك لعبه ببجي ام فورت نايت ؟',
     'free fire | هل يوجد شخص من اصدقاءك محترف اكثر منك ام انت اكثر شخص محترف ما بين اصدقاءك ؟',
     'free fire | اذا كنت من فريق مطورين العبه ماذا ستفعل ؟',
     'free fire | قيم من 10 مدي حبك للعبه',
     'free fire | هل تحب ان تتكلم صوت مع اصدقاءك وانت تلعب معاهم ام لا تحب هذا الامر ؟',
 
]
   client.on('message', message => {
       if (message.author.bot) return;
 if (message.content.startsWith('-free fire')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("**اجب على السؤال في لعبة فري فاير**")
  .setColor('#FFA500')
  .setDescription(`${pubg[Math.floor(Math.random() * pubg.length)]}`)
  .setImage("https://i.pinimg.com/originals/a7/cd/00/a7cd009a5c54a8ca43986049d6131d33.png")
                  .setTimestamp()
 
   message.channel.sendEmbed(client);
   message.react("??")
 }
});

// لعبة صراحة
const Sra7a = [
            'صراحه  |  صوتك حلوة؟',
            'صراحه  |  التقيت الناس مع وجوهين؟',
            'صراحه  |  شيء وكنت تحقق اللسان؟',
            'صراحه  |  أنا ��خص ضعيف عندما؟',
            'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
            'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
            'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
            'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
            'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
            'صراحه  |  أشجع شيء حلو في حياتك؟',
            'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
            'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
            'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
            'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
            'صراحه  |  نظرة و يفسد الصداقة؟',
            'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
            'صراحه  |  شخص معك بالحلوه والمُره؟',
            'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص ��م ترى ذلك ضعف؟',
            'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
            'صراحه  |  وش تتمنى الناس تعرف عليك؟',
            'صراحه  |  ابيع المجرة عشان؟',
            'صراحه  |  أحيانا احس ان الناس ، كمل؟',
            'صراحه  |  مع مين ودك تنام اليوم؟',
            'صراحه  |  صدفة العمر الحلوة هي اني؟',
            'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
            'صراحه  |  صفة تحبها في نفسك؟',
            'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
            'صراحه  |  تصلي صلواتك الخمس كلها؟',
            'صراحه  |  ‏تجامل أحد على راحتك؟',
            'صراحه  |  اشجع شيء سويتة بحياتك؟',
            'صراحه  |  وش ناوي تسوي اليوم؟',
            'صراحه  |  وش شعورك لما تشوف المطر؟',
            'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
            'صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  اي الدول تتمنى ان تزورها؟',
            'صراحه  |  متى اخر مره بكيت؟',
            'صراحه  |  تقيم حظك ؟ من عشره؟',
            'صراحه  |  هل تعتقد ان حظك سيئ؟',
            'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
            'صراحه  |  كلمة تود سماعها كل يوم؟',
            'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
            'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
            'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
            'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
            '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
            'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
            '‏صراحه | هل تحب عائلتك ام تكرههم؟',
            '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
            '‏صراحه  |  هل خجلت من نفسك من قبل؟',
            '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
            '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
            '‏صراحه  |  هل تعرضت إلى موقف مُ��رج جعلك تكره صاحبهُ؟',
             '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
            '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
            '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
            'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
            '‏صراحه  |  ما هو عمرك الحقيقي؟',
            '‏صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
       ]
          client.on('message', message => {
			  	var prefix = "-"
        if (message.content.startsWith(prefix + 'صراحة')) {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
         var client= new Discord.RichEmbed()
         .setTitle(":arrow_down: **جاوب على السؤال بصراحة** :arrow_down:")
         .setColor('RANDOM')
         .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
         .setImage("https://images.emojiterra.com/google/android-nougat/128px/1f914.png")
                         .setTimestamp()
       
          message.channel.sendEmbed(client);
          message.react("??")
        }
       });


// لعبة العقاب
var Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**تعطي اي شخص 5 الاف كرديت**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من الس��رفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**����تصل على الوالده  و تقول لها  احب وحده**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.",

];

client.on('message', message => {
 if (message.content.startsWith("-عقاب")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
 .setTitle(":smiling_imp: **اذا انت قد العقاب لا تنسحب او تتعاقب** :smiling_imp:")
.addField('**:game_die: اخترنا لك العقاب**' ,`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[39ab] Send By: ' + message.author.username)
  }
});


// نكت
client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('G.ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });
                    client.on('message', message => {
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","https://i.fatafeat.com/storage/attachments/15/image3_698123_large.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'نكت')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


// اختار رقم
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'اختار رقم')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('حط رقم معين يتم السحب منه');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});









// انشاء رومات صوتية وكتابية
client.on("message",async msg => {
  let Alpha = '-';
  if(msg.content.startsWith(Alpha + "انشاء")){
    if(!msg.guild.members.get(msg.author.id).hasPermission('ADMINISTRATOR')) return msg.reply("**You Don't Have Administrator Permission**").then(a => {
      a.delete(2222)
    })
    if(!msg.guild.members.get(client.user.id).hasPermission('ADMINISTRATOR')) return msg.reply("**I'm Don't Have Administrator Permission**").then(b => {
      b.delete(2222)
    })
    let fltr = m => m.author.id === msg.author.id
    let name = '';
    await msg.reply("**اكتب اسم الروم الان**").then(e => {
      msg.channel.awaitMessages(fltr, {
        time: 60000,
        max:1
      })
      .then(co => {
      name = co.first().content
      co.first().delete();
      let type = '';
      e.edit(`${msg.author},**اكتب نوع الروم الان | Text Or Voice**`).then(e => {
      msg.channel.awaitMessages(fltr, {
        time: 600000,
        max: 1
      })
      .then(co => {
        type = co.first().content 
        co.first().delete();
        e.edit(`${msg.author},**هل انت متاْكد؟**| ✔ | | ❌ |`).then(od => {
          od.react("✔")
          .then(()=> od.react("✔"))
          .then(()=> od.react("❌"))
          let reaction1Filter = (reaction, user) => reaction.emoji.name === '✔' && user.id === msg.author.id;
          let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
          let reaction1 = od.createReactionCollector(reaction1Filter, { time: 12000 });
          let reaction2 = od.createReactionCollector(reaction2Filter, { time: 12000 });
          reaction1.on("collect", r => {
            msg.reply("**تم صنع الروم بنجاح ✔**").then(op => {
              op.delete(2222)
              od.delete(2222)
              msg.guild.createChannel(name,type);
            })
          })    
          reaction2.on("collect", r => {
            msg.reply("**تم الغاء صنع الروم بنجاح ✔**").then(de => {
              de.delete(2222)
              od.delete(2222)
            })
          }) 
        })
      })
      })
      })
    })
  }
})








client.login("NTMzOTk0MzMzNjA3NjkwMjc1.DxzKSA.KcYXHhxwTm6ngRQtGbE-vLXn8O8");
















