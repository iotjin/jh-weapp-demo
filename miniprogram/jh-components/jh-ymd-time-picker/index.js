// 年月日 - 时间选择器

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    isShow: {
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
    // title
    title: {
      type: String,
      value: '请选择时间',
    },
    confirmText: {
      type: String,
      value: '确定',
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
      console.info('---jh-ymd-time-picker loaded!---')
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
      console.info('---jh-ymd-time-picker unloaded!---')
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //显示Picker
    showPicker: function () {
      this.setData({
        isShow: true
      });
    },
    //隐藏Picker
    hiddenPicker: function () {
      this.setData({
        isShow: false
      });
    },
    //将要弹出Picker
    willShowPicker: function (event) {},
    //点击选择器确定按钮
    onConfirm: function (event) {
      this.setData({
        isShow: false
      });
      this.triggerEvent('confirm', event.detail)
    },
    //点击取消
    onCancel: function () {
      this.setData({
        isShow: false
      });
    },
    /**
     * 将某个格式时间转化成13位时间戳，支持："-"、"/"、"."
     * @param time 2019(年) | 2019年2月 | 2019年02月02日 | 2019年2月2日 00:00:00 | 2019-2 | 2019-02 | 2019-2-2 | 2019-02-02 | 2019-02-02 00:00:00
     * @return 1556640000000
     */
    Jh_convertTimeStamp(time) {
      //用正则主要是把“2019-05-20 00:00:00”转换成“2019/05/20 00:00:00”兼容ios
      let newTime = time.replace(/-/g, '/');
      newTime = newTime.replace(/\./g, '/')
      newTime = newTime.replace(/年/g, '/');
      newTime = newTime.replace(/月/g, '/');
      newTime = newTime.replace(/日/g, '');
      if (newTime.length == 5) { // 处理2019年
        newTime = newTime.substring(0, 4)
      }
      return Date.parse(newTime)
    },
  }
})


/*
使用方法 ：
1. usingComponents 添加
     "jh-ymd-time-picker": "../../jh-components/jh-ymd-time-picker/index"

2. wxml 添加组件
<jh-ymd-time-picker isShow='{{isShowTimePicker}}' selectTime="2020-06" timeType="ym" bind:confirm="onConfirm">
</jh-ymd-time-picker>

<jh-ymd-time-picker isShow='{{isShowTimePicker}}' selectTime="2020-02-02" maxDate="{{maxDate}}" bind:confirm="onConfirm">
</jh-ymd-time-picker>


3.点击事件
  //点击选择器的 确定
  onConfirm(event) {
    let time = TimeUtils.Jh_timeStampToTime(event.detail, '{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}');
    console.log("点击确定 选择的时间 - " + time);
  },


*/