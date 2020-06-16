var JhTime = require('../../../../utils/timeUtils.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowTimeView: false,

    // minDate: new Date(1900, 1, 1).getTime(),
    currentDateStr: JhTime.Jh_timeStampToTime(new Date().getTime(), '{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}'),
    currentDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      } else if (type === 'day') {
        return `${value}日`;
      } else if (type === 'hour') {
        return `${value}时`;
      } else if (type === 'minute') {
        return `${value}分`;
      }
      return value;
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'vant 时间选择器'
    })
  },

  //点击时间 弹出时间选择器
  ClickTimeBtn: function (event) {
    console.log("点击时间 弹出时间选择器 - ");

    this.setData({
      currentDate: new Date().getTime(),
    });
    this.setData({ isShowTimeView: true });
  },
  //关闭 时间选择器
  onCloseTimeView: function (event) {
    console.log("关闭 时间选择器 - ");
    this.setData({ isShowTimeView: false });
  },
  //点击选择器的 确定
  ClickTimeViewOkBtn(event) {
    console.log("点击确定 选择的时间 - " + JSON.stringify(event));
    let time = JhTime.Jh_timeStampToTime(event.detail, '{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}');

    console.log("点击确定 选择的时间 - " + time);

    this.setData({
      currentDate: event.detail,
      currentDateStr: time
    });
    this.setData({ isShowTimeView: false });
  },



})