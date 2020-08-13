// pages/demoList/demoList.js
var AES = require('../../utils/aes/aesUtils')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        text: 'ListView',
        pathUrl: '/pages/demoList/listViewDemoList/listViewDemoList'
      },
      {
        text: 'girdView',
        pathUrl: '/pages/demoList/gridViewDemoList/gridViewDemoList'
      },
      {
        text: 'EChart',
        // pathUrl: '../../packageA/pages/eChartDemoList/eChartDemoList'
        pathUrl: '/packageA/pages/eChartDemoList/eChartDemoList'
      },
      {
        text: 'UI',
        pathUrl: '/pages/demoList/UI/UIDemoList'
      },
      {
        text: 'other',
        pathUrl: '/pages/demoList/otherDemoList/otherDemoList'
      },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    wx.setNavigationBarTitle({
      title: 'DemoList'
    })

    this.aesTest()

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
  
  aesTest() {
    const aesString = "---content---"
    console.log("加密前:" + aesString)
    var aesBuffer = AES.Encrypt(aesString)
    console.log("加密后:" + aesBuffer)
    var decryData = AES.Decrypt(aesBuffer)
    console.log("解密后:" + decryData)
  }

})