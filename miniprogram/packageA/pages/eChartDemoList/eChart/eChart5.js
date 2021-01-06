import * as echarts from '../../../ec-canvas/echarts';
let barChart = null;
let pieChart = null;
let barChart2 = null;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ec1: {
      disableTouch: true,
      lazyLoad: true
    },
    ec2: {
      disableTouch: true,
      lazyLoad: true
    },
    ec3: {
      disableTouch: true,
      lazyLoad: true
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: 'eCharts- 异步多个'
    })

    this.getChartTestData()

  },

  //初始化图表
  init_echarts1: function (chartData) {
    this.chart1Componnet = this.selectComponent('#mychart1'); //去获取echarts    这里的id就是echarts的id
    this.chart1Componnet.init((canvas, width, height, dpr) => {
      // 初始化图表 
      barChart = echarts.init(canvas, null, { //echarts会继承父元素的宽高
        width: width,
        height: height,
        devicePixelRatio: dpr // 像素
      });
      barChart.setOption(this.getBarOption1(chartData));
      return barChart; //一定要return出去
    });
  },
  //饼图
  init_echarts2: function (chartData) {
    this.chart2Componnet = this.selectComponent('#mychart2'); //去获取echarts    这里的id就是echarts的id
    this.chart2Componnet.init((canvas, width, height, dpr) => {
      // 初始化图表 
      pieChart = echarts.init(canvas, null, { //echarts会继承父元素的宽高
        width: width,
        height: height,
        devicePixelRatio: dpr // 像素
      });
      pieChart.setOption(this.getPieOption(chartData));
      return pieChart; //一定要return出去
    });
  },
  //柱状图
  init_echarts3: function (chartData) {
    this.chart3Componnet = this.selectComponent('#mychart3'); //去获取echarts    这里的id就是echarts的id
    this.chart3Componnet.init((canvas, width, height, dpr) => {
      // 初始化图表 
      barChart2 = echarts.init(canvas, null, { //echarts会继承父元素的宽高
        width: width,
        height: height,
        devicePixelRatio: dpr // 像素
      });
      barChart2.setOption(this.getBarOption2(chartData));
      return barChart2; //一定要return出去
    });
  },

  //柱状图配置
  getBarOption1: function (chartData) {
    var option = {
      color: ['#3398DB', '#EB5E5E'],
      title: {
        left: 'center',
        text: chartData.title,
      },
      grid: {
        left: '3%',
        right: '2%',
        containLabel: true
      },
      //坐标轴触发，。   'item'  , 'axis' ,'none'
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        bottom: 10,
        data: chartData.legendData
      },
      xAxis: [{
        data: chartData.xData,
        "axisLabel": {
          interval: 0
        }
      }],
      yAxis: {},
      series: chartData.seriesData
    }
    return option
  },
  //饼图配置
  getPieOption: function (chartData) {
    var option = {
      title: {
        left: 'center',
        text: chartData.title,
      },
      //提示
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%'
      },
      // legend: {
      //   orient: 'vertical',
      //   left: 10,
      //   data: chartData.legendData,
      // },
      // 设置环形中间的数据。默认center为中间，如果图表位置变化了，中间文字是不变的。
      graphic: [{
        type: 'text',
        left: 'center',
        top: '45%',
        style: {
          fill: '#686868',
          text: chartData.centerText
        }
      }, {
        type: 'text',
        left: 'center',
        top: '50%',
        z: 10,
        style: {
          // fontSize: '30px',
          text: chartData.centerNum,
        }
      }],
      series: [{
        name: '访问来源',
        type: 'pie',
        minShowLabelAngle: 10, //小于10度不展示
        stillShowZeroSum: true, //数据和为0 显示扇区。
        center: ['50%', '50%'], //圆心坐标
        radius: ['40%', '60%'],
        avoidLabelOverlap: false, //避免标注重叠
        labelLine: { //设置延长线的长度
          normal: {
            length: 3, //设置延长线的长度
            length2: 5, //设置第二段延长线的长度
          }
        },
        label: {
          // normal: {
          //   show: true,
          // }
          // formatter: '{b}: {d}%',
          formatter: '{b|{b}:} {d|{d}%}',
          rich: {
            b: {
              color: '#646464',
              fontSize: 10,
            },
            d: {
              color: '#3398DB',
              fontSize: 12,
            }
          }
        },
        data: chartData.seriesData
      }]
    }
    return option
  },
  //柱状图配置 2
  getBarOption2: function (chartData) {
    var option = {
      color: ['#3398DB', '#EB5E5E'],
      title: {
        left: 'center',
        text: chartData.title,
      },
      grid: {
        left: '3%',
        right: '4%',
        containLabel: true
      },
      //坐标轴触发，。   'item'  , 'axis' ,'none'
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        bottom: 10,
        data: chartData.legendData
      },
      xAxis: [{
        data: chartData.xData
      }],
      yAxis: {},
      series: [{
        type: 'bar',
        label: {
          show: true,
          position: 'top'
        },
        name: chartData.legendData,
        data: chartData.seriesData
      }]
    }
    return option
  },

  //图表假数据
  getChartTestData() {
    var dataArr = [{
        name: '蒸发量',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      },
      {
        name: '降水量',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
      }
    ];
    for (var i = 0; i < dataArr.length; i++) {
      var dic = dataArr[i];
      dic['type'] = 'bar';
      dic['barGap'] = 0;
      // dic['label'] = {
      //   show: true,
      //   position: 'top',
      // }
      dic['itemStyle'] = {
        normal: {
          label: {
            show: true, //开启显示
            position: 'top', //在上方显示
            distance: i == 0 ? 5 : 10,
            // rotate: 15,
            // offset: [20, 0],
            formatter: function (val) {
              if (val.value !== 0) {
                return val.value;
              } else {
                return '';
              }
            },
            textStyle: { //数值样式
              // color: '#1a1a1a',
              fontSize: 10
            }
          },
        }
      }
    }
    var chartData = {
      title: '某地区蒸发量和降水量',
      legendData: ['蒸发量', '降水量'],
      xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      seriesData: dataArr
    };
    this.init_echarts1(chartData)


    var dataArr2 = [{
        value: 335,
        name: '直接访问'
      },
      {
        value: 310,
        name: '邮件营销'
      },
      {
        value: 234,
        name: '联盟广告'
      },
      {
        value: 135,
        name: '视频广告'
      },
      {
        value: 1548,
        name: '搜索引擎'
      }
    ];
    var chartData2 = {
      title: 'ECharts-饼图',
      centerText: '总数',
      centerNum: 3221,
      legendData: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      seriesData: dataArr2
    };
    this.init_echarts2(chartData2)


    var chartData3 = {
      title: '柱状图',
      legendData: ['类型'],
      xData: ['2019', '2020'],
      seriesData: [120, 200]
    };

    this.init_echarts3(chartData3)

  },




})