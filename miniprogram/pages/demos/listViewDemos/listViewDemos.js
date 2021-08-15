// miniprogram/pages/demos/listView/listViewDemos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        title: 'ListView1 - 静态数据',
        url: '/pages/demos/listViewDemos/listView/listView1'
      },
      {
        title: 'ListView2 - 动态数据',
        url: '/pages/demos/listViewDemos/listView/listView2'
      },
      {
        title: 'ListView3 - 分页加载',
        url: '/pages/demos/listViewDemos/listView/listView3'
      },
      {
        title: 'ListView4 - tab分页加载',
        url: '/pages/demos/listViewDemos/listView/listView4'
      },
      {
        title: 'ListView5 - tab分页加载-vant',
        url: '/pages/demos/listViewDemos/listView/listView5'
      },
      {
        title: 'ListView6 - 分组列表',
        url: '/pages/demos/listViewDemos/listView/listViewGroup'
      },
      {
        title: 'ListView7 - tab分页加载',
        url: '/pages/three/feedback/myFeedback'
      },
      {
        title: 'ListView8 - 搜索列表',
        url: '/pages/demos/listViewDemos/listView/searchList'
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