const TimeUtils = require('../../../../utils/timeUtils.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowYMDTimePicker: false,
    isShowYMDTimePicker2: false,
    isShowYMDTimePicker3: false,
    isShowYMDTimePicker4: false,
    isShowYMDTimePicker5: false,
    minDate: new Date().getTime(),
    maxDate: new Date().getTime(),
    timeStamp: new Date().getTime(),
    timeText: TimeUtils.Jh_timeStampToTime(new Date().getTime(), '{y}年{m}月{d}日 {h}:{i}:{s}'),

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //点击时间 弹出时间选择器
  ClickTimeBtn: function (event) {
    this.setData({
      isShowYMDTimePicker: true
    });
  },
  ClickTimeBtn2: function (event) {
    this.setData({
      isShowYMDTimePicker2: true
    });
  },
  ClickTimeBtn3: function (event) {
    this.setData({
      isShowYMDTimePicker3: true
    });
  },
  ClickTimeBtn4: function (event) {
    this.setData({
      isShowYMDTimePicker4: true
    });
  },
  ClickTimeBtn5: function (event) {
    this.setData({
      isShowYMDTimePicker5: true
    });
  },

  //点击选择器的 确定
  onConfirm(event) {

    let time = TimeUtils.Jh_timeStampToTime(event.detail, '{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}');
    console.log("点击确定 选择的时间 - " + time);

    this.setData({
      timeStamp: event.detail,
      timeText: time
    });
    // this.setData({ isShowYMDTimePicker: false });
  },



})