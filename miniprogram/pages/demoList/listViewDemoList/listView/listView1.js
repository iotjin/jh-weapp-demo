
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [
      {
        text: 'text1',
        money:'12.9'
      },
      {
        text: 'text2',
        money: '20.9'
      },
      {
        text: 'text3',
        money: '330.9'
      },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: '静态数据'
    })
  },


})