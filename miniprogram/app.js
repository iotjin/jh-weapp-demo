//app.js  var app = getApp();
App({

  //全局数据
  globalData: {
    name: '张三',
    isIPhoneX: false,
  },
  isIPhoneX: false, // 当前设备是否为 iPhone X
  kBottomSafeHeight: 0, // X 34，其余 0 
  kNetworkType: '', // 网络类型：wifi、2g、3g、4g、5g、unknown、none
  kHasNetwork: true, //是否有网，默认有
  kIsMobileNetwork: false, //是否是手机网络
  //全局宏
  kVersionNum:'1.0',
  kUserInfo: "kUserInfo",
  kOpenId: "kOpenId",
  kUserType: 'kUserType',
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

    this.checkIsIPhoneX()
    this.checkNetwork()
    this.getDataWithCustomNav()
  },

  // 判断设备是否为 iPhone X
  checkIsIPhoneX: function () {
    let that = this
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
    let that = this
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
    let that = this
    wx.getSystemInfo({
      success: function (e) {
        that.globalData.kStatusBarHeight = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          that.globalData.kCapsule = capsule;
          that.globalData.kCustomNavHeight = e.statusBarHeight + capsule.height + (capsule.top - e.statusBarHeight) * 2;
          // 判断是iOS 直接设置为44
          if (e.platform == 'ios' || (e.platform == 'devtools' && e.system.indexOf('iOS') > -1)) {
            that.globalData.kCustomNavHeight = e.statusBarHeight + 44
          }
        } else {
          that.globalData.kCustomNavHeight = e.statusBarHeight + 46;
        }

        /* 
        iOS capsule高度异常:

          X {"width":87,"height":32,"left":281,"top":48,"right":368,"bottom":80}
        非X {"width":87,"height":32,"left":281,"top":24,"right":368,"bottom":56}

          在获取胶囊按钮样式信息中发现，iOS上获取的数据异常，然后通过异常的胶囊按钮数据算出的导航条高度不对。熟悉iOS的应该知道，iOS设备的状态栏的高度为：20 (非刘海屏)或 44 (刘海屏)，标题栏高度为：44。因此暂时判断如果是iOS设备，把标题栏高度直接设置为 44，其他端还按照下面计算方式计算：

          导航条高度 = 状态栏高度 + ( 标题栏高度=胶囊按钮高度+(胶囊按钮Top-状态栏高度)*2 )
          
          在微信开放社区看到的其他计算方式 : https://developers.weixin.qq.com/community/develop/doc/0006ccd747c418fa9b5b4dd795b400

        */
      }
    })
  }

})