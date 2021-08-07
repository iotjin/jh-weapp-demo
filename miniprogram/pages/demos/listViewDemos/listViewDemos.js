// miniprogram/pages/demos/listView/listViewDemos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [
      {
        text: 'ListView1 - 静态数据',
        pathUrl: '/pages/demos/listViewDemos/listView/listView1'
      },
      {
        text: 'ListView2 - 动态数据',
        pathUrl: '/pages/demos/listViewDemos/listView/listView2'
      },
      {
        text: 'ListView3 - 分页加载',
        pathUrl: '/pages/demos/listViewDemos/listView/listView3'
      },
      {
        text: 'ListView4 - tab分页加载',
        pathUrl: '/pages/demos/listViewDemos/listView/listView4'
      },
      {
        text: 'ListView5 - tab分页加载-vant',
        pathUrl: '/pages/demos/listViewDemos/listView/listView5'
      },
      {
        text: 'ListView6 - 分组列表',
        pathUrl: '/pages/demos/listViewDemos/listView/listViewGroup'
      },
      {
        text: 'ListView7 - tab分页加载',
        pathUrl: '/pages/three/feedback/myFeedback'
      },
      {
        text: 'ListView8 - 搜索列表',
        pathUrl: '/pages/demos/listViewDemos/listView/searchList'
      },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    wx.setNavigationBarTitle({
      title: 'ListView'
    })

  },


})