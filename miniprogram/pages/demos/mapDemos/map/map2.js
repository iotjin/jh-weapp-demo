const chooseLocation = requirePlugin('chooseLocation');
const LocationUtils = require('../../../../utils/locationUtils.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: "",
    locationName: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 从地图选点插件返回后，在页面的onShow生命周期函数中能够调用插件接口，取得选点结果对象
  onShow() {
    const location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
    if (location) {
      console.log(location);
      this.setData({
        address: location.address ? location.address : "",
        locationName: location.name ? location.name : ""
      });
    }
  },
  onUnload() {
    // 页面卸载时设置插件选点数据为null，防止再次进入页面，geLocation返回的是上次选点结果
    chooseLocation.setLocation(null);
  },

  // 显示地图
  showMap1() {
    // 打开地图选择位置使用时需满足以下两点，否则调用失败
    // 1.需申请开通（「开发」-「开发管理」-「接口设置」中自助开通该接口权限）
    // 2.需要在app.json配置
    var that = this
    LocationUtils.Jh_chooseLocation().then(res => {
      console.log(res)
      that.setData({
        latitude: res.latitude,
        longitude: res.longitude,
        locationName: res.name,
        address: res.address
      })
    }).catch(error => {
      wx.showToast({
        title: '为了不影响您的使用，请授权定位',
        icon: 'none'
      })
    });
  },
  // 显示地图
  showMap2() {
    // 通过插件进行地图选点
    //使用在腾讯位置服务申请的key（必填）
    const key = "4M5BZ-ALKLU-BVXVL-B2HCC-DJSUS-WGFBH";
    //调用插件的app的名称（必填）
    const referer = "JhUI组件库";
    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer
    });
  }

})