
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
  },

  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
  onClick(event) {
    wx.showToast({
      title: `点击标签 ${event.detail.name}`,
      icon: 'none',
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  
})