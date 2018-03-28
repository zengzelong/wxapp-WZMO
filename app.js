//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    const userInfo = wx.getStorageSync("userInfo");
    if(userInfo){
      this.globalData.userInfo = JSON.parse(userInfo);
    }


  },

  setUserInfo (token) {
    const _token = JSON.stringify(token);
    wx.setStorageSync("userInfo", _token);
    this.globalData.userInfo = token;
  },

  globalData: {
    userInfo: null
  }
})
