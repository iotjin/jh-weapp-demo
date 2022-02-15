const util= require('./util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: '',
    latitude: '',
    marks: [],
    polygons: '',
    polyline: '',
    includePoints: '',
    mapH: '',
    curPoints:[]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  clickMapTap: function (e) { //单击地图事件
    var mark = new Object(); //声明一个mark对象
    mark.id = this.data.marks.length;
    mark.longitude = e.detail.longitude; //经度
    mark.latitude = e.detail.latitude;
    mark.iconPath = "../../../../images/ic_about.png";
    mark.width = 10;
    mark.height = 12;
    //在data中声明一个curPoints 来记录点击所有额点，在完成绘制的时候清空点。
    var length = this.data.curPoints.push({
      longitude: e.detail.longitude,
      latitude: e.detail.latitude
    })
    var length = this.data.curPoints.length;
    if (length > 1) { //添加线上的超过一个的点，每次吧距离叠加上去

      var p2 = this.data.curPoints[length - 1]
      var p1 = this.data.curPoints[length - 2]
      let dis=0
     dis += util.distance(p1, p2);
      let datas = Number(dis); //转为字符串
      let datas2 = datas.toFixed(2) + "米"; //保留两位小数
      var x = -(datas2.length * 1) //设置文字向左偏移
      mark.label = {
        fontSize: 14,
        anchorX: x,
        anchorY: 0,
        content: datas2,
        textAlign: 'center',
        color: '#000000',
      }
      this.data.marks.push(mark);
      // console.log(this.data.curPoints)
      //这里地图上用的polyline是一个线集合对象，所以，如果只放一条线是无法看见的。
      var pl = [{
        points: this.data.curPoints,
        color: "#0066FF",
        width: 2,
        dottedLine: false,
      }];
      //更改界面数据
      this.setData({
        marks: this.data.marks,
        polyline: pl
      })

    } else { //添加线上的第一个点
      this.data.marks.push(mark);
      this.setData({
        marks: this.data.marks

      })
    }
  },


})