const util = require('./util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 40.040415,
    longitude: 116.273511,
    scale: 16, //默认16
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var that = this
    const lat = "markers[0].latitude";
    const log = "markers[0].longitude";
    // wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        console.log('当前位置');
        console.log(res);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          [lat]: res.latitude,
          [log]: res.longitude
        });
      },
      fail: (err) => {
        // wx.showToast({
        //   title: '为了不影响您的使用，请授权定位',
        //   icon: 'none'
        // })
      }
    });
  },
  // 点击定位按钮
  onClickLocation() {
    this.setData({
      scale: 17
    });
    setTimeout(() => {
      this.mapCtx.moveToLocation()
    }, 200);
  },
  // 视野发生变化时触发
  // 监听拖动地图，拖动结束根据中心点更新页面
  onMapChange(e) {
    if (e.type == 'end' && (e.causedBy == 'scale' || e.causedBy == 'drag')) {
      this.getCenterLngLat()
      if (this.data.isSelectMarker) {
        setTimeout(() => {
          this.moveMarker(this.data.selectMarkerId, this.data.latitude, this.data.longitude)
        }, 500);
      }
    }
  },
  // 点击地图
  onMapTap(e) {
    console.log('点击地图');
    console.log(e);
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
    var that = this
    wx.showModal({
      title: '是否删除该标记点？',
      content: '确认将删除，取消可拖动地图更新标记点位置',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          that.deleteMarker(markerId)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  cancelMarker() {
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
  // 编辑标记点（移动位置）
  moveMarker(markerId, latitude, longitude) {
    console.log('编辑标记点（移动位置）');
    this.mapCtx.translateMarker({
      // 要平移的marker的id
      markerId: markerId,
      // 移动过程中是否自动旋转 marker
      autoRotate: false,
      // 动画持续时长，平移与旋转分别计算
      duration: 10,
      // 平移到的目的地，参数为经纬度
      destination: {
        latitude: latitude,
        longitude: longitude,
      },
      //平移动画后的回调函数
      animationEnd() {}
    })

    let tempMarkers = this.data.markers
    let marker = this.data.markers[markerId]

    let curPoints = this.data.curPoints
    curPoints.forEach(function (item, index) {
      if (item.latitude == marker.latitude && item.longitude == marker.longitude) {
        curPoints.splice(index, 1, {
          longitude: longitude,
          latitude: latitude
        })
      }
    });

    tempMarkers[markerId].latitude = latitude
    tempMarkers[markerId].longitude = longitude

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
      markers: tempMarkers,
    })

    // 计算距离
    this.calculateDistance()
    // 移动结束取消选中
    this.cancelMarker()
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
    }
  }

})