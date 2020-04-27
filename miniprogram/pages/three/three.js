// miniprogram/pages/three/three.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
      // newIcon: require('../.././images/ic_heart.png'),

    cellIcon_leibie: '../../images/ic_category.png',

    cellIcon_set: '../../images/ic_set.png',


    listData: [
      {
        'title':'标签',
        'icon': '../../images/ic_category.png',
    },
      {
        'title': '设置',
        'icon': '../../images/ic_set.png',
      },
      {
        'title': '关于',
        'icon': '../../images/ic_about.png',
      },
      {
        'title': '意见反馈',
        'icon': '../../images/ic_opinion.png',
      }, 
      {
        'title': '天数',
        'icon': '../../images/ic_heart.png',
        'info': '15天'
      }
    ],

    listData0:[
      "1",
      "2",
      "3",
      "4"
    ],


 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      // cellIcon1: require('/miniprogram/images/ic_heart.png'),
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

    // "van-icon": "/miniprogram_npm/vant-weapp/icon/index",
    //   "van-image": "/miniprogram_npm/@vant/weapp/image/index",
    //     "van-cell": "/miniprogram_npm/@vant/weapp/cell/index",
    //       "van-cell-group": "/miniprogram_npm/@vant/weapp/cell-group/index",
    //         "van-nav-bar": "/miniprogram_npm/@vant/weapp/nav-bar/index",
    //           "van-button": "/miniprogram_npm/@vant/weapp/button/index",

  }
})