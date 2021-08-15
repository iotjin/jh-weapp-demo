// miniprogram/pages/demos/gridViewDemos/gridView/function.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupDataArr: [{
      groupTitle: '分组一',
      groupData: [{
        text: '功能1',
        url: './gridView1',
        img: '../../../../images/weixinLogo.png'
      }, {
        text: '功能2',
        url: './gridView2',
        img: '../../../../images/weixinLogo.png'
      }, {
        text: '功能3',
        url: './gridView3',
        img: '../../../../images/weixinLogo.png'
      }],
    }, {
      groupTitle: '分组二',
      groupData: [{
        text: '功能1',
        url: './gridView1',
        img: '../../../../images/weixinLogo.png'
      }, {
        text: '功能2',
        url: './gridView2',
        img: '../../../../images/weixinLogo.png'
      }, {
        text: '功能3',
        url: './gridView3',
        img: '../../../../images/weixinLogo.png'
      }, {
        text: '功能4',
        url: './gridView4',
        img: '../../../../images/weixinLogo.png'
      }],
    }, {
      groupTitle: '分组三',
      groupData: [{
        text: '功能1',
        url: './gridView1',
        img: '../../../../images/weixinLogo.png'
      }, {
        text: '功能2',
        url: './gridView2',
        img: '../../../../images/weixinLogo.png'
      }],
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'GridView5 - 功能列表'
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