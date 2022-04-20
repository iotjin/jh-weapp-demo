const TimeUtils = require('../../../../utils/timeUtils.js')

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
    isShowTimePicker6: false,
    minTime: TimeUtils.Jh_timeStampToYMD,
    maxTime: TimeUtils.Jh_timeStampToYMD,
    normalSelectTime: '2020/02/03',
    // 选择结果
    time: '',
    timeStamp: '',
    timeObject: '',
    newTime: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 点击时间 弹出时间选择器
  onClickTimeBtn: function (event) {
    this.setData({
      isShowTimePicker: true
    })
  },
  onClickTimeBtn2: function (event) {
    this.setData({
      isShowTimePicker2: true
    })
  },
  onClickTimeBtn3: function (event) {
    this.setData({
      isShowTimePicker3: true
    })
  },
  onClickTimeBtn4: function (event) {
    this.setData({
      isShowTimePicker4: true
    })
  },
  onClickTimeBtn5: function (event) {
    this.setData({
      isShowTimePicker5: true
    })
  },
  onClickTimeBtn6: function (event) {
    this.setData({
      isShowTimePicker6: true
    })
  },
  // 点击选择器的 确定按钮
  onConfirm(e) {
    let dict = e.detail
    console.log(dict)
    this.setData({
      time: dict.time,
      timeStamp: dict.timeStamp,
      timeObject: JSON.stringify(dict.timeObject),
      newTime: TimeUtils.Jh_timeStampToTime(dict.timeStamp, '{y}年{m}月{d}日 {h}:{i}:{s} 周{w}')
    })
  }

})