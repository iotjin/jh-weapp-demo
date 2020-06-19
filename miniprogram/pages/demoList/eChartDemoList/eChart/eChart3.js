import * as echarts from '../../../../Third/ec-canvas/echarts';

let chart = null;

// 指定图表的配置项和数据
var option1 = {
  title: {
    text: 'ECharts-柱状图',
    subtext: 'subtext',
    left: 'left'
  },
  //提示
  // tooltip: {
  // trigger: 'item',
  // // formatter: '{a} <br/>{b} : {c} ({d}%)'
  // },
  //图例
  legend: {
    type: 'scroll',
    orient: 'vertical',
    right: 10,
    top: 20,
    bottom: 20,
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "袜子"],
    // selected: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
  },

  // xAxis: {
  //      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  // },
  // yAxis: {},
  series: [{
    // name: '贸易',
    type: 'pie',
    center: ['40%', '50%'], //圆心坐标
    radius: '55%', //饼图的半径
    data: [
      //  {value: 1, name: '直达', selected: true},
      {
        value: 20,
        name: '衬衫'
      },
      {
        value: 5,
        name: '羊毛衫'
      },
      {
        value: 12,
        name: '裤子'
      },
      {
        value: 86,
        name: '羊毛衫'
      },
      {
        value: 20,
        name: '袜子'
      }
    ],
    // labelLine: {
    //    show: false
    // },
    //  label: {
    //     show: false,
    //     position: 'center'
    // },
    emphasis: {
      //地图区域的多边形 图形样式
      itemStyle: {
        shadowBlur: 10, //图形阴影的模糊大小
        shadowOffsetX: 0, //阴影垂直方向上的偏移距离
        shadowColor: 'rgba(0, 0, 0, 0.5)' //阴影颜色
      }
    }
  }]
};

// 指定图表的配置项和数据
var option2 = {
  title: {
    text: 'ECharts-柱状图',
    subtext: 'subtext',
    left: 'left'
  },
  //提示
  // tooltip: {
  // trigger: 'item',
  // // formatter: '{a} <br/>{b} : {c} ({d}%)'
  // },
  //图例
  legend: {
    orient: 'vertical',
    type: 'scroll',
    right: 10,
    top: 'middle',
    data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
  },
  series: [{
    // name: '访问来源',
    type: 'pie',

    //图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
    //除此之外也可以设成 'single' 或者 'multiple' 使用单选或者多选模式。

    //  selectedMode: 'single',

    center: ['40%', '50%'], //圆心坐标
    radius: '55%', //饼图的半径
    label: {
      show: true,
      position: 'inner'
    },
    labelLine: {
      show: false
    },
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    },
    data: [
      //  {value: 1, name: '直达', selected: true},
      {
        value: 20,
        name: '其他'
      },
      {
        value: 12,
        name: '营销广告'
      },
      {
        value: 12,
        name: '搜索引擎'
      }
    ]
  }, ]
};

// 指定图表的配置项和数据
var option3 = {
  title: {
    text: 'ECharts-柱状图',
    subtext: 'subtext',
    left: 'right'
  },
  //提示
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {d}%'
  },
  legend: {
    orient: 'vertical',
    left: 10,
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
  },
  // 设置环形中间的数据。默认center为中间，如果图表位置变化了，中间文字是不变的。
  graphic: [{
    type: 'text',
    left: 'center',
    top: '45%',
    style: {
      fill: '#686868',
      text: '总数'
    }
  }, {
    type: 'text',
    left: 'center',
    top: '50%',
    z: 10,
    style: {
      text: '3231',
      fontSize:'30px'
    }
  }],
  series: [{
    name: '访问来源',
    type: 'pie',
    center: ['50%', '50%'], //圆心坐标
    radius: ['40%', '60%'],
    avoidLabelOverlap: false, //避免标注重叠
    labelLine: {//设置延长线的长度
      normal: {
          length: 3,//设置延长线的长度
          length2: 5,//设置第二段延长线的长度
      }
  },
  label: {
    normal: {
      show: true,
      // formatter: function (argument) {
      //   var html;
      //   html = '中心文字\r\n\r\n' + '100%';
      //   return html;
      // },
      // textStyle: {
      //   fontSize: 15,
      //   color: '#39CCCC'
      // }
    }
  },
    data: [{
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
    ]
  }]
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec1: {
      onInit: function (canvas, width, height, dpr) {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        canvas.setChart(chart);
        chart.setOption(option1);
        return chart;
      }
    },
    ec2: {
      onInit: function (canvas, width, height, dpr) {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        canvas.setChart(chart);
        chart.setOption(option2);
        return chart;
      }
    },
    ec3: {
      onInit: function (canvas, width, height, dpr) {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        canvas.setChart(chart);
        chart.setOption(option3);
        return chart;
      }
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'eChart- 多个'
    })
  },
})