// pages/demos/componentDemos/component/toastDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
      'title': '显示 jh-loading-toast',
      'info': '',
    }, {
      'title': '隐藏 jh-loading-toast',
      'info': '',
    }, ],
    isShowToast: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showLoading() {
    this.setData({
      isShowToast: true
    })
  },
  hideLoading() {
    this.setData({
      isShowToast: false
    })
  },
  onClickItem(e) {
    let item = e.detail
    console.log(item);
    let text = item.title;
    if (text == '显示 jh-loading-toast') {
      this.showLoading()
    }
    if (text == '隐藏 jh-loading-toast') {
      this.hideLoading()
    }
  },
})