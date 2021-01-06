// miniprogram/pages/demoList/gridViewDemoList/gridViewDemoList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        text: 'eCharts- 柱状图',
        // pathUrl: '/pages/demoList/eChartDemoList/eChart/eChart1'
        pathUrl: '/packageA/pages/eChartDemoList/eChart/eChart1'
      },
      {
        text: 'eCharts- 饼状图',
        // pathUrl: '/pages/demoList/eChartDemoList/eChart/eChart2'
        pathUrl: '/packageA/pages/eChartDemoList/eChart/eChart2'
      },
      {
        text: 'eCharts- 多个',
        // pathUrl: '/pages/demoList/eChartDemoList/eChart/eChart3'
        pathUrl: '/packageA/pages/eChartDemoList/eChart/eChart3'
      },
      {
        text: 'eCharts- 异步',
        // pathUrl: '/pages/demoList/eChartDemoList/eChart/eChart4'
        pathUrl: '/packageA/pages/eChartDemoList/eChart/eChart4'
      },
      {
        text: 'eCharts- 异步多个',
        // pathUrl: '/pages/demoList/eChartDemoList/eChart/eChart5'
        pathUrl: '/packageA/pages/eChartDemoList/eChart/eChart5'
      },
      {
        text: 'eCharts- 异步1-带Loading',
        // pathUrl: '/pages/demoList/eChartDemoList/eChart/eChart6'
        pathUrl: '/packageA/pages/eChartDemoList/eChart/eChart6'
      },
      {
        text: 'eCharts- 异步多个2',
        // pathUrl: '/pages/demoList/eChartDemoList/eChart/eChart7'
        pathUrl: '/packageA/pages/eChartDemoList/eChart/eChart7'
      },
      {
        text: 'eCharts- x轴换行',
        // pathUrl: '/pages/demoList/eChartDemoList/eChart/eChart8'
        pathUrl: '/packageA/pages/eChartDemoList/eChart/eChart8'
      },
      {
        text: 'eCharts- 中国地图',
        // pathUrl: '/pages/demoList/eChartDemoList/eChart/eChart9'
        pathUrl: '/packageA/pages/eChartDemoList/eChart/eChart9'
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