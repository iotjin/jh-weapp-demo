// miniprogram/pages/demos/listViewDemos/UI/list1.js

var currentPage = 0;
const API = require('../../../../http/apiCongfig.js'); //相对路径

Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword: '',
    normalDataArr: [],
    searchDataArr: [],
    dataArr: [{
        "id": "1",
        "reportEquipment": "设备名设备名设备名设备名设备名设备名设备名设备名设备名设备名设备名设备名设备名设备名",
        "name": "这是名称1这是名称1这是名称1这是名称1这是名称1这是名称1这是名称1这是名称1这是名称1这是名称1这是名称1",
        "faultTime": "2020-01-30 15:00",
        "handleStatus": "1"
      },
      {
        "id": "2",
        "reportEquipment": "设备名设备名设备名设备名",
        "name": "这是名称2",
        "faultTime": "2020-01-30 15:00",
        "handleStatus": "0"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onChange(e) {
    var keyword = e.detail
    this.setData({
      keyword: keyword,
    });
    console.log(keyword);
    this.requestData()
  },
  onSearch() {
    this.requestData()
  },
  clickItem: function (e) {
    var item = e.currentTarget.dataset.item
    console.log(item);
    // wx.navigateTo({
    //   url: './details?item=' + JSON.stringify(item),
    // })
    // var item = JSON.parse(options.item)
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
    params.keyword = this.data.keyword ? this.data.keyword : ''
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
  }


})