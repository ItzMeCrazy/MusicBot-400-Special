require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || '', // your discord bot token
  prefix: process.env.PREFIX || '$', // bot prefix
  ownerID: process.env.OWNERID || ['820928134886326272'], //your discord id
  SpotifyID: process.env.SPOTIFYID || '', // spotify client id
  SpotifySecret: process.env.SPOTIFYSECRET || '', // spotify client secret
  mongourl: process.env.MONGO_URI || '', // MongoDb URL
  embedColor: process.env.COlOR || '#2B2928', // embed colour
  logs: process.env.LOGS || '1026075600089256017', // Discord channel id 
  links: {
    support: process.env.SUPPORT || 'https://discord.gg/devshub',
    invite: process.env.INVITE || 'https://discord.gg/devshub',
    vote: process.env.VOTE || 'https://discord.gg/devshub',
    bg: process.env.BG || 'https://media.discordapp.net/attachments/1028936089555193887/1029023341312487505/musicplayer-home.png'
  },

  nodes: [
    {
      url: process.env.NODE_URL || 'jp-lava.islantay.tk:443',
      name: process.env.NODE_NAME || 'jp-lava.islantay.tk',
      auth: process.env.NODE_AUTH || 'AmeliaWatsonisTheBest**!',
      secure: parseBoolean(process.env.NODE_SECURE || 'true'),
    },
  ],
};

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
