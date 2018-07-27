const embed = require('discord.js'); 
const Discord = require('discord.js'); 
const client = new Discord.Client(); 
var prefix = 'gf!' 

client.on("ready", () => {client.user.setGame('gf!yardım | YANISYOSUN FUAT ABİ! | Sunucu Sayısı: ' + client.guilds.size , 'https://twitch.tv/GardropFuat') 
}); 
client.on('ready', () => { 
   console.log(`Bot${client.user.tag} adı ile giriş yaptı!`); 
 }); 
 client.on('message', msg => {
   if (msg.content.startsWith(prefix + "konuştur")) {
    if (msg.channel.type !== "dm"){
    let söz = msg.content.substring(2 + 9);
	msg.delete (msg.content == 'konuştur')
	   let embed = new Discord.RichEmbed()
    .setColor(3447003)
	.setDescription(söz + '\n"Adamsan beni konuşturacağına kendin konuş, hadi bakıyım!"')
return msg.channel.send({embed})}
   }

});
client.on('message', msg => { 
if (msg.content === prefix + 'yardım') { 
let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
.addField("KOMUTLAR", 
"Tüm komutlar burada ->") 
.addField("Ana Komutlar", 
" gf!bilgi = Botun bilgilerini gösterir. \n gf!istatistik = Botun istatistiklerini gösterir. \n gf!davet = Botun ekleme linkini gösterir. \n gf!sunucular = Haraca bağlanan sunucular. \n gf!tavsiye = Tavsiyenizi iletir. ") 
.addField("Mod Komutları",  
"\n gf!temizçek = Kanalı tamamen temizler. \n gf!temizle <sayı> = Belirtilen sayı kadar mesaj siler.") 
.addField("Eğlence Komutları", 
"\n gf!bekçi = Gene kaçtı inek! \n gf!karikatür = Rasgele karikatür gösterir. \n gf!halayçek = Halay çeker. \n gf!güncelleme = En son güncellemeleri gösterir.\n gf!sunucubilgi = Sunucu bilgilerini gösterir. \n gf!yazıtura = Yazı tura atar şansına ne gelirse.\n gf!havalıyürü = Havalı yürür. \n gf!havalıyumruk = Havalı bir şekilde yumruk atar.\n gf!selamla = Politakacı gibi selamlar. \n gf!tokatla = Birini tokatlar. \n gf!topuğunasık = Birinin topuğuna sıkar. \n gf!avatar = Profil fotoğrafını gösterir. \n gf!yanıyorsunfuatabi = Dene de gör! \n hıyar = Şimdi yedim ulan seni!") 
.setFooter("Bot yapımcısı: Emir | AgentSLayer#5218'dir.") 
msg.member.send({embed: embed}) 
}
});
client.on('message', msg => { 
if(msg.content === prefix + 'yardım') { 
let embed = new Discord.RichEmbed()  
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))  
.addField("Özel mesaj olarak gönderdim", 
"Özel mesajlarını kontrol et! :postbox:") 
msg.channel.send({embed: embed})  
} 
});

