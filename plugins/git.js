const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/owr7tXU.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*aslusir created this bot*

🤖 *Creator number*
wa.me/917736835721?text=Hi%20tedzo%20%20*
🤖 
🤖 *Git hub*  
*https://github.com/Tedzo-1/tedzo-v6.*
🤖
🤖 *WHATSAPP GROUP*
https://chat.whatsapp.com/JqUKjz9djTS9mDmxA2ph2t
🤖
🤖 *Instagram*    
https://www.instagram.com/a_s_l_a_m_._x*
🤖
🤖 *WEBSITE*      
Available soon....

`}) 

}));

