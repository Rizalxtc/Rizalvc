const fs = require('fs')

const { existsSync } = require('fs')
//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("6283856948662")
global.mongodb = process.env.MONGODB_URI || "postgres://ynwyzbmvuysyph:3b077f1632ef2245b570dea948d765bb14a0d6e3cda538362fe5774d0ae490f3@ec2-18-214-134-226.compute-1.amazonaws.com:5432/d38ov11b76105r"
global.port= process.env.PORT || 5000
global.email = 'erogasnara@gmail.com'
global.github = 'https://github.com/Rizalxtc'
global.location = 'INDRAMAYU JAWA BARAT'
global.sudo = process.env.SUDO || '919628516236'
global.website = 'https://github.com/Rizalxtc' //wa.me/+6283856948662
module.exports = {
  botname: process.env.BOT_NAME || '𝐒𝐞𝐜𝐤𝐭𝐨𝐫 𝐁𝐨𝐭',
  ownername:process.env.OWNER_NAME || 'RizalMods',
  sessionName: process.env.SESSION_ID || 'KNTL.json',
  author: process.env.PACK_INFO.split(";")[0], 
  packname: process.env.PACK_INFO.split(";")[1],
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || '92',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  prefix: process.env.PREFIX || ['.'],
  nsfw_detect_ai : process.env.NSFW_DETECTION_AI || 'true',
  pmpermit: process.env.PMPERMIT || "false",
  mongodb_url: process.env.MONGODB_URI || "postgres://ynwyzbmvuysyph:3b077f1632ef2245b570dea948d765bb14a0d6e3cda538362fe5774d0ae490f3@ec2-18-214-134-226.compute-1.amazonaws.com:5432/d38ov11b76105r",
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "false",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'kick',
  HEROKU: {
        HEROKU: process.env.HEROKU || `true`,
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '826782bf-5f49-4811-a0f2-b3fc9f8f0871' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'rizzvc' : process.env.HEROKU_APP_NAME
    },
  BRANCH: 'main',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
 LANG: process.env.THEME|| 'NARUTO',
 WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