client.on('message', msg => {
if (msg.content === prefix + "avatar") { 
let embed = new Discord.RichEmbed() 
.setAuthor(msg.author.username, msg.author.avatarURL)
.setColor(3447003) 
.setImage(msg.author.avatarURL) 
return msg.channel.send({embed})} 
});
 


 client.on('message', msg => {
if (msg.content === prefix + 'ekip') { 
let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
.addField("MAFYA EKİBİM", 
"https://fliegeryapim.weebly.com/") 
msg.channel.send({embed: embed}) 
} 
});


 client.on('message', msg => {
if(msg.content === prefix + 'sunucular'){ 
msg.channel.send(client.guilds.map(g => g.name)) 
} 
});


 client.on('message', msg => {
if(msg.content === prefix + 'bilgi'){ 
if(msg.author.id != 414353271474487298){ 
let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
.addField('**Sunucu Sayım:**', 
'\n'+ client.guilds.size);  
msg.channel.send({embed: embed})	 
}} 
});



 client.on('message', msg => {
if (msg.content === prefix + 'havalıyürü') { 
var cevaplar = ['http://3.bp.blogspot.com/-MYS6Lif816s/VdCqGSEUXqI/AAAAAAAAEsM/S1Ci5YHLEmc/s1600/KEMAL_SUNAL_KABADAYI.Gif','http://3.bp.blogspot.com/-MYS6Lif816s/VdCqGSEUXqI/AAAAAAAAEsM/S1Ci5YHLEmc/s1600/KEMAL_SUNAL_KABADAYI.Gif' ]; 
var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM")) 
} 
});


 client.on('message', msg => {
if (msg.content === prefix + 'havalıyumruk') { 
var cevaplar = ['http://1.bp.blogspot.com/-WBjck4B7dAY/VdCr6HctTlI/AAAAAAAAEuk/9RU1S4L_Ah0/s1600/KEMAL_SUNAL_YUMRUGA_CARPAN_ADAM.gif','http://1.bp.blogspot.com/-WBjck4B7dAY/VdCr6HctTlI/AAAAAAAAEuk/9RU1S4L_Ah0/s1600/KEMAL_SUNAL_YUMRUGA_CARPAN_ADAM.gif' ]; 
var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM")) 
} 
});


 client.on('message', msg => {
if (msg.content === prefix + 'selamla') { 
var cevaplar = ['http://1.bp.blogspot.com/-vSMTAD2stxw/VdCrgr7N5XI/AAAAAAAAEt8/-tP1VMqC1UA/s1600/KEMAL_SUNAL_POLITIKACI.Gif','http://1.bp.blogspot.com/-vSMTAD2stxw/VdCrgr7N5XI/AAAAAAAAEt8/-tP1VMqC1UA/s1600/KEMAL_SUNAL_POLITIKACI.Gif' ]; 
var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM")) 
} 
});


 client.on('message', msg => {
if (msg.content === prefix + 'tokatla') { 
var cevaplar = ['http://4.bp.blogspot.com/-Cdrk6ce21MM/VdCr1HRNkWI/AAAAAAAAEuc/txEqvYl-A_8/s1600/KEMAL_SUNAL_PATRONUN_KARISINA_TOKAT.gif','http://4.bp.blogspot.com/-Cdrk6ce21MM/VdCr1HRNkWI/AAAAAAAAEuc/txEqvYl-A_8/s1600/KEMAL_SUNAL_PATRONUN_KARISINA_TOKAT.gif' ]; 
var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM")) 
} 
});


 client.on('message', msg => {
if (msg.content === prefix + 'topuğunasık') { 
var cevaplar = ['https://i.hizliresim.com/6Jy1k3.jpg','https://i.hizliresim.com/8YNr1r.jpg' ]; 
var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM")) 
}
});

client.on('message', msg => {
if (msg.content === prefix + 'davet') { 

	let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
.addField("Beni Eklemek İçin Tıkla",  
"https://bit.ly/2tQCiLz") 
.addField("Sunucuma Gelmek İçin Tıkla",  
"https://discord.gg/89j8fNX")   
msg.channel.send({embed: embed}) 

} 
});

client.on('message', msg => {
if (msg.content.toLowerCase() === prefix + `yazıtura`) { 
var sans = ["YAZI", "TURA"]; 
var sonuc = sans[Math.floor((Math.random() * sans.length))]; 
msg.channel.send(`**Sonuç: ${sonuc}**`); 
} 
});

