// pages/posts/add.js

const API_BASE = "https://wxapp.wzmo.cn";
const API_ROUTE = "api/news";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData: {},
    isLoading: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  bindTitleInput: function (e) {
    this.setData({
      ['postData.title']: e.detail.value
    })
  },

  bindContentInput: function (e) {
    this.setData({
      ['postData.content']: e.detail.value
    })
  },

  btnPosts: function (e) {

    console.log(this.data.title);
    console.log(this.data.content);

    this.setData({
      isLoading: true,
    });

    wx.request({
      url: `${API_BASE}/${API_ROUTE}`,
      method: "POST",
      data: {
        ...this.data.postData
      },
      success: (response) => {
        switch(response.statusCode){
          case 201:
            this.setData({
              postData: {}
            })

            wx.navigateTo({
              url: '/pages/index/index',
            })
            break;

          default:
              this.setData({
                postData: {},
                isLoading: false,
              })

              wx.switchTab({
                url: '/pages/index/index'
              })

              //console.log(response);
              //break;
        }
      }      
    })

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
  
  }
})