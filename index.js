
  const fetch = require('node-fetch');
  class rectify {
   
    async getRoblox(robloxid){
        if (typeof robloxid !== "number") throw new Error("The user ID must be a number!");
        return fetch("http://api.rectify.international/v1/user/getroblox/" + robloxid, {
      method: "get"
    });
    }

  }
  module.exports = rectify
  