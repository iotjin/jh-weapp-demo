// miniprogram/pages/demoList/gridViewDemoList/gridView/gridView1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'GridView1 - 动态数据'
    })
  },
  ClickItem: function (event) {
    console.log("点击item - " + event.currentTarget.dataset['index']);
    this.setData({
      selectIndex: event.currentTarget.dataset['index'],
    })
  },




})