client.on('message', msg => {
if (msg.content === 'hıyar') { 
let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
.addField("Hıyar ha? Bana ha!",
"Şimdi yedim ulan seni!")
msg.channel.send({embed: embed})
}
});
client.on('message', msg => {
if (msg.content.toLowerCase() === 'fuat') { 
let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
.addField("Ne var ulan inek!",
"Şimdi yedim ulan seni!")
msg.channel.send({embed: embed})
}
});
client.on('message', msg => {
if (msg.content ===  prefix + 'yanıyorsunfuatabi') { 
let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
.addField("Ne bakıyorsunuz ulan?",
"Yanıyorsun Fuat abi! \nHemde Çırağan Sarayı gibi!")
.addField("Yanıyorum ama beni yakanı da yakıcam!\n Sizi de yakıcam!\n Mahalleyi de yakıcam!\n Hepinizi yakıcam ulan inekler!",
"Bu inek bu dumanla anca köşeyi döner. Ha ha ha ha ha ha... Bizi yakıcaktın ama kendini yaktın yürrü şimdi Marmara'ya hahahah")
msg.channel.send({embed: embed})
var cevaplar = ['https://www.ahmetcetintas.com/resimler/2016/01/Yeşilçam-Gardolap-Yanıyorsun-Fuat-Abi.jpg','https://www.ahmetcetintas.com/resimler/2016/01/Yeşilçam-Gardolap-Yanıyorsun-Fuat-Abi.jpg' ]; 
var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM")) 
}
});

client.on('message', msg => {
if(msg.content.startsWith(prefix + 'tavsiye')){ 
if(msg.author.id != 413346140768043018){ 
client.users.get('368450660036771850').send(msg.author.username + ' adlı kişinin tavsiyesi: ' + msg.content); 
let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
.addField('**Bot Sahibine şunu tavsiye ettiniz: **' + msg.content + '\n**Tavsiyeniz BOT SAHİBİNE iletildi.**', 
'***En yakın zamanda dönüş alacaksınız.***'); 
client.channels.get("401633988726226956").send(msg.author.username + '** şunu tavsiye etti: **' + msg.content );   
msg.channel.send({embed: embed}) 
}} 
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'sunucubilgi') {
    if  (msg.channel.type === 'dm') {
      const ozelmesajuyarii = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL);
    msg.author.sendEmbed(ozelmesajuyarii); }
    if (msg.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.guild.name, msg.guild.iconURL)
    .addField('Ad:', msg.guild.name)
    .addField('ID', msg.guild.id)
    .addField('Ana kanal:', msg.guild.defaultChannel)
    .addField('Bölge', msg.guild.region)
    .addField('Üye sayısı:', msg.guild.memberCount)
    .addField('Sahibi:', msg.guild.owner)
    .addField('Kanal sayısı:', msg.guild.channels.size)
    .addField('Oluşturulma tarihi:', msg.guild.createdAt);
    return  msg.channel.sendEmbed(sunucubilgi);
    }
  }
});







client.on('message', msg => {



if (msg.content ===  prefix + 'halayçek') { 



let embed = new Discord.RichEmbed() 

.setDescription("Haydeee")

msg.channel.send({embed: embed})

var cevaplar = ['https://goo.gl/3y9zPE','https://goo.gl/3y9zPE' ]; 

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 



msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM")) 



}



});
client.on('message', msg => {



if (msg.content === prefix + 'güncelleme') { 



let embed = new Discord.RichEmbed() 



.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 



.addField("Güncellemeler",  



"gf!halayçek ve yeni komutlar eklendi") 

  



msg.channel.send({embed: embed}) 



} 



});
client.on('message', msg => {



if (msg.content ===  prefix + 'karikatür') { 



let embed = new Discord.RichEmbed() 

.setDescription(":D")

msg.channel.send({embed: embed})

var cevaplar = ['https://goo.gl/y5BHzg','https://goo.gl/LfQ1mZ','https://goo.gl/6ULFVu','https://goo.gl/cD2UTY' ]; 

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 



msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM")) 



}



});
client.on('message', msg => {



if (msg.content ===  prefix + 'bekçi') { 



let embed = new Discord.RichEmbed() 

.setDescription("İyi kaçtın Şakir!")

msg.channel.send({embed: embed})

var cevaplar = ['https://goo.gl/6oX7us','https://goo.gl/6oX7us' ]; 

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 



msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM")) 



}



});

//msg.channel.delete() kanalı siliyor
client.login(process.env.BOT_TOKEN);
