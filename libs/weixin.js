const API_BASE = "https://wxapp.wzmo.cn";
const API_ROUTE_WEIXIN_LOGIN = "api/users/login";

const weixinLogin = () => {
  wx.login({
    success: (login) => {
      wx.request({
        url: `${ API_BASE }/${ API_ROUTE_WEIXIN_LOGIN }`,
        data: {},
        method: 'POST',
        success: function(res){
          // success
          console.log(res);
        }
      })
    },
    fail: function() {
      // fail
    },
    complete: function() {
      // complete
    }
  })
}

export {
  weixinLogin
}
