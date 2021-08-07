var AES = require('../../../../utils/encrypt/aes/aesUtils')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '加密解密'
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.aesTest()
  },
  aesTest() {
    // const aesString = "---content---"
    const aesString = "123124"
    console.log("加密前:" + aesString)
    var aesBuffer = AES.Encrypt(aesString)
    console.log("加密后:" + aesBuffer)
    var decryData = AES.Decrypt(aesBuffer)
    console.log("解密后:" + decryData)
  }


})