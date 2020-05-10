// pages/demoList/otherDemoList/other/DropDownMenuDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrowSelectArray: [{
      "id": "1",
      "text": "11"
    }, {
      "id": "2",
      "text": "22"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: 'JhDropDownMenu'
    })
  },
  clickItem: function (e) {
    console.log(e);
    console.log(e.detail);
  },



})