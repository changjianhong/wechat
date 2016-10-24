//app.js

var util = require("./utils/util");
var wechat = require("./utils/wechat");
var server = require("./utils/server");

App({
  util:util,
  wechat:wechat,
  server:server,

  getUserInfo: function() {
    var _this = this;
    return new Promise((resolve, reject) => {
      if(_this.globalData.userInfo) {
        resolve(_this.globalData.userInfo);
      } else {
        wechat.login().then((res) => {
          if(res.code) {
            return wechat.getUserInfo();
          } else {
            reject(res.errMsg);
          }
        }).then((res) => {
          _this.globalData.userInfo = res.userInfo;
          resolve(_this.globalData.userInfo);
        }).catch((err) => {
          reject(err);
        })
      }
    })
  },

  globalData:{
    userInfo:null
  },

  onLaunch: function onLaunch() {
    console.log(' ========== Application is launched ========== ');
  },
});
