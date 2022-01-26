const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIPhoneX: app.isIPhoneX,
    versionNum: app.kVersionNum,
    isNew: '',
    appName: 'jh-weapp-demo',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: '关于'
    })

    //获取当前帐号信息
    var info = wx.getAccountInfoSync()
    console.log(info);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //赞赏支持
  onClickAppreciate() {
    wx.previewImage({
      urls: ['https://gitee.com/iotjh/res/raw/master/weapp/PayCode.jpg'],
    });

  },

})