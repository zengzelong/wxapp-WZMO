//index.js

Page({
  data: {
    name: '腾膜+',
  },

  btnScan: function (e) {
    
    wx.scanCode({
      success: (res) => {
        //console.log(res)

        this.setData({
          name: res.result
        })

      }
    })


  }
})
