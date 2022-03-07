var API = require('../../../../http/apiCongfig.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    dataArr: []
  },

  requestData: function () {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      method: 'get',
      url: API.URL.api_simpleArrDict,
      success: (res) => {
        wx.hideLoading();
        wx.stopPullDownRefresh();
        // console.log(res);
        this.setData({
          dataArr: res.data.data
        })
      },
      Error: (Error) => {
        wx.hideLoading();
        wx.stopPullDownRefresh();
        console.log(Error);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '动态数据'
    })
    this.requestData();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.requestData();
  },

})