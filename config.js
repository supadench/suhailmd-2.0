const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_40_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk1LFxuICAgICAgICA2OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxODksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQzLFxuICAgICAgICA0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDk2LFxuICAgICAgICA4OSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDg3LFxuICAgICAgICA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk2LFxuICAgICAgICAzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDgyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDQsXG4gICAgICAgIDU2LFxuICAgICAgICA4MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU0LFxuICAgICAgICA1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMixcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdCVzBPandOQ2dVR2xqQ3FKVmlYYUtxS2FXc1NXZWkyUjVseVVIZTl0Y0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllVQ2dfNjAxVE5hT3FlaWt5X1JObGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDNkM2FiNzItNjlmNC00NjJmLTkxNjktMDA2YTk1ZTFhNTQxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMxLFxuICAgICAgMjM3LFxuICAgICAgMTYyLFxuICAgICAgMTEzLFxuICAgICAgMTI4LFxuICAgICAgMTQxLFxuICAgICAgMjQ4LFxuICAgICAgMTM0LFxuICAgICAgNzYsXG4gICAgICAxMjAsXG4gICAgICAyMDAsXG4gICAgICAxMjEsXG4gICAgICA0OCxcbiAgICAgIDI0MixcbiAgICAgIDEzMCxcbiAgICAgIDEyNyxcbiAgICAgIDc5LFxuICAgICAgMTU4LFxuICAgICAgNDIsXG4gICAgICAxNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDIyNixcbiAgICAgIDI0NyxcbiAgICAgIDE3MixcbiAgICAgIDExMixcbiAgICAgIDIzMixcbiAgICAgIDg0LFxuICAgICAgMTE5LFxuICAgICAgMjM1LFxuICAgICAgMTI5LFxuICAgICAgMTgwLFxuICAgICAgMjMyLFxuICAgICAgNTQsXG4gICAgICA3MSxcbiAgICAgIDkzLFxuICAgICAgMTg2LFxuICAgICAgMjM0LFxuICAgICAgMTMwLFxuICAgICAgMjMyLFxuICAgICAgOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQbXY5OThCRUppSTJMb0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZGR1doWTdUam03azNRakJxMGJpczlkZ2c1QWpEZ091c2VqK09xV01QQm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaUV5TDFWNjdaMDRHVlN1c21YUGxLekNRQVZhSmhjeFhGNzU3RjU4TGQveUN6a1RETzJEOWF2V2ppcDdndm8vSWp6bXR5Ly9yNEMxK2JoUVJNK0loQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTksyc1I3c0lEL2ttZjlNSDEwajBFZnRnS2wwN01GckF0NExhWU8xTXJ1NHp1SFF2R291MEdYRjBjZStiaUoyMDdDbmIwcnhzVDdVK2JXYytocm5wRHc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDUwNTIwNDE6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzOTAxMDk0NTA5Nzc5MDozMEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwNTA1MjA0MTozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNjkwMzk3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0lpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHSWYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0WDZJdk5PenozLzNOMkFTQ2pvWnlOcktUR1VMTTlIem5WSHhpbGUyV3hZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2OTYyMDcyOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzMjA3MjcwNDA1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0lnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiR1IvbWcveS9yNCtjK1BXeTRDZ2xwbjdoaEYzdDQ2TkprV0dTRjEvUU5nYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0Mjk0OTY3Mjk1LFwiY3VycmVudEluZGV4XCI6NDI5NDk2NzI5NSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM2NzkzNTExMjhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHSWguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRRFRiZ3QxcVV3aFArYzBuMkVJN3h4c0ZTZlZLeUVoTkJSNzNJdmIvY0FrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQyOTQ5NjcyOTUsXCJjdXJyZW50SW5kZXhcIjo0Mjk0OTY3Mjk1LFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM2Nzk1ODkzMTFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHSWkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkZlJrVHo1SE00ZEdRanF0RHZqbktyTVMwaTFFRHBkVEordmlTSXVXRVNFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2OTYyMDcyOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzY4NDg3MzEwN1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdJai5qc29uIjogIntcImtleURhdGFcIjpcInRYMDM0aGcwajFVSzdGTmlZOE5Oa2diOHpsQ2JFaVJtbWw5YUJ0STdzVkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY5NjIwNzI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM2ODUwNzQyNjRcIn0iCn0="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
