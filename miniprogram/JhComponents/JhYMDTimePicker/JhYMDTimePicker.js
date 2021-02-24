// 时间选择器

/*
使用方法 ：
1. usingComponents 添加
     "JhYMTimePicker": "../../JhComponents/JhYMTimePicker/JhYMTimePicker"

2. wxml 添加组件
<JhYMDTimePicker isShowTimePicker='{{isShowTimePicker2}}' selectTime="2020-06" timeType="ym" bind:onConfirm="onConfirm">
</JhYMDTimePicker>

<JhYMDTimePicker isShowTimePicker='{{isShowTimePicker5}}' selectTime="2020-02-02" maxDate="{{maxDate}}" bind:onConfirm="onConfirm">
</JhYMDTimePicker>


3.点击事件
  //点击选择器的 确定
  onConfirm(event) {
    let time = JhTime.Jh_timeStampToTime(event.detail, '{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}');
    console.log("点击确定 选择的时间 - " + time);
  },


*/


Component({
  /**
   * 组件的属性列表
   */
  properties: {

    isShowTimePicker: {
      type: Boolean,
      value: false
    },
    //选择器类型 ymd, ym, all(年月日时分)
    timeType: {
      type: String,
      value: 'ymd'
    },
    //选中的时间
    selectTime: {
      type: String,
      value: ''
    },
    //选中的时间
    selectTime: {
      type: String,
      value: ''
    },
    minDate: {
      type: Number,
      value: 0,
    },
    maxDate: {
      type: Number,
      value: 0
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
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
    // currentDate: new Date().getTime(),
    currentDate: '',
    type: ''
  },

  lifetimes: {

    attached: function () {
      // 页面创建时执行
      console.info('---YHDTimePicker loaded!---')
      var typeStr = ''
      if (this.data.timeType == "all") {
        typeStr = 'datetime'
      }
      if (this.data.timeType == "ym") {
        typeStr = 'year-month'
      }
      if (this.data.timeType == "ymd") {
        typeStr = 'date'
      }
      if (this.data.selectTime) {
        this.setData({
          type: typeStr,
          currentDate: this.Jh_convertTimeStamp(this.data.selectTime)
        })
      } else {
        this.setData({
          type: typeStr,
          currentDate: new Date().getTime()
        })
      }

    },
    detached: function () {
      // 页面销毁时执行
      console.info('---YHDTimePicker unloaded!---')
    },

  },

  /**
   * 组件的方法列表
   */
  methods: {

    //显示PopView
    showTimePicker: function () {
      this.setData({
        isShowTimePicker: true
      });
    },
    //隐藏PopView
    hiddenTimePicker: function () {
      this.setData({
        isShowTimePicker: false
      });
    },
    //将要弹出popView
    willShowPopView: function (event) {},
    //点击选择器确定按钮
    onConfirm: function (event) {
      this.setData({
        isShowTimePicker: false
      });
      this.triggerEvent('onConfirm', event.detail)
    },
    //点击取消
    onCancel: function () {
      this.setData({
        isShowTimePicker: false
      });
    },
    //把 "2019-05-20 00:00:00" 转成 时间戳
    Jh_convertTimeStamp(time) {
      //用正则主要是把“2019-05-20 00:00:00”转换成“2019/05/20 00:00:00”兼容ios
      let newTime = time.replace(/-/g, '/');
      if (newTime.length == 4) {
        newTime = newTime + '/01/01 00:00:00'
      }
      if (newTime.length == 7) {
        newTime = newTime + '/01 00:00:00'
      }
      if (newTime.length == 10) {
        newTime = newTime + ' 00:00:00'
      }
      if (newTime.length == 16) {
        console.log('sadfsdf');
        newTime = newTime + ':00'
      }
      return Date.parse(newTime)
    }

  }
})