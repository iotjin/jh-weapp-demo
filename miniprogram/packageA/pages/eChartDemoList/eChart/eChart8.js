import * as echarts from '../../../ec-canvas/echarts';
const app = getApp();
let myChart1 = null;
let myChart2 = null;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec1: {
      lazyLoad: true
    },
    ec2: {
      lazyLoad: true
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: 'eChart- x轴换行'
    })
    this.requestData()
  },

  requestData() {
    var chartData = {
      xData: ['1千(含)元以下', '1-2千(含)元', '2-3.4千(含)元', '3.4-4千(含)元', '4千元以上'],
      seriesData: [20, 295, 5217, 6025, 146266]
    };
    this.init_echarts1(chartData)
    this.init_echarts2(chartData)

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
  //柱状图
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
  getChart1Option: function (chartData) {
    var option = {
      color: ['#3E92EF'],
      tooltip: {},
      grid: {
        top: "5%",
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        data: chartData.xData,
        type: 'category',
        axisTick: {
          show: false
        },
        boundaryGap: [0, 0.1],
        //x轴换行
        axisLabel: {
          interval: 0, //0：全部显示，1：间隔为1显示对应类目
          formatter: function (value, index) {
            var num = 5; //每行显示字数 
            if (index == 1) {
              num = 4
            }
            if (index == 2 || index == 3) {
              num = 6
            }
            var str = "";
            var valLength = value.length; //该项x轴字数  
            var rowNum = Math.ceil(valLength / num); // 行数  
            if (rowNum > 1) {
              for (var i = 0; i < rowNum; i++) {
                var temp = "";
                var start = i * num;
                var end = start + num;
                temp = value.substring(start, end) + "\n";
                str += temp;
              }
              return str;
            } else {
              return value;
            }
          }
        },
        //竖排展示
        // axisLabel: {
        //   formatter: function (value) {
        //     return value.split("").join("\n");
        //   }
        // }
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

  getChart2Option: function (chartData) {
    var option = {
      color: ['#3E92EF'],
      tooltip: {},
      grid: {
        top: "5%",
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        data: chartData.xData,
        type: 'category',
        axisTick: {
          show: false
        },
        boundaryGap: [0, 0.1],
        //x轴旋转
        axisLabel: {
          interval: 0, //隔几项显示一个标签
          rotate: "45" //标签倾斜的角度，旋转的角度是-90到90度
        }
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
});