// miniprogram/pages/demos/gridViewDemos/gridViewDemos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        title: 'GridView1 - 动态数据',
        url: '/pages/demos/gridViewDemos/gridView/gridView1'
      },
      {
        title: 'GridView2 - 固定头尾',
        url: '/pages/demos/gridViewDemos/gridView/gridView2'
      },
      {
        title: 'GridView3 - 固定头尾',
        url: '/pages/demos/gridViewDemos/gridView/gridView3'
      },
      {
        title: 'GridView4 - 多列',
        url: '/pages/demos/gridViewDemos/gridView/gridView4'
      },
      {
        title: 'GridView5 - 功能列表分组',
        url: '/pages/demos/gridViewDemos/gridView/function'
      },
      {
        title: 'GridView6 - 自定义多列',
        url: '/pages/demos/gridViewDemos/gridView/gridView6'
      },
      {
        title: 'GridView7 - 功能列表2',
        url: '/pages/demos/gridViewDemos/gridView/function2'
      },
      {
        title: 'GridView8 - 功能列表3',
        url: '/pages/demos/gridViewDemos/gridView/function3'
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