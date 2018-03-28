import { weixinLogin } from "../../libs/weixin";

const app = getApp();
const { setUserInfo } = app;

const API_BASE = "https://wxapp.wzmo.cn";
const API_USER_LOGIN = "api/users/login";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: "",
    captcha: "",
    showMessage: false,
    message: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onInputMobile: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },

  onInputCaptcha: function (e) {
    this.setData({
      captcha: e.detail.value
    })
  },

  onTapLogin: function (e) {

    /*
    if(this.data.mobile == ""){
      wx.showToast({title: '请输入您的手机号',icon: 'none',duration: 2000});
      return;
    }

    if(this.data.captcha == ""){
      wx.showToast({title: '请输入验证码',icon: 'none',duration: 2000});
      return;
    }
    */

    console.log(this.data);

    wx.request({
      url: `${API_BASE}/${API_USER_LOGIN}`,
      data: {
        mobile: this.data.mobile,
        captcha: this.data.captcha,
      },
      method: 'POST',
      success: function(res){

        // success

        const { data, statusCode } = res;

        switch (statusCode) {
          case 403:
            break;
          case 200:
            setUserInfo(res.data);
            wx.redirectTo({
              url: '/pages/user/index',
            })
            break;
          default:
            console.log(res);
        }

      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },


  onTapWXLogin (){
    weixinLogin();
  },
})
