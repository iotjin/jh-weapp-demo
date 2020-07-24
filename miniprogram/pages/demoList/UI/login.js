// pages/login.js

var app = getApp();

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

    // var userInfo = wx.getStorageSync(app.kUserInfo)
    // if (userInfo) {
    //   wx.switchTab({
    //     url: './main/main'
    //   })
    // }

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  ClickLogin: function (e) {
    console.log(e.detail.userInfo);
    var that = this

    // wx.getSetting({
    //   success(res) {
    //     if (res.authSetting['scope.userInfo']) {

    //       wx.showLoading({
    //         title: "正在登录...",
    //       })
    //       wx.cloud.callFunction({
    //           name: 'login',
    //         })
    //         .then(res => {
    //           let openId = res.result.openid
    //           let userInfo = e.detail.userInfo
    //           UserDataManager.selectUserIsExist(openId).then(userInfoRes => {
    //             if (userInfoRes.data.length <= 0) {
    //               //不存在则 新增用户
    //               UserDataManager.addUser(userInfo, openId).then(res => {
    //                 that.goMain(userInfo, openId)
    //               }).catch(error => {
    //                 that.fail()
    //               });
    //             } else {
    //               that.goMain(userInfo, openId, userInfoRes.data[0])
    //             }
    //           }).catch(error => {
    //             that.fail()
    //           });
    //         })
    //         .catch(error => {
    //           that.fail()
    //         });

    //     } else {
    //       wx.showToast({
    //         title: '未授权',
    //         icon: 'none'
    //       })
    //     }
    //   }
    // })

  },
  goMain(userInfo) {
    wx.hideLoading()
    wx.switchTab({
      url: './main/main'
    })
    wx.showToast({
      title: '登录成功',
    })
    wx.setStorageSync(app.kUserInfo, userInfo)
  },
  fail() {
    wx.hideLoading()
    wx.showToast({
      title: '登录失败',
      icon: 'none'
    })
  }

})