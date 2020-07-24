var JhTime = require('../../../../utils/timeUtils.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowTimePicker: false,
    isShowTimePicker2: false,
    isShowTimePicker3: false,
    isShowTimePicker4: false,
    isShowTimePicker5: false,
    currentDateStr: JhTime.Jh_timeStampToTime(new Date().getTime(), '{y}年{m}月{d}日 {h}:{i}:{s}'),
    currentDate: new Date().getTime(),
    minDate:new Date().getTime(),
    maxDate:new Date().getTime(),

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'JhYMDTimePicker'
    })
  },

  //点击时间 弹出时间选择器
  ClickTimeBtn: function (event) {
    this.setData({ isShowTimePicker: true });
  },
  ClickTimeBtn2: function (event) {
    this.setData({ isShowTimePicker2: true });
  },
  ClickTimeBtn3: function (event) {
    this.setData({ isShowTimePicker3: true });
  },
  ClickTimeBtn4: function (event) {
    this.setData({ isShowTimePicker4: true });
  },
  ClickTimeBtn5: function (event) {
    this.setData({ isShowTimePicker5: true });
  },

  //点击选择器的 确定
  onConfirm(event) {

    let time = JhTime.Jh_timeStampToTime(event.detail, '{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}');
    console.log("点击确定 选择的时间 - " + time);

    this.setData({
      currentDate: event.detail,
      currentDateStr: time
    });
    // this.setData({ isShowTimePicker: false });
  },



})