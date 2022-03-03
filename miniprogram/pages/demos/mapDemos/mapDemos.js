Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        title: 'Map - 腾讯地图',
        url: '/pages/demos/mapDemos/map/map1'
      },
      {
        title: 'Map - 地图选点',
        url: '/pages/demos/mapDemos/map/map2'
      },
      {
        title: 'Map - 标注点连线计算距离',
        url: '/pages/demos/mapDemos/map/map3'
      },
      {
        title: 'Map - 标注点连线计算距离2',
        url: '/pages/demos/mapDemos/map/map4'
      },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: 'Map'
    })
  },


})