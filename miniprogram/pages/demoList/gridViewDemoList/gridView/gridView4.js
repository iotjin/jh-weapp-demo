// miniprogram/pages/demoList/gridViewDemoList/gridView/gridView4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        text: "text1",
      },
      {
        text: "text2",
      },
      {
        text: "text3",
      },
      {
        text: "text4",
      },
      {
        text: "text5",
      },
      {
        text: "text6",
      },
      {
        text: "text7",
      },
      {
        text: "text8",
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    wx.setNavigationBarTitle({
      title: 'GridView4 - 多列'
    })
  },


})