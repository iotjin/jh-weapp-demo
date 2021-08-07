// miniprogram/pages/demos/gridViewDemos/gridView/gridView4.js
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
      title: 'GridView4 - 多列'
    })
  },
  onJumpNext(event) {
    var item = event.currentTarget.dataset.item
    console.log(item.url);
    console.log(item);
    wx.navigateTo({
      url: item.url,
    })
  },

})