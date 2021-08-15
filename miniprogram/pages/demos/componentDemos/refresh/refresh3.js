// miniprogram/pages/demos/otherDemos/other/refresh3.js
var API = require('../../../../http/apiCongfig.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [],
    url: API.URL.api_getPageArrDic,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onReturnData(e) {
    console.log('===page拿到的数据===');
    console.log(e.detail);
    this.setData({
      dataArr: e.detail
    })
  }
})