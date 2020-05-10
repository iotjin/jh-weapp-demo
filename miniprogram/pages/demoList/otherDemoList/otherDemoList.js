// pages/demoList/otherDemoList/otherDemoList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [
      {
        text: 'JhDropDownMenu',
        pathUrl: '/pages/demoList/otherDemoList/other/DropDownMenuDemo'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    wx.setNavigationBarTitle({
      title: 'other'
    })

  },


})