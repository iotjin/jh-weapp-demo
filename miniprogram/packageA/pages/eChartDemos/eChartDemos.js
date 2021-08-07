// miniprogram/pages/demos/gridViewDemos/gridViewDemos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        text: 'ECharts- 柱状图',
        // pathUrl: '/pages/demos/eChartDemos/eChart/eChart1'
        pathUrl: '/packageA/pages/eChartDemos/eChart/eChart1'
      },
      {
        text: 'ECharts- 饼状图',
        // pathUrl: '/pages/demos/eChartDemos/eChart/eChart2'
        pathUrl: '/packageA/pages/eChartDemos/eChart/eChart2'
      },
      {
        text: 'ECharts- 多个',
        // pathUrl: '/pages/demos/eChartDemos/eChart/eChart3'
        pathUrl: '/packageA/pages/eChartDemos/eChart/eChart3'
      },
      {
        text: 'ECharts- 异步',
        // pathUrl: '/pages/demos/eChartDemos/eChart/eChart4'
        pathUrl: '/packageA/pages/eChartDemos/eChart/eChart4'
      },
      {
        text: 'eCharts- 异步多个',
        // pathUrl: '/pages/demos/eChartDemos/eChart/eChart5'
        pathUrl: '/packageA/pages/eChartDemos/eChart/eChart5'
      },
      {
        text: 'ECharts- 异步1-带Loading',
        // pathUrl: '/pages/demos/eChartDemos/eChart/eChart6'
        pathUrl: '/packageA/pages/eChartDemos/eChart/eChart6'
      },
      {
        text: 'ECharts- 异步多个2',
        // pathUrl: '/pages/demos/eChartDemos/eChart/eChart7'
        pathUrl: '/packageA/pages/eChartDemos/eChart/eChart7'
      },
      {
        text: 'ECharts- x轴换行',
        // pathUrl: '/pages/demos/eChartDemos/eChart/eChart8'
        pathUrl: '/packageA/pages/eChartDemos/eChart/eChart8'
      },
      {
        text: 'ECharts- 中国地图',
        // pathUrl: '/pages/demos/eChartDemos/eChart/eChart9'
        pathUrl: '/packageA/pages/eChartDemos/eChart/eChart9'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'ECharts'
    })
  },

})