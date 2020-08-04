// pages/demoList/otherDemoList/otherDemoList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        text: 'JhDropDownMenu',
        pathUrl: '/pages/demoList/otherDemoList/other/DropDownMenuDemo'
      },
      {
        text: 'JhYMDTimePicker',
        pathUrl: '/pages/demoList/otherDemoList/other/ymdTimePicker'
      },
      {
        text: 'vant 时间选择器',
        pathUrl: '/pages/demoList/otherDemoList/other/timePicker'
      },
      {
        text: '月日周时分 - 时间选择器',
        pathUrl: '/pages/demoList/otherDemoList/other/timePicker2'
      },
      {
        text: '输入弹框',
        pathUrl: '/pages/demoList/otherDemoList/other/inputPopView'
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