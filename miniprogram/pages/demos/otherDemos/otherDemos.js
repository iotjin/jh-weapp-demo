// pages/demos/otherDemos/otherDemos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        title: '加密解密',
        url: '/pages/demos/otherDemos/other/encrypt'
      },
      {
        title: 'vant 时间选择器',
        url: '/pages/demos/otherDemos/other/timePicker'
      },
      {
        title: 'scroll-view',
        url: '/pages/demos/otherDemos/other/baseView'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'Other'
    })
  },


})