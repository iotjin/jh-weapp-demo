var API = require('../../../JhHttp/APICongfig.js'); //相对路径

var currentPage = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    isLoadAll: false, //已经加载全部数据
    dataArr: []
    // dataArr: [{
    //   feedbackType: '类型1',
    //   contactInformation: '123',
    //   content:'这是内容'
    // }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.requestData()
  },

  //切换tab
  onChange(event) {
    if (event.detail.name == "0") {
      this.setData({
        active: 0,
      })
    }
    if (event.detail.name == "1") {
      this.setData({
        active: 1,
      })
    }
    this.requestData()
  },
  //点击cell
  ClickCell: function (event) {
    let model = event.currentTarget.dataset.selectdata;
    console.log(model);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.requestData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.requestData(true)
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
      that.setData({
        dataArr: [],
        isLoadAll: false
      })
    }

    var prams = {
      page: currentPage
    }
    wx.showNavigationBarLoading()
    API.getPageArrDic2(prams).then(res => {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
      if (isLoadMore) {
        if (res.data) {
          that.setData({
            dataArr: this.data.dataArr.concat(res.data),
          })
        }
      } else {
        // console.log(res.data);
        that.setData({
          dataArr: res.data,
        })
      }
      if (res.data.length < 10) {
        that.setData({
          isLoadAll: true
        })
      }

    }).catch(error => {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
      currentPage--
      currentPage = currentPage < 0 ? 0 : currentPage
      that.setData({
        isLoadAll: false
      })
    });

  },

})