// miniprogram/pages/demoList/listViewDemoList/UI/list1.js

var currentPage = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchText: '',
    normalDataArr: [],
    searchDataArr: [],
    dataArr: [{
        "id": "1",
        "reportEquipment": "1号楼808空调1号楼808空调1号楼808空调1号楼808空调1号楼808空调1号楼808空调",
        "name": "这是名称1这是名称1这是名称1这是名称1这是名称1这是名称1这是名称1这是名称1这是名称1这是名称1这是名称1",
        "faultTime": "2020-01-30 15:00",
        "handleStatus": "1"
      },
      {
        "id": "2",
        "reportEquipment": "1号楼808空调",
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
    var searchText = e.detail
    this.setData({
      searchText: searchText,
    });
    console.log(searchText);
  },
  clickItem: function (e) {
    var item = e.currentTarget.dataset.item
    console.log(item);
    // wx.navigateTo({
    //   url: './details?item=' + JSON.stringify(item),
    // })
    // var item = JSON.parse(options.item)
  },
  requestData: function (isLoadMore) {
    var that = this
    if (isLoadMore) {
      currentPage++;
    } else {
      currentPage = 0;
      this.setData({
        dataArr: [],
      })
    }
    var params = {
      page: currentPage,
      limit: 10,
    }
    wx.showNavigationBarLoading()
    wx.request({
      url: 'https://www.fastmock.site/mock/1010b262a743f0b06c565c7a31ee9739/root/newPageArrDic',
      data: params,
      success(res) {
        wx.hideNavigationBarLoading()
        wx.stopPullDownRefresh()
        if (res.data.code == 200) {
          var data = res.data.data
          console.log(data);
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
        } else {
          currentPage--
          currentPage = currentPage < 0 ? 0 : currentPage
        }
      },
      fail(err) {
        wx.hideNavigationBarLoading()
        wx.stopPullDownRefresh()
        currentPage--
        currentPage = currentPage < 0 ? 0 : currentPage
      }
    })

  },
})