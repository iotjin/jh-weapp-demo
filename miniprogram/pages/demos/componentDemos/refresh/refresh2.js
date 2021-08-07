// miniprogram/pages/demos/otherDemos/other/refresh2.js
// 加载数据


Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  _onRefresh(e) {
    console.log('_onRefresh')
  },
  _onRestore(e) {
    console.log('_onRestore')
  },
  _onAbort(e) {
    console.log('_onAbort')
  },
  _onRefreshEnd() {
    console.log('_onRefreshEnd')
  },
  _onLoadmore(e) {
    console.log('_onLoadmore')
  }



})