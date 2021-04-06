// 左右日期切换
var TimeUtils = require('../../utils/timeUtils.js');

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height: { //高度，默认60rpx
      type: Number,
      value: 60,
    },
    bgColor: { //背景色
      type: String,
      value: '#4252DD',
    },
    disabledPrev: { //左按钮禁用
      type: Boolean,
      value: false,
    },
    disabledNext: { //右按钮禁用
      type: Boolean,
      value: false,
    },
    hiddenArrow: { //隐藏箭头
      type: Boolean,
      value: false,
    },
    /* 时间类型
    | year              eg: 2020年  
    | yearMonth         eg: 2020年5月  
    */
    timeType: {
      type: String,
      value: 'yearMonth',
    },
    text: { //自定义文字
      type: String,
      value: '',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    centerText: ''
  },
  lifetimes: {
    detached: function () {},
    attached: function () {
      var timeType = this.properties.timeType
      var centerText = ''
      if (this.properties.text.length) {
        centerText = this.properties.text
        this.setData({
          centerText: centerText
        })
        return
      }
      if (timeType == 'year') {
        centerText = TimeUtils.Jh_timeStampToTime(new Date().getTime(), '{y}年');
      }
      if (timeType == 'yearMonth') {
        centerText = TimeUtils.Jh_timeStampToTime(new Date().getTime(), '{y}年{m}月');
      }
      this.setData({
        centerText: centerText
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onClickPrevBtn() {
      if (this.properties.disabledPrev || this.properties.text.length) return
      var timeType = this.properties.timeType
      var centerText = ''
      if (timeType == 'year') {
        centerText = TimeUtils.Jh_getPrevYear(this.data.centerText);
      }
      if (timeType == 'yearMonth') {
        centerText = TimeUtils.Jh_getPrevYearMonth(this.data.centerText);
      }
      this.setData({
        centerText: centerText
      })
      this.triggerEvent('clickPrevBtn', this.data.centerText);
    },
    onClickNextBtn() {
      if (this.properties.disabledNext || this.properties.text.length) return
      var timeType = this.properties.timeType
      var centerText = ''
      if (timeType == 'year') {
        centerText = TimeUtils.Jh_getNextYear(this.data.centerText);
      }
      if (timeType == 'yearMonth') {
        centerText = TimeUtils.Jh_getNextYearMonth(this.data.centerText);
      }
      this.setData({
        centerText: centerText
      })
      this.triggerEvent('clickNextBtn', this.data.centerText);
    },
    onClickText() {
      this.triggerEvent('clickText', this.data.centerText);
    }
  }
})