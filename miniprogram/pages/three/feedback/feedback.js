// miniprogram/pages/three/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectType: '',
    email: '',
    content: '',
    types: ['无法打开小程序 / 闪退', '卡顿 / 界面错位、异常', '意见建议', '其他']

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //选择类型
  ClickType: function () {
    var that = this
    wx.showActionSheet({
      itemList: that.data.types,
      success(res) {
        console.log(res.tapIndex)
        that.setData({
          selectType: that.data.types[res.tapIndex]
        })
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  onChange1: function (event) {
    // console.log('联系方式---' + event.detail);
    this.setData({
      email: event.detail
    })
  },
  onChange2(event) {
    // console.log('反馈内容---' + event.detail);
    this.setData({
      content: event.detail
    })
  },
  ClickOkBtn() {
    console.log('type--'+this.data.selectType);
    console.log('email--'+this.data.email);
    console.log('content--'+this.data.content);

  },


})