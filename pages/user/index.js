//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },

  onShow: function() {
    const { userInfo } = app.globalData;
    if(userInfo){
      this.setData({
        ...userInfo
      })
    }
  },

  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '我的',
    })
  },


  btnLogin: function(){

    /*
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

    */

    wx.navigateTo({
      url: 'login'
    })



  }



})
