module.exports.config = {
  name: "restart",
  version: "1.0.0",
  permssion: 3,
  prefix: true,
  premium: false,
  credits: "Hamim",
  description: "Restart the Bot",
  category: "system",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const { threadID, messageID } = event;
  return api.sendMessage(`╭──────────────➣
│么XAMI BOT is
│Trying To Restart☢️
│━━━━•💠•━━━━┓
│❖Restarting: in 6's
│   ██████╗
│   ██         ██╗
│   ██████╔╝
│   ██╔══██╗
│   ██║	    ██║
│   ╚═╝ 	    ╚═╝
│	     Restarted..
│			 🄱🄾🅃
│  Bot by Hamim
│━━━━•💠•━━━━┛
│么 XAMI BOT is
│Successfully Restarted
╰──────────────➣`, threadID, () => process.exit(1));
}