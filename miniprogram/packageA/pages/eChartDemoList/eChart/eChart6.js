import * as echarts from '../../../ec-canvas/echarts';
let barChart = null;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      lazyLoad: true
    },
    household: 157823,
    people: 353921,
    percentage: 5.31,
    dic: {
      jiankang: [{
          text: '健康',
          value: 147326,
          color: '#14BF6B'
        },
        {
          text: '长期慢性病',
          value: 78857,
          color: '#FFBB46'
        },
        {
          text: '大病',
          value: 16171,
          color: '#FF7276'
        },
        {
          text: '残疾人口',
          value: 16171,
          color: '#9F9F9F'
        }
      ],
      laodong: [{
          text: '普通劳动力',
          value: 147326,
          color: '#14BF6B'
        },
        {
          text: '技能劳动力',
          value: 78857,
          color: '#FFBB46'
        },
        {
          text: '弱(半)劳动力',
          value: 16171,
          color: '#FF7276'
        },
        {
          text: '无劳动力',
          value: 16171,
          color: '#00A0FB'
        },
        {
          text: '丧失劳动力',
          value: 16171,
          color: '#9F9F9F'
        }
      ],
      student: [{
          text: '在校生',
          value: 147326,
          color: '#14BF6B'
        },
        {
          text: '非在校生',
          value: 78857,
          color: '#FFBB46'
        }
      ],
    }


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'eCharts- 异步1-带Loading'
    })
    this.initChartsData()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setTimeout(() => {
      this.requestData()
    }, 500);
  },
  //初始化
  initChartsData() {
    var chartData = {
      yData: [],
      seriesData: []
    };
    this.init_echarts1(chartData)
  },
  //假装请求网络
  requestData() {
    var that = this
    barChart.showLoading()
    setTimeout(() => {
      var chartData = {
        yData: ['城市1', '城市2', '城市3', '城市4', '城市5',
          '城市6', '城市7', '城市8', '城市9', '城市10', '城市11', '城市12',
          '城市13', '城市14', '城市15', '城市16', '城市17', '城市18'
        ],
        seriesData: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80]
      };
      barChart.setOption(that.getBarOption1(chartData), true);
      barChart.hideLoading()
    }, 1500);
  },

  init_echarts1: function (chartData) {
    this.chart1Componnet = this.selectComponent('#mychart1');
    this.chart1Componnet.init((canvas, width, height, dpr) => {
      barChart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      barChart.setOption(this.getBarOption1(chartData), true);
      return barChart;
    });
  },
  //柱状图配置
  getBarOption1: function (chartData) {
    var option = {
      color: ['#3E92EF'],
      // title: {
      //   text: '未脱贫人口分布情况',
      //   subtext: '数据来自网络'
      // },
      tooltip: {},
      grid: {
        top: "3%",
        left: '3%',
        right: '6%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        name: '人数(人)',
        type: 'value',
        nameLocation: "middle",
        nameGap: 20,
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        },
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        },
        data: chartData.yData
      },
      series: [{
        type: 'bar',
        barWidth: 20,
        data: chartData.seriesData,
        label: {
          normal: {
            fontSize: 10,
            show: true,
            position: 'right',
          }
        },
        itemStyle: {
          normal: {
            barBorderRadius: [0, 15, 15, 0],
            color: new echarts.graphic.LinearGradient(
              1, 0, 0, 0,
              [{
                  offset: 0.5,
                  color: '#3F90EF'
                },
                {
                  offset: 0.9,
                  color: '#00D0E6'
                },
              ]
            )
          }
        },
      }]
    }
    return option
  },

});