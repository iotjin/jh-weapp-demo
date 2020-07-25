import * as echarts from '../../../ec-canvas/echarts';
var dataList = [];
var k = 0;
var Chart = null;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      lazyLoad: true // 延迟加载
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: 'eChart- 异步'
    })

    this.echartsComponnet = this.selectComponent('#mychart1');
    this.getData(); //获取数据
  },
  getData: function () {
    /**
     * 此处的操作：
     * 获取数据json
     */
    if (k % 2) {
      dataList = [1, 2, 3, 4, 5, 6];
    } else {
      dataList = [7, 6, 9, 2, 5, 6];
    }
    k++;
    //如果是第一次绘制
    if (!Chart) {
      this.init_echarts(); //初始化图表
    } else {
      this.setOption(Chart); //更新数据
    }
    /*  wx.request({
        url: url, //仅为示例，并非真实的接口地址
        data: data,
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: (res) => {
          dataList = res.data;
          this.init_echarts();//初始化图表
        }
      });  */
  },
  //初始化图表
  init_echarts: function () {
    this.echartsComponnet.init((canvas, width, height,dpr) => {
      // 初始化图表
      Chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      // Chart.setOption(this.getOption());
      this.setOption(Chart);
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
  },
  setOption: function (Chart) {
    Chart.clear(); // 清除
    Chart.setOption(this.getOption()); //获取新数据
  },
  getOption: function () {
    // 指定图表的配置项和数据
    var option = {
      title: {
        left: 'center',
        text: '某地区蒸发量和降水量',
      },
      //坐标轴触发，。   'item'  , 'axis' ,'none'
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        bottom: 10,
        data: ['蒸发量', '降水量']
      },
      xAxis: [{
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      }],
      yAxis: {},
      series: [{
          name: '蒸发量',
          type: 'bar',
          label: {
            show: true,
            position: 'top'
          },
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        },
        {
          name: '降水量',
          type: 'bar',
          label: {
            show: true,
            position: 'top'
          },
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        }
      ]
    }
    return option;
  },

})