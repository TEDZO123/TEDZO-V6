/*asluser999@gmail.com*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
var r_text = new Array ();
var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

    r_text[0] = "https://i.ibb.co/FwPP04q/images.jpg";
    r_text[1] = "https://i.ibb.co/GH2tWJ4/images-1.jpg";
    r_text[2] = "https://i.ibb.co/Mf79pVH/download.jpg";
    r_text[3] = "https://i.ibb.co/b11BDWH/images-2.jpg";
    r_text[4] = "https://i.ibb.co/7v1m94x/images-3.jpg";
    r_text[5] = "https://i.ibb.co/vdKJxNX/images-4.jpg";
    r_text[6] = "https://i.ibb.co/cvKvyzR/images-5.jpg";
    r_text[7] = "https://i.ibb.co/WWRt8vZ/images-6.jpg";
    r_text[8] = "https://i.ibb.co/m8Xg7Gj/images-7.jpg";
    r_text[9] = "https://i.ibb.co/FDYQHzB/images-8.jpg";
    r_text[10] = "https://i.ibb.co/fFTNXcy/images-9.jpg";
    r_text[11] = "https://i.ibb.co/rygwb0Q/images-10.jpg";
    r_text[12] = "https://i.ibb.co/ts8y9rC/images-11.jpg";
    r_text[13] = "https://i.ibb.co/VMHd02c/images-12.jpg";
    r_text[14] = "https://i.ibb.co/D1j3Np6/images-13.jpg";
    r_text[15] = "https://i.ibb.co/qWnhqVf/images-14.jpg";
    r_text[16] = "https://i.ibb.co/J7tr09N/images-15.jpg";
    r_text[17] = "https://i.ibb.co/NVhyQ1V/images-16.jpg";
    r_text[18] = "https://i.ibb.co/PcV78Mv/images-17.jpg";
    r_text[19] = "https://i.ibb.co/hYFY5PZ/images-18.jpg";
    r_text[20] = "https://i.ibb.co/n0vd5yR/images-19.jpg";
    r_text[21] = "https://i.ibb.co/hybc9KX/images-20.jpg";
    r_text[22] = "https://i.ibb.co/6JW0sL7/images-21.jpg";
    r_text[23] = "https://i.ibb.co/8MX592D/images-22.jpg";
    r_text[24] = "https://i.ibb.co/gPtrHPW/images-23.jpg";
    r_text[25] = "https://i.ibb.co/mGtWXyW/images-24.jpg";
    r_text[26] = "https://i.ibb.co/HD4rrbn/images-25.jpg";
    r_text[27] = "https://i.ibb.co/8mG4Xht/images-26.jpg";
    r_text[28] = "https://i.ibb.co/yF8qzgQ/images-27.jpg";
    r_text[29] = "https://i.ibb.co/vvhTtL9/images-28.jpg";
    r_text[30] = "https://i.ibb.co/x8WZS1G/images-29.jpg";
    r_text[31] = "https://i.ibb.co/hsb9c1N/images-30.jpg";
    r_text[32] = "https://i.ibb.co/tQ2r1d1/images-31.jpg";
    r_text[33] = "https://i.ibb.co/5Mr70MY/images-32.jpg";
    r_text[34] = "https://i.ibb.co/340nk6r/images-33.jpg";
    r_text[35] = "https://i.ibb.co/3yWYZ9X/images-34.jpg";
    r_text[36] = "https://i.ibb.co/59G5Gpc/images-35.jpg";
    r_text[37] = "https://i.ibb.co/j48QYXt/images-36.jpg";
    r_text[38] = "https://i.ibb.co/Nx2FHGB/images-37.jpg";
    r_text[39] = "https://i.ibb.co/7tc4Hph/images-38.jpg";
    r_text[40] = "https://i.ibb.co/jkKc78B/images-39.jpg";
    r_text[41] = "https://i.ibb.co/RTqRWn7/images-40.jpg";
    r_text[42] = "https://i.ibb.co/kS6LW3q/images.jpg";
    r_text[43] = "https://i.ibb.co/THdY0MS/images-1.jpg";
    r_text[44] = "https://i.ibb.co/n0P7KVt/images-2.jpg";
    r_text[45] = "https://i.ibb.co/MnZn5Tx/images-3.jpg";
    r_text[46] = "https://i.ibb.co/SVwMXrG/images-4.jpg";
    r_text[47] = "https://i.ibb.co/2jZb1mc/images-5.jpg";
    r_text[48] = "https://i.ibb.co/sPhWTxD/images-7.jpg";
    r_text[49] = "https://i.ibb.co/pjcFyzr/images-6.jpg";
    r_text[50] = "https://i.ibb.co/XFSmcfj/images-9.jpg";
    r_text[51] = "https://i.ibb.co/TM8Qxt9/images-8.jpg";
    r_text[52] = "https://i.ibb.co/f9RQ30f/images-10.jpg";
    r_text[53] = "https://i.ibb.co/9ZRBQHP/images-11.jpg";
    r_text[54] = "https://i.ibb.co/Sm9PmLT/images-12.jpg";
    r_text[55] = "https://i.ibb.co/B2BzjdR/images-13.jpg";
    r_text[56] = "https://i.ibb.co/HB8kDqr/images-14.jpg";
    r_text[57] = "https://i.ibb.co/r6HXkC6/images-15.jpg";
    r_text[58] = "https://i.ibb.co/6BMF531/images-16.jpg";
    r_text[59] = "https://i.ibb.co/47b8YYW/images-17.jpg";
    r_text[60] = "https://i.ibb.co/bzZ66dN/images-18.jpg";
    r_text[61] = "https://i.ibb.co/kmKGSJ1/images-19.jpg";
    r_text[62] = "https://i.ibb.co/nDfrfgd/images-20.jpg";
    r_text[63] = "https://i.ibb.co/bXf8Tj1/images-21.jpg";
    r_text[64] = "https://i.ibb.co/4pQxm7k/images-22.jpg";
    r_text[65] = "https://i.ibb.co/ngLqQdh/images-23.jpg";
    r_text[66] = "https://i.ibb.co/Y3RtBPB/images-24.jpg";
    r_text[67] = "https://i.ibb.co/0y2vDZ8/images-25.jpg";
    r_text[68] = "https://i.ibb.co/0Gzdx1d/images-26.jpg";
    r_text[69] = "https://i.ibb.co/54wVtm8/images-27.jpg";
    r_text[70] = "https://i.ibb.co/bQkJTZm/images-28.jpg";
    r_text[71] = "https://i.ibb.co/hCNMWqG/images-29.jpg";
    r_text[72] = "https://i.ibb.co/qDphPx9/images-30.jpg";
    r_text[73] = "https://i.ibb.co/M8jRW8N/IMG-20210410-WA0308.png";
    r_text[74] = "https://i.ibb.co/k1nmStf/IMG-20210410-WA0309.jpg";
    r_text[75] = "https://i.ibb.co/Ks5pgsB/IMG-20210410-WA0310.jpg";
    r_text[76] = "https://i.ibb.co/0YNzZxQ/IMG-20210410-WA0317.jpg";
    r_text[77] = "https://i.ibb.co/T0KbLFN/IMG-20210410-WA0318.jpg";
    r_text[78] = "https://i.ibb.co/wgQWTKy/IMG-20210410-WA0319.jpg";
    r_text[79] = "https://i.ibb.co/DbMk8nL/957395cbf134.jpg";
    r_text[80] = "https://i.ibb.co/LQ4WJMR/f13a01cc7301.jpg";

    var i = Math.floor(80*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

if (config.FULLEVA == 'true') eva = 'On'
if (config.FULLEVA == 'false') eva = 'Off'
if (config.AUTOBİO == 'true') auto_bio = 'On'
if (config.AUTOBİO == 'false')auto_bio = 'Off'

Neotro.addCommand({pattern: 'menu', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: '彡sᴇᴛᴠᴀʀ彡', description: "➽⚙Bot of understanding and basic help.\n\n\n*◁ === 🍃🎯 basic help === ▷*\n\n🎭 *.alive *\n 🔮 Bot testing will occur on operation.\n\n🎭 *.tedzo*\n🔮 shows complete command list.\n\n🎭 *.owner*\n🔮 BOT owners show details\n\n🎭 *.setvar BOT_NAME: your text*\n🔮 obe boṭge name change is shown in the command and your Logo captions.\n\n🎭 *.setvar WORK_TYPE: public*\n🔮 Bot public to.\n\n🎭 *.setvar WORK_TYPE: private*\n🔮 Bot private to.\n\n🎭 *.restart*\n🔮 Bot revived again when tight\n\n🎭 *.shutdown*\n\n🔮 Bot was closed ⚙️ should be back on in Resources at Heroku on\n\n🎭 *.setvar SUDO: 94XXXXXXXX*\n🔮 Bot to another ruler Based on public / private, he can control both occasions.\n\n🎭 *.dyno*\n What is the amount of hours to your 🔮 Heroku. 550 hours per month from the previous month, while it ended the moment your bot will wait a month off vē.īlaga is to create a new classifieds or heroin.\n\n🎭 *.pinky on*\n\n🔮 AI EVA Chat BOT This can by implemented.\n🎭 *.pinky off* \ n🔮 AI EVA Chat BOT is deactivated.\n\n🎭 *.botname*\n🔮 To change bot name\n\n🎭 *.owncmnd*\n🔮 Owner Menu is making in the.\n⚙️ ahead to enter the relevant details eleven hash. For details\n🧚 *setvar ALIVE_MESSAGE: The MSG is*\n🔮 Bot Alive Message appended to change if we want to.\n\n🎭 *setvar ALIVE_LOGO: link*\n🔮 Bot appended alive picture change is Xolela Photo Link to your Site Upload button in the lower one\n🎲 https: imgbb.com\n🔮 telegram use the Bot easy to leave a link that can get Img\n🎲 https: t.me/FnTelegraphBot\n🎭 *setvar WELCOME_GIF: link*\n🔮 This site down there you Upload a GIF rials to change one's GIF Welcome msg to put a link\n🎲 https: www.mailboxdrive.com\n🎭 *setvar BYE_GIF: link*\n🔮 tied Good bye Logo change, as puluvanuḍa Simple put\n\n ", rowId:" rowid1"},
        {title: '彡ɢɪᴛ彡', description: "➽GIT HUB.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*GIT_COMING_SOON*\n\n ", rowId:" rowid2"},
        {title: '彡ᴀʟɪᴠᴇ彡', description: "➽𝚒𝚟𝚍𝚎 𝚘𝚔𝚔𝚝𝚑𝚊𝚗𝚗𝚎 𝚞𝚗𝚍 𝚋𝚛𝚘\n\n\n*TYPE* *.ALIVE* ", rowId:" rowid3"},
        {title: '彡xᴍᴇᴅɪᴀ彡', description: "➽XMEDIA COMMANDS ARE.​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n\n\n💻Usage: *.mp4enhance*\nℹ️Desc:Enhance video’s quality.\n\n💻Usage: *.interp*\nℹ️Desc:Increases the FPS of the video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc:Applies true-slowmo to non-slow motion videos.\n\n💻Usage: *.x4mp4*\nℹ️Desc:Reduce video’s quality by 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: Reduce video’s quality by 50%.\n\n💻Usage: *.gif*\nℹ️Desc:Converts video to gif.\n\n💻Usage: *.agif*\nℹ️Desc:Converts video to voiced gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: Blurs the background of the video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: Decreases the vibration of the video.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: Applies a rainbow effect to video.\n\n💻Usage: *.mp4color*\nℹ️Desc:Makes the colors of the video more vivid and beautiful.\n\n💻Usage: *.mp4art*\nℹ️Desc:Applies a art effect to the video.\n\n💻Usage: *.mp4negative*\nℹ️Desc:Applies a negative color filter to the video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc:Applies a nostalgic effect to video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: Applies a monochrome effect to video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: Plays the video in reverse.\n\n💻Usage: *.mp4edge*\nℹ️Desc:Applies a edge effect to the video.\n\n💻Usage: *.mp4image*\nℹ️Desc: Converts photo to 5 sec video.\n\n💻Usage: *.spectrum*\nℹ️Desc: Converts the spectrum of sound into video.\n\n💻Usage: *.waves*\nℹ️Desc: Converts the wave range of sound to video.\n\n💻Usage: *.frequency*\nℹ️Desc: Converts the frequency range of sound to video.\n\n💻Usage: *.avec*\nℹ️Desc: Converts the histogram of sound to video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: Converts the decibel value of the sound into video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: Converts the CQT value of audio to video.\n\n💻Usage: *.mp3eq*\nℹ️Desc: Adjusts the sound to a crystal clear level.\n\n💻Usage: *.mp3crusher*\nℹ️Desc:Distorts the sound, makes ridiculous.\n\n💻Usage: *.mp3reverse*\nℹ️Desc:Plays the sound in reverse.\n\n💻Usage: *.mp3pitch*\nℹ️Desc:Makes the sound thinner and faster.\n\n💻Usage *.mp3low*\nℹ️Desc:Makes the sound deep and slower.\n\n💻Usage: *.x2mp3*\nℹ️Desc:  Makes the sound twice as fast.\n\n💻Usage: *.mp3volume*\nℹ️Desc: 🇹🇷 Ses seviyesini fazalca arttırır.\n🇬🇧 Increase sound level so much.\n\n💻Usage: *.bwimage*\nℹ️Desc: 🇹🇷 Fotoğrafa monochrome efekti uygular.\n🇬🇧 Applies a monochrome effect to image.\n\n💻Usage: *.vintageimage*\nℹ️Desc: 🇹🇷 Fotoğrafa vintage efekti uygular.\n🇬🇧 Applies a vinatge effect to video.\n\n💻Usage: *.edgeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n🇬🇧 Applies a edge effect to the photo.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n🇬🇧 Makes the photo clearer.\n\n💻Usage: *.blurimage*\nℹ️Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n🇬🇧 Blurs the background of the photo.\n\n💻Usage: *.grenimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n🇬🇧 Applies grain effect to the photo.\n\n💻Usage: *.negativeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa negatif renk filtresi uygular.\n🇬🇧 Applies a negative color filter to the photo.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gökkuşağı efekti uygular.\n🇬🇧 Applies rainbow effect to the photo.\n\n💻Usage: *.colorimage*\nℹ️Desc: 🇹🇷 Fotoğrafın renklerini daha canlı ve çekici yapar.\n🇬🇧 It makes the colors of the photo more vivid and attractive.\n\n💻Usage: *.artimage*\nℹ️Desc: 🇹🇷 Fotoğrafa çizim efekti uygular.\n🇬🇧 Applies a art effect to the photo\n\n ", rowId:" rowid4"},
        {title: '彡ᴏᴡɴᴇʀ彡', description: "➽BOT OWNER.\n\n\nhttp://wa.me/+917736835721\n\n ", rowId:" rowid5"},
        {title: '彡ғʀᴇᴇғɪʀᴇ彡', description: "➽Free fire logo.\n\n\n*_50 FF LOGO PACK_*\n\n*😈.ff01 : Makes FF logo*\n*send free fire logo*\n*😈.ff02 : Makes FF logo*\n*send free fire logo*\n*😈.ff03 : Makes FF logo*\n*send free fire logo*\n*😈.ff04 : Makes FF logo*\n*send free fire logo*\n*😈.ff5 : Makes FF logo*\n*send free fire logo*\n*😈.ff6 : Makes FF logo*\n*send free fire logo*\n*😈.ff07 : Makes FF logo*\n*send free fire logo*\n*😈.ff08 : Makes FF logo*\n*send free fire logo*\n*😈.ff09 : Makes FF logo*\n*send free fire logo*\n*😈.ff10 : Makes FF logo*\n*send free fire logo*\n*😈.ff12 : Makes FF logo*\n*send free fire logo*\n*😈.ff13 : Makes FF logo*\n*send free fire logo*\n*😈.ff14 : Makes FF logo*\n*send free fire logo*\n*😈.ff15 : Makes FF logo*\n*send free fire logo*\n*😈.ff16 : Makes FF logo*\n*send free fire logo*\n*😈.ff17 : Makes FF logo*\n*send free fire logo*\n*😈.ff18 : Makes FF logo*\n*send free fire logo*\n*😈.ff19 : Makes FF logo*\n*send free fire logo*\n*😈.ff20 : Makes FF logo*\n*send free fire logo*\n*😈.ff21 : Makes FF logo*\n*send free fire logo*\n*😈.ff22 : Makes FF logo*\n*send free fire logo*\n*😈.ff23 : Makes FF logo*\n*send free fire logo*\n*😈.ff24 : Makes FF logo*\n*send free fire logo*\n*😈.ff25 : Makes FF logo*\n*send free fire logo*\n*😈.ff26 : Makes FF logo*\n*send free fire logo*\n*😈.ff27 : Makes FF logo*\n*send free fire logo*\n*😈.ff28 : Makes FF logo*\n*send free fire logo*\n*😈.ff29 : Makes FF logo*\n*send free fire logo*\n*😈.ff30 : Makes FF logo*\n*send free fire logo*\n*😈.ff31 : Makes FF logo*\n*send free fire logo*\n*😈.ff32 : Makes FF logo*\n*send free fire logo*\n*😈.ff33 : Makes FF logo*\n*send free fire logo*\n*😈.ff34 : Makes FF logo*\n*send free fire logo*\n*😈.ff35 : Makes FF logo*\n*send free fire logo*\n*😈.ff36 : Makes FF logo*\n*send free fire logo*\n*😈.ff37 : Makes FF logo*\n*send free fire logo*\n*😈.ff38 : Makes FF logo*\n*send free fire logo*\n*😈.ff39 : Makes FF logo*\n*send free fire logo*\n*😈.ff40 : Makes FF logo*\n*send free fire logo*\n*😈.ff41 : Makes FF logo*\n*send free fire logo*\n*😈.ff42 : Makes FF logo*\n*send free fire logo*\n*😈.ff43 : Makes FF logo*\n*send free fire logo*\n*😈.ff44 : Makes FF logo*\n*send free fire logo*\n*😈.ff45 : Makes FF logo*\n*send free fire logo*\n*😈.ff46 : Makes FF logo*\n*send free fire logo*\n*😈.ff47 : Makes FF logo*\n*send free fire logo*\n*😈.ff48 : Makes FF logo*\n*send free fire logo*\n*😈.ff49 : Makes FF logo*\n*send free fire logo*\n*😈.ff50 : Makes FF logo*\n*send free fire logo* ", rowId:" rowid6"},
        {title: '彡ʜᴇʟᴘᴍᴇɴᴜ彡', description: "➽list of all commands.\n\n\n☢︎︎.menu\n\n㋛︎ *Button message you can select option*\n\n☢︎︎ .xmedia \n㋛︎  *It is a plugin with more than 25 media tools.*\n\n☢︎︎ .ownercmnd \n㋛︎  *set of commands for bot user or sudo*\n\n☢︎︎ .codtts \n㋛︎ *language code to change the voice in .tts & also for .trt translation*\n\n☢︎︎ .adan \n㋛︎  *Finds prayer time.*\n*⌨️ Eg:- : .prayer <city>*\n\n☢︎︎ .rename \n㋛︎ *[objectObject]*\n\n ☢︎︎ .print \n㋛︎  *Prints the inside of the file on the server.*\n\n☢︎︎ .bashmedia \n㋛︎  *Sends audio, video and photos inside theserver.*\n*⌨️Eg:- : video.mp4 && media/gif/pic.mp4*.\n\n☢︎︎ .addserver \n㋛︎  ```Uploads image, audio or video to the server.``` \n\n☢︎︎ .term1 \n㋛︎ ```Allows to run the command on the server's shell.```\n\n ☢︎︎ .findvid \n㋛︎  ```Shows the technical information of the replied video.```\n\n☢︎︎ .pm \n㋛︎  ```Sends a private message to the replied person.```\n\n☢︎︎ .pmsend \n㋛︎ ```Sends a private voice message to the respondent.```\n\n☢︎︎ .anime \n㋛︎```randomanimeimage```\n\☢︎︎ .apkmod\n\n☢︎︎ .fatp\n\n☢︎︎ .ttp \n㋛︎ ```Converts text to plain painting.``` \n\n☢︎︎ .attp\n㋛︎ ```Adds rainbow effect to the text as a sticker.``` \n\n☢︎︎ .bgm\n ㋛︎  ```turn on and turn off bgm.\n* -bot owner command``` \n*⌨️ Eg:- : ```.bgm on / off```*\n\n☢︎︎ .carbon\n㋛︎ ```It sends carbon picture```\n\n ☢︎︎ .bgm ㋛︎ ```change reply message BGM mode```\n* *⌨️ Eg:- :* ```.bgm one / two```*\n\n☢︎︎ .mp3\n㋛︎ ```Converts video to sound.```\n\n ☢︎︎ .photo\n㋛︎ ```Converts the sticker to a photo.```\n\n ☢︎︎ .mp4\n㋛︎  ```Converts animated stickers to video.```\n\n ☢︎︎ .dict \n㋛︎ ```Use it as a dictionary.\n*Eg: .dict en_US;lead For supporting languages send *.lngcode*``` \n\n☢︎︎ .git\n㋛︎  ```It sends high resolution wallpapers.```\n\n welcomen☢︎︎ .welcome\n㋛︎ ```It sets the welcome message. If you leave it blank it shows the welcome message.```\n\n☢︎︎ .goodbye\n㋛︎ ```Sets the goodbye message. If you leave blank, it show's the goodbye message.```\n\n ☢︎︎ .antilink \n㋛︎  ```Activates the Antilink tool.``` \n*⌨️ Eg:- : ```.antilink on / off```*\n\n☢︎︎ .moretxt\n㋛︎ ```more txtit commands``` \n\n☢︎︎ .ffire \n㋛︎  ```add your text to random freefire logo```\n\n ☢︎︎ .emo \n㋛︎ ```emoji to png```\n\n ☢︎︎ .insta \n㋛︎  ```Downloads Image/Video From Instagram```\n\n☢︎︎ .news\n\n ☢︎︎ .notes\n㋛︎ ```Shows all your existing notes.```\n\n ☢︎︎ .save \n㋛︎  ```Reply a message and type .save or just use .save <Your note> without replying```\n\n ☢︎︎ .deleteNotes\n㋛︎  ```Deletes *all* your saved notes.```\n\n ☢︎︎ .owner\n㋛︎  ```shows the detail of bot owner``` \n\n☢︎︎ .jid \n㋛︎ ```Giving user's JID.``` \n\n☢︎︎ .random \n㋛︎ ```word image```\n\n ☢︎︎ .brdmore \n㋛︎  ```add readmore before your text```\n\n ☢︎︎ .rdmore \n㋛︎  ```add readmore before your text```\n\n ☢︎︎ .removebg \n㋛︎```Removes the background of the photos.```\n\n ☢︎︎ .warn \n㋛︎ ```Sends reports to group admins.``` \n\n☢︎︎ .scan \n㋛︎  ```Checks whether the entered number is registered on WhatApp.``` \n\n☢︎︎ .trt \n㋛︎ ```It translates with Google Translate. You must reply any message.``` \n*⌨️ Eg:- :* ```.trt tr it (From Turkish to Italian)```*\n\n☢︎︎ .detectlang\n㋛︎ ```Guess the language of the replied message.```\n\n ☢︎︎ .currency\n\n☢︎︎ .tts \n㋛︎ ```It converts text to sound.```\n\n ☢︎︎ .song \n㋛︎  ```Uploads the song you wrote.```\n\n ☢︎︎ .video \n㋛︎  ```Downloads video from YouTube.```\n\n☢︎︎ .sing \n㋛︎  ```It sings song that you have written``` \n\n☢︎︎ .song \n㋛︎ ```Uploads the song you wrote for ios users.```\n\n ☢︎︎ .wiki \n㋛︎ ```Searches query on Wikipedia.```\n\n☢︎︎ .img \n ㋛︎ ```Searches for related pics on Google.``` \n\n☢︎︎ .github \n ㋛︎  ```Collects github information from the given username.\n*⌨️ Example: .github phaticusthiccy```*\n\n ☢︎︎ .lyric \n㋛︎  ```Finds the lyrics of the song.```\n\n☢︎︎ .covid \n㋛︎ ```Shows the daily and overall covid table of more than 15 countries.```\n\n ☢︎︎ .sweather \n㋛︎  ```Gives you the weekly interpretations of space weather observations provided by the Space Weather Research Center (SWRC) for a p.```\n\n ☢︎︎ .compliment \n㋛︎  ```It sends complimentry sentenses``` \n\n☢︎︎ .hmod  \n㋛︎ ```Finds mod apps from happymod```\n\n ☢︎︎ .insult \n㋛︎  ```It sends insulted words``` \n\n☢︎︎ .movie \n㋛︎  ```Shows movie info.```\n\n ☢︎︎ .joke \n㋛︎  ```It sends random jokes``` \n\n☢︎︎ .vava \n㋛︎  ```Chat with Pinky.\n*Use .molu<message>```*\n\n ☢︎︎ .owner\n㋛︎  ```shows the detail of bot owner```\n\n ☢︎︎ .quote \n㋛︎ ```It shares famous quotes```\n\n ☢︎︎ .ss \n㋛︎ ```Takes a screenshot from the page in the given link.```\n\n ☢︎︎ .setvar\n㋛︎ ```It sends high resolution wallpapers.```\n\n ☢︎︎ .show \n㋛︎  ```Get info related to tv series and shows```\n\n ☢︎︎ .ig \n㋛︎ ```Fetches user informations from instagram```\n\n ☢︎︎ .animesay \n㋛︎  ```It writes the text inside the banner the anime girl is holding```\n\n☢︎︎ .changesay \n㋛︎```Turns the text into the change my mind poster.```\n\n☢︎︎ .trumpsay \n```Converts the text to Trump's tweet.```\n\n ☢︎︎ .bgm \n㋛︎ ```turn on and turn off bgm. -bot owner command``` \n* *⌨️ Eg:- :* ```.bgm on / off```*\n\n☢︎︎ .autosticker \n㋛︎  ```turn on and turn off bgm. -bot owner command``` \n**⌨️ Eg:- :* ```.sticker on / off```*\n\n☢︎︎ .sudo \n㋛︎  ```changes sudo numbers``` \n* *⌨️ Eg:- :* ```.sudo *your number*```*\n\n☢︎︎ .caption \n㋛︎ ```changes all captions``` \n* *⌨️ Eg:- :* ```.caption *Made by JulieMwol*```*\n\n☢︎︎ .handlers \n```changes handlers``` \n**⌨️ Eg:- :* ```.handler ^[.!] ```*\n\n☢︎︎ .botname \n㋛︎  ```change your bot name``` \n* *⌨️ Eg:- :* ```.botname *name* ```*\n\n☢︎︎ .theri  \n㋛︎ ```change your theri commands``` \n*⌨️ Eg:- :*```.theri command,command```*\n\n☢︎︎ .sticker \n㋛︎ ```It converts your replied photo or video to sticker.```\n\n ☢︎︎ .ffpack \n㋛︎ ```Free Fire logo maker``` \n\n☢︎︎ .ffpack \n㋛︎ ```Free Fire logo maker```\n\n ☢︎︎ .alive \n㋛︎ ```Does bot work?``` \n\n☢︎︎ .sysd \n㋛︎  ```Shows the system properties.```\n\n ☢︎︎ .tagadmin \n㋛︎  ```Tags group admins.``` \n\n☢︎︎ .txtit \n㋛︎  ```Shows text to image tools withunlimitedaccess.```\n\n☢︎︎ .antibadword \n㋛︎  ```turn on & off anti-badword To remove members when they use badwords```\n*⌨Eg:- :*```.antibadword on / off```*\n\n☢︎︎ .a \n㋛︎ ```Converts audio to sound recording.```\n\n☢︎︎ .unvoice\n```Converts audio to sound recording.```\n\n ☢︎︎ .update \n㋛︎  ```Checks the update.```\n\n ☢︎︎ .update now \n㋛︎  ```It makes updates.``` \n\n☢︎︎ .wallpaper \n㋛︎  ```It sends high resolution wallpapers.```\n\n ☢︎︎ .wame \n㋛︎ ```Get a link to the user chat.```\n\n☢︎︎ .weather \n㋛︎  ```Shows the weather.```\n\n☢︎︎ .speedtest \n㋛︎  ```Measures Download and Upload speed.```\n\n ☢︎︎ .ping \n㋛︎  ```Measures your ping.``` \n\n☢︎︎ .short \n㋛︎  ```Shorten the long link.```\n\n ☢︎︎ .calc \n㋛︎  ```Performs simple math operations.```\n\n☢︎︎ .whois \n㋛︎ ```Displays metadata data of group or person.```\n\n  ", rowId:" rowid7"}
       ]
       
       const sections = [{title: "ᴀsʟᴜsᴇʀ ⚡", rows: rows}]
       
       const button = {
        buttonText: '◆◆𝗖𝗟𝗜𝗖𝗞◇𝗛𝗘𝗥𝗘◆◆..',
        description: "𝗧𝗘𝗗𝗭𝗢\n╭──────────────────\n│\n│ ᴍᴡᴏɴᴜsᴇ \n➽\n│ ▢ *ᴅᴇᴠᴇʟᴏʟᴇʀ* : ꪶtedzo_sirꫂ\n│ ▢ *ʙᴏᴛ* : 𝑻𝑬𝑫𝒁𝑶 𝑺𝑬𝑹\n│ ▢ *ᴠᴇʀsɪᴏɴ* : 2.0\n│ ▢ *ᴄᴏɴᴛᴀᴄᴛ* : https://wa.me/917736835721 \n│ ▢ *ᴀᴜᴛᴏ ʙɪᴏ* : ᴏғғ \n│ ▢ *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ\n│ ▢ *ᴘʀᴇғɪx* : *. , !*\n│\n│╔════╗╔═╗╔══╗╔╗╔╗╔╗\n│║╔╗╔╗║║═╝║╔╗║║║║║║║\n│║║║║║║║═╗║║║╚╝║║╚╝║\n│╚╝╚╝╚╝╚═╝╚╝╚══╝╚══╝\n│  ©ꪶ͢TEDZO_sirꪶ͢│\n╰──────────────────",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
