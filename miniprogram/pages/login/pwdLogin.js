// pages/login/pwdLogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: '',
    pwd: '',
    checked: true,
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onChange(event) {
    let type = event.currentTarget.dataset.type;
    let value = event.detail
    this.setData({
      [type]: value
    });
  },
  onChange2(event) {
    var type = event.currentTarget.dataset.type;
    let value = event.detail.value
    this.setData({
      [type]: value
    });
  },
  onChange3(event) {
    this.setData({
      checked: event.detail,
    });
  },
  onClickLogin() {

  }

})