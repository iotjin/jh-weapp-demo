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
      },
      {
        text: 'vant 时间选择器',
        pathUrl: '/pages/demoList/otherDemoList/other/timePicker'
      },
      {
        text: '月日周时分 - 时间选择器',
        pathUrl: '/pages/demoList/otherDemoList/other/timePicker2'
      },
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