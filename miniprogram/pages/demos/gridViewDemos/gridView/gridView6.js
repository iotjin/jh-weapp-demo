// miniprogram/pages/demos/gridViewDemos/gridView/gridView6.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        text: "text1",
        url: './function'
      },
      {
        text: "text2",
        url: './function'
      },
      {
        text: "text3",
        url: './function'
      },
      {
        text: "text4",
        url: './function'
      },
      {
        text: "text5",
        url: './function'
      },
      {
        text: "text6",
        url: './function'
      },
      {
        text: "text7",
        url: './function'
      },
      {
        text: "text8",
        url: './function'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'GridView6 - 自定义多列'
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