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


global.SESSION_ID = process.env.SESSION_ID  || "BWM-XMD;;;H4sIAAAAAAAAA5VU246qSBT9l3rFPo1c1aSTQUG0FVFBvEwmkxIKKMACKa52/PcJdndOP8w50/NWqcvaq9Zae78BkmKKFqgFozeQ5biCBeqWRZshMALj0vdRDnrAgwUEI2DM0lUbv97UgcdHqLqG4oaYUqYozylJtAGKy5VtNDOsaPULuPdAVp4T7P4GUOHHCk3255iZMWxjXj2Vfa38a2sF5o3cTi3kYx0yR5Lv0xdw7xAhzjEJtCxEF5TDZIHaNcT59+hfzWu4rKciWiPzQLnEO2Nx0WwUJBim0ZZ8indSusfXkAu+Rz9SSRGNnYnIG0Y6nq82a6qqxtFuhyUW24MzNaTK6Ms6m8Tv9CkOCPLmHiIFLtpv6z7Qb7thaA8z38W7KkkPmUMkRuqj43ah0b6bsdvmQi3Bu+y+R/yGIk0NDbYUx/Vq5u6d02Ih9alba57mXur2OVwllS3rFat9Jb7OP7MS/x/djybXT6NbrG+reKUOFG+yuZhoWG31GEvbDDrNPJEO+5Wym3+Pvq5VbqjKh3jFO4y9zCyLyaeqzrASLcbrxkqYpXI8HIqTw/6kD4sy/x3LamkZr2kZ1UcUy+WFDidrHPrpLClIcLats03yzZEh4t53HLK1FU6YW5PrgqwP9bK/PU3yOX8KBEwPG23H4Kw2b1surF8eP4pRO/fAqH/vgRwFmBY5LHBKuj1e7AHoVRZyc1Q81AVELyZIgV5o6pBZMM5lnuM68p102fAneRdG4mmTqMJ+0wgvoAeyPHURpcibYVqkeWsgSmGAKBj9+VcPENQU7749qvV7wMc5LXakzJIUep+mfh5C101LUlgtcSfdAuVgxP7cRkWBSUA7GUsCczfEFZqEsKBg5MOEonsPeKjCLurwgImWqjKYDrfR/m/plJSqddNcpaMcpuT9is9yYp/l4FPfleUnYcjCJwgH8ElEvixJQ5lD4hD0AP5ome7NLx3MXNs5u6VnJZ6C1F0VCI03oFNudqMPF96lRznywKjIS9QDZ+jGZWanMSK/wX31VrW/0yIlmW9cWy/869RF9fNx0ChfcN8tBaO3n2NqknodHq9xg7UytUAPXB4JxN3POVGQWZEVOVbojzj5D/qj7oSEWfaDoKLD/RC9e+GhAuKEghGYrHE1HA7GmnF7LfNU1xUtUCZBp+qnSZ9hf0+TM9X34VG2o4sc85tofGXPmA69IBCVSA3MkqKIMa97Yz1OX/4FBIzAWTr25eIYXIZzJzhrMBYW0+fyWDXEsCduvef7z0oDuQaVu+cmkbbldT0VCt0MpVe6Vq4Ru91x1sCT3E0Yn7jThRtulpPNS1ftPSxfi1FiyAceOw1RqWxb/qARluPTnip2EvgrmeCdMYgj5oSSkoZek1pMy4fc3lB4aK3LQEfyyUG3lOEjOZUUtjImgRl8tOFjDCQf4xc/OuTtI1o+Ro9pRmBn0X+Z8zXl7L33BeNjPv4iSWNnu03SvckKYimu2HkNC13I14fj3NzMa0HN81n6HF2TSK0huN//6oEsgYWf5hcwApB4eYo90AMJpIXys1FtfEG0gJcMjPoyz3OszImD+z+DCXee3QcAAA=="  // PUT your SESSION_ID 


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
