// miniprogram/pages/demos/gridViewDemos/gridViewDemos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        text: 'GridView1 - 动态数据',
        pathUrl: '/pages/demos/gridViewDemos/gridView/gridView1'
      },
      {
        text: 'GridView2 - 固定头尾',
        pathUrl: '/pages/demos/gridViewDemos/gridView/gridView2'
      },
      {
        text: 'GridView3 - 固定头尾',
        pathUrl: '/pages/demos/gridViewDemos/gridView/gridView3'
      },
      {
        text: 'GridView4 - 多列',
        pathUrl: '/pages/demos/gridViewDemos/gridView/gridView4'
      },
      {
        text: 'GridView5 - 功能列表',
        pathUrl: '/pages/demos/gridViewDemos/gridView/function'
      },
      {
        text: 'GridView6 - 自定义多列',
        pathUrl: '/pages/demos/gridViewDemos/gridView/gridView6'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'GridView'
    })
  },

})