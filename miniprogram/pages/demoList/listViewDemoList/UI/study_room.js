
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roomList: [{
        "id": "2f4fewew444we5ef1ww4ww5",
        "constructionName": "21-448",
        "capacity": 50,
        "currentStudyStudentsNumber": 30,
        "isEnabledStudyRoom": true,
        "enableDateRange": "周一、周二、周三、周四、周五",
        "studyStartTime": "18:00",
        "studyEndTime": "22:00",
        "studyRoomType": "定向"
      },
      {
        "id": "2f4fewew444we5ef1ww4ww5",
        "constructionName": "21-448",
        "capacity": 50,
        "currentStudyStudentsNumber": 30,
        "isEnabledStudyRoom": false,
        "enableDateRange": "2021-01-01至2021-01-31",
        "studyStartTime": "18:00",
        "studyEndTime": "22:00",
        "studyRoomType": "流动"

      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * list中item的点击事件
   */
  onItemClick: function (event) {
    let index = event.currentTarget.dataset.index;
    wx.showToast({
      title: '点击了' + index,
    })
  }
})