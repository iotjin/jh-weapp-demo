import * as echarts from '../../../../Third/ec-canvas/echarts';

let chart = null;

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    title: {
        text: 'ECharts-柱状图'
    },
    tooltip: {},
    //图例
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
  chart.setOption(option);
  return chart;
}

Page({
  // onShareAppMessage: function (res) {
  //   return {
  //     title: 'ECharts 可以在微信小程序中使用啦！',
  //     path: '/pages/index/index',
  //     success: function () { },
  //     fail: function () { }
  //   }
  // },
  data: {
    ec: {
      onInit: initChart
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'eChart- 柱状图'
    })
  },
  onReady() {
    setTimeout(function () {
      // 获取 chart 实例的方式
      // console.log(chart)
    }, 2000);
  }
});
