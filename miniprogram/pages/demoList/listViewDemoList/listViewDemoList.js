// miniprogram/pages/demoList/listView/listViewDemoList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [
      {
        text: 'ListView1 - 静态数据',
        pathUrl: '/pages/demoList/listViewDemoList/listView/listView1'
      },
      {
        text: 'ListView2 - 动态数据',
        pathUrl: '/pages/demoList/listViewDemoList/listView/listView2'
      },
      {
        text: 'ListView3 - 分页加载',
        pathUrl: '/pages/demoList/listViewDemoList/listView/listView3'
      },
      {
        text: 'ListView4 - tab分页加载',
        pathUrl: '/pages/demoList/listViewDemoList/listView/listView4'
      },
      {
        text: 'ListView5 - tab分页加载-vant',
        pathUrl: '/pages/demoList/listViewDemoList/listView/listView5'
      },
      {
        text: 'ListView6 - 分组列表',
        pathUrl: '/pages/demoList/listViewDemoList/listView/listViewGroup'
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