// miniprogram/pages/demoList/gridViewDemoList/gridViewDemoList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [
      {
        text: 'eChart- 柱状图',
        // pathUrl: '/pages/demoList/eChartDemoList/eChart/eChart1'
        pathUrl: '/packageA/pages/eChartDemoList/eChart/eChart1'
      },
       {
        text: 'eChart- 饼状图',
        // pathUrl: '/pages/demoList/eChartDemoList/eChart/eChart2'
        pathUrl: '/packageA/pages/eChartDemoList/eChart/eChart2'
      }, 
      {
        text: 'eChart- 多个',
        // pathUrl: '/pages/demoList/eChartDemoList/eChart/eChart3'
        pathUrl: '/packageA/pages/eChartDemoList/eChart/eChart3'
      },
      {
        text: 'eChart- 多个',
        // pathUrl: '/pages/demoList/eChartDemoList/eChart/eChart3'
        pathUrl: '/packageA/pages/eChartDemoList/eChart/eChart4'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'eChartDemoList'
    })
  },

})