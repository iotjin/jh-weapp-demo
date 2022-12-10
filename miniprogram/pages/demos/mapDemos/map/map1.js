const LocationUtils = require('../../../../utils/locationUtils.js')
var QQMapWX = require('./lib/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.min.js');
var qqmapsdk;

const INIT_CALLOUT = {
  content: '天安门广场',
  padding: 10,
  display: 'ALWAYS',
  anchorY: -30,
  bgColor: '#ffffff',
  anchorY: -30,
  fontSize: 14,
  textAlign: 'center',
  // borderWidth: 2,
};

const INIT_MARKER = {
  id: 2,
  latitude: 39.903734,
  longitude: 116.397845,
  iconPath: './images/Marker3_Activated@3x.png',
  width: '34px',
  height: '34px',
  rotate: 0,
  alpha: 1,
  callout: INIT_CALLOUT,
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 40.040415, // 纬度
    longitude: 116.273511, // 经度
    scale: 3, //默认16
    isShowScale: true,
    isShowCompass: true,
    isShowPosition: true,
    markers: [
      // 我的位置
      // {
      //   id: 0,
      //   iconPath: "./images/ic_mark1.png",
      //   latitude: 40.040415,
      //   longitude: 116.273511,
      //   width: 30,
      //   height: 30,
      //   title: '我的位置' //点击时显示，callout存在时将被忽略
      // },

      // 其它
      {
        ...INIT_MARKER
      },
      {
        id: 3,
        latitude: 40.040415,
        longitude: 116.273511,
        iconPath: './images/Marker1_Activated@3x.png',
        width: 30,
        height: 30,
        callout: {
          content: '腾讯总部大楼',
          padding: 10,
          borderRadius: 5,
          display: 'ALWAYS',
        },
        // 地图标记文字
        label: {
          content: '标记文字',
          color: '#f00',
          textAlign: 'center'
        }
      }
    ],
    animation: false,
    address: '',
    recommend: '',
    rough: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 实例化API核心类
    // 开发文档：https://lbs.qq.com/miniProgram/jsSdk/jsSdkGuide/jsSdkOverview
    qqmapsdk = new QQMapWX({
      key: '4M5BZ-ALKLU-BVXVL-B2HCC-DJSUS-WGFBH'
    });

    this.mapCtx = wx.createMapContext('myMap')
    // this.mapCtx.moveToLocation()
    // this.getCurrentLocation()
    // this.getCenterLngLat()

    // //更换定位图标。这个图标支持网络图片。
    // this.mapCtx.setLocMarkerIcon({
    //   iconPath: "./images/ic_mark1.png",
    // })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  // 获取当前位置
  getCurrentLocation() {
    // 获取精确位置使用时需满足以下两点，否则调用失败
    // 1.需申请开通（「开发」-「开发管理」-「接口设置」中自助开通该接口权限）
    // 2.需要在app.json配置
    var that = this
    const lat = "markers[0].latitude";
    const log = "markers[0].longitude";
    // wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
    LocationUtils.Jh_getLocation('gcj02').then(res => {
      console.log('当前位置');
      console.log(res);
      that.setData({
        latitude: res.latitude,
        longitude: res.longitude,
        [lat]: res.latitude,
        [log]: res.longitude
      });
    }).catch(error => {
      console.log(error);
      // wx.showToast({
      //   title: '为了不影响您的使用，请授权定位',
      //   icon: 'none'
      // })
    });
  },
  // 点击定位按钮
  onClickLocation() {
    var that = this
    this.setData({
      scale: 16,
    })
    setTimeout(() => {
      that.mapCtx.moveToLocation()
    }, 500);
  },
  // 视野发生变化时触发
  // 监听拖动地图，拖动结束根据中心点更新页面
  onMapChange(e) {
    if (e.type == 'end' && (e.causedBy == 'scale' || e.causedBy == 'drag')) {
      this.getCenterLngLat()
      this.setData({
        animation: true,
      });
    }
  },
  // 点击地图
  onMapTap(e) {
    console.log('点击地图');
    console.log(e);
    wx.showToast({
      title: '点击地图',
      icon: 'none'
    })
  },
  // 点击标记点时触发，e.detail = {markerId}
  onMapMarkTap(e) {
    console.log('点击标记点');
    console.log(e);
    console.log(e.detail.markerId);
    wx.showToast({
      title: '点击标记点',
      icon: 'none'
    })
  },
  // 点击标记点对应的气泡时触发e.detail = {markerId}
  onMapCalloutTap(e) {
    console.log('点击气泡');
    console.log(e);
    console.log(e.detail.markerId);
    wx.showToast({
      title: '点击标记点对应的气泡',
      icon: 'none'
    })
  },
  onMarkerAnimationend() {
    this.setData({
      animation: false
    });
  },

  // 获取地图中心点的经纬度
  getCenterLngLat: function () {
    var that = this
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log('获取中间点');
        console.log(res);
        that.reverseGeocoder(res.latitude, res.longitude)
      }
    })
  },
  // 逆地址解析
  reverseGeocoder(latitude, longitude) {
    var that = this
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        console.log('逆地址解析结果');
        console.log(res)
        var result = res.result
        console.log(result)
        // 地址描述
        let address = result.address
        // 位置描述
        let formatted_addresses = result.formatted_addresses
        // 经过腾讯地图优化过的描述方式， 更具人性化特点
        let recommend = formatted_addresses.recommend
        // 大致位置， 可用于对位置的粗略描述
        let rough = formatted_addresses.rough
        console.log(address)
        console.log(recommend)
        console.log(rough)

        that.setData({
          address: address,
          recommend: recommend,
          rough: rough,
        })
      },
    });
  }


})