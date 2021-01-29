//app.js  var app = getApp();
App({

  //全局数据
  globalData: {
    name: '张三',
    isIPhoneX: false,
  },
  //全局宏
  kUserInfo: "kUserInfo",
  isIPhoneX: false, // 当前设备是否为 iPhone X
  kBottomSafeHeight: 0, // X 34 ，其余 0 

  onLaunch: function () {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {}
    this.checkIsIPhoneX()
  },

  // 判断设备是否为 iPhone X
  checkIsIPhoneX: function () {
    const that = this
    wx.getSystemInfo({
      success: function (res) {
        var safeBottom = res.screenHeight - res.safeArea.bottom
        that.kBottomSafeHeight = safeBottom
        //根据安全高度判断
        if (safeBottom === 34) {
          that.globalData.isIPhoneX = true
          that.isIPhoneX = true
        }
        // // 根据 model 进行判断
        // if (res.model.search('iPhone X') != -1) {
        //   that.globalData.isIPhoneX = true
        //   that.isIPhoneX = true
        // }
        // // 或者根据 screenHeight 进行判断
        // if (res.screenHeight == 812 || res.screenHeight == 896) {
        //   that.isIPhoneX = true
        // }
      }
    })
  },
})