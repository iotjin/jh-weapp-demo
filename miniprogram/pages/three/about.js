// miniprogram/pages/three/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: '关于'
    })

    //获取当前帐号信息。线上小程序版本号仅支持在正式版小程序中获取，开发版和体验版中无法获取。
    var info = wx.getAccountInfoSync()
    console.log(info);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})