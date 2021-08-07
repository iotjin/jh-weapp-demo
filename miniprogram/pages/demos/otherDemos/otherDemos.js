// pages/demos/otherDemos/otherDemos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        text: '加密解密',
        pathUrl: '/pages/demos/otherDemos/other/encrypt'
      },
      {
        text: 'vant 时间选择器',
        pathUrl: '/pages/demos/otherDemos/other/timePicker'
      },
      {
        text: 'scroll-view',
        pathUrl: '/pages/demos/otherDemos/other/baseView'
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