const util = require('./util')
var QQMapWX = require('./lib/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.min.js');
var qqmapsdk;
const authUtils = require('../../../../utils/authUtils')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 40.040415,
    longitude: 116.273511,
    scale: 20, //默认20
    isShowScale: true,
    isShowCompass: false,
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
      // {
      //   id: 3,
      //   latitude: 40.040415,
      //   longitude: 116.273511,
      //   iconPath: './images/Marker1_Activated@3x.png',
      //   width: 30,
      //   height: 30,
      //   callout: {
      //     content: '腾讯总部大楼',
      //     padding: 10,
      //     borderRadius: 5,
      //     display: 'ALWAYS',
      //   },
      //   label: {
      //     content: '标记文字',
      //     color: '#f00',
      //     textAlign: 'center'
      //   }
      // }
    ],

    curPoints: [],
    polyline: '', // 路线
    polygons: '', // 多边形
    includePoints: '', // 缩放视野以包含所有给定的坐标点
    isSelectMarker: false,
    selectMarkerId: '',
    // 逆地址
    address: '',
    recommend: '',
    rough: '',
    title: "拖动选择位置",
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
    this.getCurrentLocation()

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
    this.clusterFunc()
  },
  // 获取当前位置
  getCurrentLocation() {
    var that = this
    // wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        console.log('当前位置');
        console.log(res);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        });
      },
      fail: (err) => {}
    });
  },
  // 点击定位按钮
  onClickLocation() {
    let that = this

    // 判断权限
    // wx.getSetting({
    //   success(res) {
    //     if (!res.authSetting['scope.userLocation']) {
    //       wx.showToast({
    //         title: '未授权',
    //         icon: 'none'
    //       })
    //     } else {
    //       // 有权限
    //       that.setData({
    //         scale: 20
    //       });
    //       that.getCurrentLocation()
    //       that.mapCtx.moveToLocation()
    //     }
    //   }
    // })

    // 判断权限
    authUtils.authorize("scope.userLocation", function (res) {
      console.log('success', res);
      that.setData({
        scale: 20
      });
      that.getCurrentLocation()
      that.mapCtx.moveToLocation()
    }, function (err) {
      console.log('denyback', err);
    }, function (err) {
      console.log('deniedBack', err);
    });


    // this.setData({
    //   scale: 20
    // });
    // let that = this
    // setTimeout(() => {
    //   that.mapCtx.moveToLocation()
    //   that.getCenterLngLat()
    // }, 200);
  },
  // 视野发生变化时触发
  // 监听拖动地图，拖动结束根据中心点更新页面
  onMapChange(e) {
    console.log(e);
    if (e.type == 'begin') {
      this.setData({
        title: "拖动选择位置",
      });
    }
    if (e.type == 'begin' && e.causedBy == "gesture") {
      this.cancelMarker()
    }
    if (e.type == 'end' && (e.causedBy == 'scale' || e.causedBy == 'drag')) {
      this.getCenterLngLat()
    }
  },
  // 点击地图
  onMapTap(e) {
    console.log('点击地图');
    console.log(e);
    console.log(this.data.isSelectMarker);
    // if (!this.data.isSelectMarker) {
    this.cancelMarker()
    // }
  },
  // 点击标记点时触发，e.detail = {markerId}
  onMapMarkTap(e) {
    console.log('点击标记点');
    console.log(e.detail.markerId);
    this.selectMarker(e.detail.markerId)
  },
  // 点击标记点对应的气泡时触发e.detail = {markerId}
  onMapCalloutTap(e) {
    console.log('点击气泡');
    console.log(e.detail.markerId);
    this.selectMarker(e.detail.markerId)
  },
  onClickAddMarkerBtn() {
    this.addMarker(this.data.latitude, this.data.longitude)
  },
  // 删除标记点
  onClickDeleteMarkerBtn() {
    var that = this
    wx.showModal({
      title: '是否删除该标记点？',
      // content: '',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          that.deleteMarker(that.data.selectMarkerId)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 获取地图中心点的经纬度
  getCenterLngLat: function () {
    var that = this
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log('获取中间点');
        console.log(res);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        });
        that.reverseGeocoder(res.latitude, res.longitude)
      }
    })
  },
  // 编辑或删除选中标记
  selectMarker(markerId) {
    let tempMarkers = this.data.markers
    tempMarkers.forEach(function (item, index) {
      item.iconPath = "./images/ic_mark1.png"
      item.isSelect = false
      if (index == markerId) {
        item.isSelect = !item.isSelect
        item.iconPath = item.isSelect ? './images/Marker1_Activated@3x.png' : "./images/ic_mark1.png"
      }
    });
    let marker = this.data.markers[markerId]
    this.setData({
      latitude: marker.latitude,
      longitude: marker.longitude,
      markers: tempMarkers,
      isSelectMarker: true,
      selectMarkerId: markerId,
    });
  },
  cancelMarker() {
    console.log('cancelMarker');
    let tempMarkers = this.data.markers
    tempMarkers.forEach(function (item, index) {
      item.iconPath = "./images/ic_mark1.png"
      item.isSelect = false
    });
    this.setData({
      markers: tempMarkers,
      isSelectMarker: false,
      selectMarkerId: "",
    });
  },
  // 添加一个标记点
  addMarker(latitude, longitude) {
    // 判断是否存在，相同经纬度不再添加
    let isExist = false
    this.data.markers.forEach(item => {
      if (item.latitude == latitude && item.longitude == longitude) {
        console.log('已存在，相同经纬度不再添加');
        isExist = true
        return
      }
    });
    if (isExist == true) {
      return
    }
    if (!this.data.title || this.data.title == '拖动选择位置') {
      wx.showToast({
        title: '未获取到地址',
        icon: 'none'
      })
      return
    }

    // 不存在。新增
    var mark = new Object(); //声明一个mark对象
    mark.id = this.data.markers.length;
    mark.longitude = longitude; //经度
    mark.latitude = latitude;
    mark.iconPath = "./images/ic_mark1.png";
    mark.width = 40;
    mark.height = 40;
    // mark.label = {
    //   fontSize: 14,
    //   anchorX: 0,
    //   anchorY: -35,
    //   content: mark.id + '',
    //   textAlign: 'center',
    //   color: '#000000',
    // }
    // mark.callout = {
    //   content: '腾讯总部大楼',
    //   padding: 10,
    //   borderRadius: 5,
    //   display: 'ALWAYS',
    // }

    // 自定义气泡窗口
    mark.customCallout = {
      anchorX: 0,
      anchorY: 25,
      display: 'ALWAYS',
    }
    mark.isSelect = false
    mark.address = this.data.title
    mark.joinCluster = true

    this.data.markers.push(mark)
    this.setData({
      markers: this.data.markers
    })

    // 在data中声明一个curPoints 来记录点击所有的点，在完成绘制的时候清空点。
    this.data.curPoints.push({
      longitude: longitude,
      latitude: latitude
    })
    // 添加线上的超过一个的点，每次把距离叠加上去
    if (this.data.curPoints.length > 1) {
      // console.log(this.data.curPoints)
      // 地图上用的polyline是一个线集合对象，如果只放一条线是无法看见的。
      var pl = [{
        points: this.data.curPoints,
        color: "#0066FF",
        width: 2,
        dottedLine: false,
      }];
      //更改界面数据
      this.setData({
        polyline: pl
      })
    }
    // 计算距离
    this.calculateDistance()
  },
  // 删除一个标记点
  deleteMarker(markerId) {
    let tempMarkers = this.data.markers
    let delMarker = tempMarkers[markerId]
    // console.log(delMarker);
    if (tempMarkers.length > markerId) {
      // 删除
      tempMarkers.splice(markerId, 1)
      // 重新排序,设置顺序
      tempMarkers.forEach(function (item, index) {
        item.id = index
      });
      let curPoints = this.data.curPoints
      curPoints.forEach(function (item, index) {
        if (item.latitude == delMarker.latitude && item.longitude == delMarker.longitude) {
          curPoints.splice(index, 1)
        }
      });
      // 地图上用的polyline是一个线集合对象，如果只放一条线是无法看见的。
      var pl = [{
        points: curPoints,
        color: "#0066FF",
        width: 2,
        dottedLine: false,
      }];
      this.setData({
        polyline: curPoints.length > 1 ? pl : '',
        curPoints: curPoints,
        markers: tempMarkers
      })
      // 计算距离
      this.calculateDistance()
      this.cancelMarker()
    }

  },
  // 每次更新markers之后重新计算距离
  calculateDistance() {
    // this.calculateEachDistance()
    this.calculateAllDistance()
  },
  // 计算两个点之间的距离，个数大于1每个点下都显示距离，不显示总距离
  calculateEachDistance() {
    let curPoints = this.data.curPoints
    if (curPoints.length > 1) {
      var p2 = curPoints[curPoints.length - 1]
      var p1 = curPoints[curPoints.length - 2]
      // console.log(p1);
      // console.log(p2);
      let dis = 0
      dis += util.distance(p1, p2);
      let datas = Number(dis); //转为字符串
      let datas2 = datas.toFixed(2) + "米"; //保留两位小数
      var x = -(datas2.length * 1) //设置文字向左偏移
      let label = {
        fontSize: 14,
        anchorX: x,
        anchorY: 0,
        content: datas2,
        textAlign: 'center',
        color: '#000000',
      }
      let last = "markers[" + (this.data.markers.length - 1) + "].label";
      this.setData({
        [last]: label
      })
    } else if (curPoints.length == 1) {
      let label = {
        fontSize: 14,
        anchorX: x,
        anchorY: 0,
        content: '',
        textAlign: 'center',
        color: '#000000',
      }
      this.setData({
        ['markers[0].label']: label
      })
    }
  },
  // 计算所有点之间的总距离，按添加顺序依次计算两点之间距离，并在最后一个点上显示总距离
  calculateAllDistance() {
    // 添加线上的超过一个的点，每次把距离叠加上去
    let curPoints = this.data.curPoints
    if (curPoints.length > 1) {
      let dis = 0
      curPoints.forEach(function (item, index) {
        if (index < (curPoints.length - 1)) {
          var p1 = curPoints[index]
          var p2 = curPoints[index + 1]
          dis += util.distance(p1, p2);
        }
      });
      let datas = Number(dis); //转为字符串
      let datas2 = datas.toFixed(2) + "米"; //保留两位小数
      var x = -(datas2.length * 1) //设置文字向左偏移
      let label = {
        fontSize: 14,
        anchorX: x,
        anchorY: 0,
        content: datas2,
        textAlign: 'center',
        color: '#000000',
      }
      let last2 = "markers[" + (this.data.markers.length - 2) + "].label";
      let last = "markers[" + (this.data.markers.length - 1) + "].label";
      this.setData({
        [last2]: {},
        [last]: label
      })
    } else if (curPoints.length == 1) {
      let label = {
        fontSize: 14,
        anchorX: x,
        anchorY: 0,
        content: '',
        textAlign: 'center',
        color: '#000000',
      }
      this.setData({
        ['markers[0].label']: label
      })
    }
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
          title: address
        })
      },
    });
  },
  /**
   * 点聚合
   */
  clusterFunc() {
    var that = this
    this.mapCtx.initMarkerCluster({
      enableDefaultStyle: false, //启用默认的聚合样式
      zoomOnClick: true, //点击已经聚合的标记点时是否实现聚合分离
      // gridSize: 200, //聚合算法的可聚合距离，即距离小于该值的点会聚合至一起，以像素为单位
      complete(res) {
        console.log('点聚合初始化', res)
      }
    })
    this.mapCtx.on('markerClusterCreate', res => {
      console.log('聚合触发：', res.clusters)
      // that.changeOnCluster(res.clusters)
      var clusters = res.clusters
      var markers = clusters.map(cluster => {
        const {
          center, // 聚合点的经纬度数组
          clusterId, // 聚合簇id
          markerIds // 已经聚合了的标记点id数组
        } = cluster
        return {
          ...center,
          canshow: true,
          width: 50,
          height: 50,
          alpha: 0,
          clusterId, // 必须
          // iconPath: '/map/ic_mark_normal.png',
          label: { // 定制聚合簇样式
            content: markerIds.length + '',
            fontSize: 16,
            color: '#fff',
            width: 50,
            height: 50,
            bgColor: '#419afcD9',
            borderRadius: 25,
            textAlign: 'center',
            anchorX: -10,
            anchorY: -35,
          }
        }
      })
      // 添加聚合簇
      this.mapCtx.addMarkers({
        markers,
        clear: false, //只改动了新增的聚合点，所以不用删除其他点
        complete(res) {
          console.log('clusterCreate addMarkers', res)
        }
      })
    })
  },


})