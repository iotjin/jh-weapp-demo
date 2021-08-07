import * as echarts from '../../../ec-canvas/echarts';
import geoJson from '../../../ec-canvas/mapData.js';

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
      title: 'eCharts- 中国地图'
    })
    this.requestData()
  },

  requestData() {
    var mapDataArr = [{
        name: "北京",
        value: this.randomData(),
        // selected: true
      },
      {
        name: "天津",
        value: this.randomData(),
      },
      {
        name: "上海",
        value: this.randomData(),
      },
      {
        name: "重庆",
        value: this.randomData(),
      },
      {
        name: "河北",
        value: this.randomData(),
      },
      {
        name: "河南",
        value: this.randomData(),
      },
      {
        name: "云南",
        value: this.randomData(),
      },
      {
        name: "辽宁",
        value: this.randomData(),
      },
      {
        name: "黑龙江",
        value: this.randomData(),
      },
      {
        name: "湖南",
        value: this.randomData(),
      },
      {
        name: "安徽",
        value: this.randomData(),
      },
      {
        name: "山东",
        value: this.randomData(),
      },
      {
        name: "新疆",
        value: this.randomData(),
      },
      {
        name: "江苏",
        value: this.randomData(),
      },
      {
        name: "浙江",
        value: this.randomData(),
      },
      {
        name: "江西",
        value: this.randomData(),
      },
      {
        name: "湖北",
        value: this.randomData(),
      },
      {
        name: "广西",
        value: this.randomData(),
      },
      {
        name: "甘肃",
        value: this.randomData(),
      },
      {
        name: "山西",
        value: this.randomData(),
      },
      {
        name: "内蒙古",
        value: this.randomData(),
      },
      {
        name: "陕西",
        value: this.randomData(),
      },
      {
        name: "吉林",
        value: this.randomData(),
      },
      {
        name: "福建",
        value: this.randomData(),
      },
      {
        name: "贵州",
        value: this.randomData(),
      },
      {
        name: "广东",
        value: this.randomData(),
      },
      {
        name: "青海",
        value: this.randomData(),
      },
      {
        name: "西藏",
        value: this.randomData(),
      },
      {
        name: "四川",
        value: this.randomData(),
      },
      {
        name: "宁夏",
        value: this.randomData(),
      },
      {
        name: "海南",
        value: this.randomData(),
      },
      {
        name: "台湾",
        value: this.randomData(),
      },
      {
        name: "香港",
        value: this.randomData(),
      },
      {
        name: "澳门",
        value: this.randomData(),
      },
      {
        name: '南海诸岛',
        value: this.randomData(),
      }
    ];

    this.init_echarts1(mapDataArr)
    // this.init_echarts2(chartData)

  },
  /**
   * 生成1000以内的随机数
   */
  randomData() {
    return this.createRandomNumber(0, 10000)
  },
  createRandomNumber(begin, end) {
    var num = Math.round(Math.random() * (end - begin) + begin);
    return num;
  },

  //中国地图
  init_echarts1: function (chartData) {
    this.chart1Componnet = this.selectComponent('#mychart1');
    this.chart1Componnet.init((canvas, width, height, dpr) => {
      myChart1 = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      echarts.registerMap('china', geoJson); // 绘制中国地图
      myChart1.setOption(this.getChart1Option(chartData));
      return myChart1;
    });
  },
  //横柱状图
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
      tooltip: {
        trigger: 'item',
        formatter: function (e) {
          // console.log(e)
          var name = e.name ? e.name : '获取中';
          var value = e.value ? e.value : '暂无数据'
          return `${name}:\n人数(万人):${value} `
        }
      },
      // 地理坐标系组件
      geo: [{
        type: "map", //图表类型
        mapType: 'china',
        roam: false, // 可以缩放和平移
        aspectScale: 0.8, // 比例
        layoutCenter: ["50%", "43%"], // position位置
        layoutSize: 340, // 地图大小，保证了不超过 370x370 的区域
        label: {
          // 图形上的文本标签
          normal: {
            show: true,
            textStyle: {
              color: "rgba(0, 0, 0, 0.9)",
              fontSize: '8'
            }
          },
          emphasis: { // 高亮时样式
            color: "#333"
          }
        },
        itemStyle: {
          // 图形上的地图区域
          normal: {
            borderColor: "rgba(0,0,0,0.2)",
            areaColor: "#005dff"
          },
          emphasis: {
            areaColor: "#38BC9D", //鼠标选择区域颜色
            areaColor: 'red',
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 20,
            borderWidth: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        }
      }],
      //图例
      visualMap: {
        type: "piecewise", //类型为分段型。
        splitNumber: 5, //对于连续型数据，自动平均切分成几段。默认为5段。 连续数据的范围需要 max 和 min 来指定。
        pieces: [{
            min: 8000,
            label: ">8000",
            // color: "#FF0000",//里面可以加颜色
          }, // 不指定 max，表示 max 为无限大（Infinity）。
          {
            min: 6000,
            max: 7999,
            label: "6000-7999"
          },
          {
            min: 4000,
            max: 5999,
            label: "4000-5999"
          },
          {
            min: 2000,
            max: 3999,
            label: "2000-3999"
          },
          {
            min: 1,
            max: 1999,
            label: "1-1999"
          }, // 表示 value 等于 123 的情况。
          // {
          //   value: 0,
          //   label: "0"
          // } // 不指定 min，表示 min 为无限大（-Infinity）。
        ],
        textStyle: {
          fontSize: 8
        },
        realtime: false,
        calculable: false,
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered'],
        },
        orient: "horizontal",
        bottom: 10,
        left: 10,
        right: 10,
        itemHeight: 10,
        itemWidth: 8,
      },

      //图例
      // visualMap: {
      //   min: 0,
      //   max: 10000,
      //   left: 'left',
      //   top: 'bottom',
      //   itemWidth: 19,
      //   itemHeight: 60,
      //   text: ['高', '低'], // 文本，默认为数值文本
      //   calculable: true,
      //   // inRange: {
      //   //   color: ['#0055A4', '#007ADE', '#0085EF', '#0D91F9', '#62ADFB']
      //   // },
      // },

      //工具条
      toolbox: {
        show: false,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          dataView: {
            readOnly: false
          },
          restore: {},
          saveAsImage: {}
        }
      },
      series: [{
        name: '报名人数',
        type: 'map', //图表类型
        mapType: 'china',
        // selectedMode: 'multiple',
        label: {
          normal: {
            show: true,
            fontSize: 8,
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            borderColor: '#38BC9D',
            areaColor: '#fff',
          },
          emphasis: {
            areaColor: '#38BC9D',
            borderWidth: 0
          }
        },
        data: chartData
      }]
    };
    return option
  },

})