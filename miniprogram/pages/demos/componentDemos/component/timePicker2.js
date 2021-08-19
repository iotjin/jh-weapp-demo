const TimeUtils = require('../../../../utils/timeUtils.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowPopView2: false,
    currentDateStr1: '',
    currentDateStr2: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },

  onClickTimeBtn1: function () {
    this.setData({
      isShowPopView2: true,
    });
  },

  confirm1: function (event) {
    let dict = event.detail
    console.log(dict.time);
    console.log(dict.timeStamp);
    // 转成需要的格式
    let newTime = TimeUtils.Jh_timeStampToTime(dict.timeStamp, '{y}-{m}-{d} {h}:{i}:{s} 星期{w}')
    console.log(newTime);
    this.setData({
      currentDateStr1: dict.time,
    });
  },

  onClickTimeBtn2: function () {
    var picker = this.selectComponent('#JhTimePicker2');
    picker.showPicker();
  },
  confirm2: function (event) {
    const picker = this.selectComponent('#JhTimePicker2');
    let dict = picker.getTime()
    console.log(dict.time);
    console.log(dict.timeStamp);
    this.setData({
      currentDateStr2: dict.time,
    });
  },

})

// "JhTimePicker": "/jh-components/JhTimePicker/JhTimePicker"