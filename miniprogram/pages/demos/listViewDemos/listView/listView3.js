// var http = require('../../../../http/httpUtils.js'); //相对路径

var API = require('../../../../http/apiCongfig.js'); //相对路径

var currentPage = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoadAll: false,
    dataArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '分页加载'
    })
    this.requestData();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.requestData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.requestData(true);
  },

  //请求数据
  requestData: function (isLoadMore) {
    var that = this
    if (isLoadMore) {
      if (this.data.isLoadAll) {
        wx.showToast({
          title: '暂无更多数据',
          icon: 'none',
        })
        return
      }
      currentPage++;
    } else {
      currentPage = 0;
    }

    let params = {}
    // params.keyword = this.data.keyword ? this.data.keyword : ''
    params.page = currentPage
    params.limit = 15
    console.log(params);

    wx.showNavigationBarLoading()
    API.getPageArrDict(params).then(res => {
      console.log(res);
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
      if (res.code == 200) {
        var data = res.data
        if (!data.length) {
          wx.showToast({
            title: '暂无更多数据',
            icon: 'none',
          })
          return
        }
        if (isLoadMore) {
          that.setData({
            dataArr: that.data.dataArr.concat(data),
          })
        } else {
          that.setData({
            dataArr: data,
          })
        }
        that.setData({
          isLoadAll: data.length < 15 ? true : false
        })
      }
    }).catch(error => {
      console.log(error);
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
      currentPage--
      currentPage = currentPage < 0 ? 0 : currentPage
    });
  },
  onClickItem(event) {
    var item = event.currentTarget.dataset.item
    console.log(item);
  },

})