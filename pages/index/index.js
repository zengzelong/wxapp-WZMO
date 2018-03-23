//index.js
//获取应用实例
const app = getApp();
const API_BASE = "https://wxapp.wzmo.cn";
const API_ROUTE = "api/news";

Page({
  data: {
    motto: '腾膜+',
    news: [],
    total: 0,
    totalPages: 0,
    currentPage: 1,
    isLoading: true,
    isEarth: false,
  },

  onLoad: function () {

    wx.request({
      url: `${API_BASE}/${API_ROUTE}`,
      data: {
      },
      success: (response) => {
        const news = response.data.list;
        this.setData({
          news,
          total: response.data.total,
          totalPages: response.data.totalpages,
          isLoading: false,
        });
      }
    })
  },


  onShow(item) {
    wx.request({
      url: `${API_BASE}/${API_ROUTE}`,
      data: {
      },
      success: (response) => {
        const news = response.data.list;
        this.setData({
          news,
          total: response.data.total,
          totalPages: response.data.totalpages,
          currentPage: 1,
          isEarth: false,
        })
        wx.stopPullDownRefresh();
      }
    })
  },

  //下拉刷新
  onPullDownRefresh () {
    wx.request({
      url: `${API_BASE}/${API_ROUTE}`,
      data: {
      },
      success: (response) => {
        const news = response.data.list;
        this.setData({
          news,
          total: response.data.total,
          totalPages: response.data.totalpages,
          currentPage: 1,
          isEarth: false,
        })
        wx.stopPullDownRefresh();
      }
    })
  },

  //拉到底部
  onReachBottom () {
    let { currentPage, totalPages, isLoading } = this.data;

    if(currentPage >= totalPages || isLoading){
      return;
    }

    this.setData({
      isLoading: true
    });

    currentPage = currentPage + 1;

    wx.request({
      url: `${API_BASE}/${API_ROUTE}?page=${currentPage}`,
      data: {
      },
      success: (response) => {
        console.log(response.data.list);
        const news = [...this.data.news, ...response.data.list];
        this.setData({
          news,
          currentPage,
          total: response.data.total,
          totalPages: response.data.totalpages,
          isLoading: false,
          isEarth: currentPage >= totalPages,
        });
      }
    })

  }


})
