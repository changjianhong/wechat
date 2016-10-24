"use strict";

//获取用户信息
function getUserInfo() {
    return new Promise(function(resolve, reject) {
        wx.getUserInfo({success:resolve, fail:reject});
    })
}

//异步 存储数据
function setStorage(key, value) {
    return new Promise(function(resolve, reject) {
        wx.setStorage({key:key, value:value, success:resolve, fail:reject});
    });
}

//获取本地数据
function getStorage(key) {
    return new Promise(function(resolve, reject) {
        wx.getStorage({key:key, success:resolve, fail:reject});
    });
}

//
function login() {
  return new Promise(function (resolve, reject) {
    wx.login({success: resolve, fail: reject });
  });
}

//
function navigateTo(url) {
    return new Promise(function (resolve, reject) {
        wx.navigateTo({url:url, success:resolve, fail:reject});
    });
}
function redirectTo(url) {
    return new Promise(function (resolve, reject) {
        wx.redirectTo({url:url, success:resolve, fail:reject});
    });
}

//
function chooseImage(object) {
    return new Promise(function(resolve, reject) {
        wx.chooseImage(Object.assign(object, {success:resolve, fail:reject}));
    });
}


module.exports = {
    login:login,
    getUserInfo:getUserInfo,
    setStorage:setStorage,
    getStorage:getStorage,
    navigateTo:navigateTo,
    redirectTo:redirectTo,
    chooseImage:chooseImage
};