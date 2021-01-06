import * as echarts from '../../../ec-canvas/echarts';
const app = getApp();
let myChart1 = null;
let myChart2 = null;
let myChart3 = null;
let myChart4 = null;

Page({
  data: {
    CustomBarHeight: app.globalData.CustomBar,
    ec1: {
      lazyLoad: true
    },
    ec2: {
      lazyLoad: true
    },
    ec3: {
      lazyLoad: true
    },
    ec4: {
      lazyLoad: true
    },
    dic: {
      blue: {
        value: 8066,
        percentage: '5.11%',
      },
      yellow: {
        value: 124086,
        percentage: '78.62%',
      },
      red: {
        value: 20714,
        percentage: '13.13%',
      },
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: 'eCharts- 异步多个2'
    })
    this.requestData()
  },

  requestData() {

    var dataArr1 = [{
        value: 8000,
        name: '低于30(含)%'
      },
      {
        value: 5000,
        name: '30%-40(含)%'
      },
      {
        value: 6000,
        name: '40%-50(含)%'
      },
      {
        value: 7000,
        name: '50%-60(含)%'
      },
      {
        value: 20000,
        name: '60%以上'
      }
    ]
    var yData = [];
    var seriesData = [];
    dataArr1.forEach(item => {
      yData.push(item.name)
      seriesData.push(item.value)
    });
    // var chartData1 = {
    //   yData: ['低于30(含)%', '30%-40(含)%', '40%-50(含)%', '50%-60(含)%', '60%以上'],
    //   seriesData: [8000, 5000, 6000, 7000, 20000]
    // };

    var chartData1 = {
      yData: yData,
      seriesData: seriesData
    };

    this.init_echarts1(chartData1)

    var dataArr2 = [{
        value: 335,
        name: '低于30(含)%'
      },
      {
        value: 310,
        name: '30%-40(含)%'
      },
      {
        value: 234,
        name: '40%-50(含)%'
      },
      {
        value: 135,
        name: '50%-60(含)%'
      },
      {
        value: 1548,
        name: '60%以上'
      }
    ];
    var chartData2 = {
      legendData: ['低于30(含)%', '30%-40(含)%', '40%-50(含)%', '50%-60(含)%', '60%以上'],
      seriesData: dataArr2
    };
    this.init_echarts2(chartData2)

    var chartData3 = {
      yData: ['1k以下', '1-2k', '2-3.4k', '3.4-4k', '4k以上'],
      seriesData: [20, 295, 5217, 6025, 146266]
    };
    this.init_echarts3(chartData3)


    var dataArr4 = [{
        value: 335,
        name: '1k以下'
      },
      {
        value: 310,
        name: '1-2k'
      },
      {
        value: 234,
        name: '2-3.4k'
      },
      {
        value: 135,
        name: '3.4-4k'
      },
      {
        value: 1548,
        name: '4k以上'
      }
    ];
    var chartData4 = {
      legendData: ['1k以下', '1-2k', '2-3.4k', '3.4-4k', '4k以上'],
      seriesData: dataArr4
    };

    this.init_echarts4(chartData4)

  },

  //柱状图
  init_echarts1: function (chartData) {
    this.chart1Componnet = this.selectComponent('#mychart1');
    this.chart1Componnet.init((canvas, width, height, dpr) => {
      myChart1 = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      myChart1.setOption(this.getChart1Option(chartData));
      return myChart1;
    });
  },
  //饼图
  init_echarts2: function (chartData) {
    this.chart2Componnet = this.selectComponent('#mychart2');
    this.chart2Componnet.init((canvas, width, height, dpr) => {
      myChart2 = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      myChart2.setOption(this.getChart2Option(chartData));
      return myChart2;
    });
  },
  //柱状图
  init_echarts3: function (chartData) {
    this.chart3Componnet = this.selectComponent('#mychart3');
    this.chart3Componnet.init((canvas, width, height, dpr) => {
      myChart3 = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      myChart3.setOption(this.getChart3Option(chartData));
      return myChart3;
    });
  },
  //饼图
  init_echarts4: function (chartData) {
    this.chart4Componnet = this.selectComponent('#mychart4');
    this.chart4Componnet.init((canvas, width, height, dpr) => {
      myChart4 = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      myChart4.setOption(this.getChart4Option(chartData));
      return myChart4;
    });
  },
  getChart1Option: function (chartData) {
    var option = {
      color: ['#3E92EF'],
      tooltip: {},
      grid: {
        top: "3%",
        left: '3%',
        right: '8%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        name: '',
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
          color: '#666',
          fontSize: 10
        },
        data: chartData.yData
      },
      series: [{
        type: 'bar',
        data: chartData.seriesData,
        barWidth: 20,
        label: {
          normal: {
            fontSize: 10,
            show: true,
            position: 'right',
          }
        },
        itemStyle: {
          normal: {
            // barBorderRadius: [0, 15, 15, 0],
            color: new echarts.graphic.LinearGradient(
              1, 0, 0, 0,
              [{
                  offset: 0,
                  color: '#F878AD'
                },
                {
                  offset: 1,
                  color: '#EDBA96'
                }
              ]
            )
          }
        },
      }]
    }
    return option
  },
  getChart2Option: function (chartData) {
    var option = {
      backgroundColor: "#ffffff",
      color: ["#37A2DA", "#FFDB5C", "#FF9F7F", "#32C5E9", "#67E0E3", "#91F2DE"],
      tooltip: {},
      series: [{
        label: {
          normal: {
            show: true,
            fontSize: 10,
          },
        },
        labelLine: {
          normal: {
            length: 3,
            length2: 5,
          }
        },
        type: 'pie',
        center: ['45%', '52%'],
        radius: ['28%', '55%'],
        data: chartData.seriesData
      }],
    };
    return option;
  },
  getChart3Option: function (chartData) {
    var option = {
      color: ['#3E92EF'],
      // title: {
      //   text: '未脱贫人口分布情况',
      //   subtext: '数据来自网络'
      // },
      tooltip: {},
      grid: {
        top: "5%",
        left: '3%',
        right: '8%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        axisTick: {
          show: false
        },
        boundaryGap: [0, 0.2],
        data: chartData.yData
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, 0.2],
      },
      series: [{
        data: chartData.seriesData,
        type: 'bar',
        barWidth: 20,
        label: {
          normal: {
            show: true,
            position: 'top',
            fontSize: 10,

          }
        },
        itemStyle: {
          normal: {
            // barBorderRadius: [15, 15, 0, 0],
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
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
    };
    return option
  },
  getChart4Option: function (chartData) {
    var option = {
      backgroundColor: "#ffffff",
      color: ["#37A2DA", "#FFDB5C", "#FF9F7F", "#32C5E9", "#67E0E3", "#91F2DE"],
      // tooltip: {},
      tooltip: {
        trigger: 'item',
        formatter: '{a}\n{b}:{c}({d}%)'
      },
      series: [{
        label: {
          normal: {
            show: true,
            fontSize: 10,
            formatter: '{b}\n{c}个\n({d}%)',
          },
        },
        labelLine: {
          normal: {
            length: 3,
            length2: 5,
          }
        },
        type: 'pie',
        name:'name',
        center: ['45%', '52%'],
        radius: ['28%', '55%'],
        data: chartData.seriesData
      }],
    };
    return option;
  },
});