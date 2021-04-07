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
  kNetworkType: '', // 网络类型：wifi、2g、3g、4g、5g、unknown、none
  kHasNetwork: true, //是否有网，默认有
  kIsMobileNetwork: false, //是否是手机网络

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
    this.checkNetwork()
    this.getDataWithCustomNav()
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
  //监测网络变化
  checkNetwork: function () {
    const that = this
    wx.getNetworkType({
      success(res) {
        that.kNetworkType = res.networkType
        that.kHasNetwork = (res.networkType == 'none') ? false : true
        if (res.networkType == '2g' || res.networkType == '3g' || res.networkType == '4g' || res.networkType == '5g') {
          that.kIsMobileNetwork = true
        }
      }
    })
    wx.onNetworkStatusChange(function (res) {
      that.kNetworkType = res.networkType
      that.kHasNetwork = (res.networkType == 'none') ? false : true
      if (res.networkType == '2g' || res.networkType == '3g' || res.networkType == '4g' || res.networkType == '5g') {
        that.kIsMobileNetwork = true
      }
    })
  },
  //获取自定义导航条需要的信息
  getDataWithCustomNav: function () {
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        // console.log('capsule=======');
        // console.log(capsule);
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
  }

})