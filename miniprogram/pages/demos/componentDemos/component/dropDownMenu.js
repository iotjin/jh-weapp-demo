// pages/demos/otherDemos/other/dropDownMenu.js
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

  },
  clickItem: function (e) {
    console.log(e);
    console.log(e.detail);
  },



})