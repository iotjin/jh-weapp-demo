// 月日 周 时分 选择器
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示选择器
    isShowPicker: {
      type: Boolean,
      value: false,
    },
    // title
    title: {
      type: String,
      value: '请选择时间',
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    columns: [],
    pickerDateValueArr: [], //对应的年月日数组
    pickerDateTextArr: [], //月周数组 x月xx日 周几 或今天
    pickerHourTextArr: [], //小时数组  08
    pickerMinuteTextArr: [], //分钟数组  24
    pickerSelectIndexArr: [], //选中的index数组
    pickerSelectText: '' //选中的时间
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //获取选中的时间
    getTime: function () {
      let ss = new Date().getSeconds();
      if (ss < 10) {
        ss = '0' + ss;
      }
      let time = this.data.pickerSelectText + ':' + ss;
      return time;
    },
    //显示Picker
    showPicker: function () {
      this.setData({
        isShowPicker: true
      });
    },
    //隐藏Picker
    hiddenPicker: function () {
      this.setData({
        isShowPicker: false
      });
    },

    //将要弹出popView
    willShowPopView: function (event) {
      let day = this.data.pickerDateTextArr.indexOf("今天");
      let hour = new Date().getHours();
      let minute = new Date().getMinutes();
      var that = this;
      setTimeout(function () {
        //要延时执行的代码
        that.setData({
          pickerSelectIndexArr: [day, hour, minute]
        })
      }, 300)
    },
    addDatetimeZero: function (num) {
      return new Array(2 - num.toString().length + 1).join("0") + num;
    },
    //点击取消按钮
    cancel: function (event) {
      this.setData({
        isShowPicker: false
      });
    },
    //滚动
    onChange: function (event) {
      let value = event.detail.value;
      // console.log("滚动"+value);
      this.setData({
        pickerSelectIndexArr: [value[0], value[1], value[2]]
      })
    },
    //点击确定按钮
    confirm: function (event) {
      let indexArr = this.data.pickerSelectIndexArr;
      var selectText = this.data.pickerDateValueArr[indexArr[0]] + ' ' + this.data.pickerHourTextArr[indexArr[1]] + ':' + this.data.pickerMinuteTextArr[indexArr[2]];
      // console.log("点击确定按钮 -- " + selectText);
      this.setData({
        pickerSelectText: selectText,
        isShowPicker: false
      });
      //传递选中的时间
      let ss = new Date().getSeconds();
      if (ss < 10) {
        ss = '0' + ss;
      }
      let time = selectText + ':' + ss;
      let timeStamp = this.Jh_convertTimeStamp(time)
      this.triggerEvent('confirm', {
        time: time,
        timeStamp: timeStamp
      });
    },
    /** 
     * 将某个时间转化成时间戳  
     * 时间格式：2019-05-20 00:00:00 或 2019年5月1日 00:00:00 
     * 返回值：1556640000000，13位时间戳 
     */
    Jh_convertTimeStamp(time) {
      //用正则主要是把“2019-05-20 00:00:00”转换成“2019/05/20 00:00:00”兼容ios 
      let newTime = time.replace(/-/g, '/');
      newTime = newTime.replace(/年/g, '/');
      newTime = newTime.replace(/月/g, '/');
      newTime = newTime.replace(/日/g, '');
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
        newTime = newTime + ':00'
      }
      return Date.parse(newTime)
    },

  },

  lifetimes: {
    detached: function () {
      // 页面销毁时执行
      // console.info('---JhTimePicker unloaded!---')
    },

    attached: function () {
      // 页面创建时执行
      // console.info('---JhTimePicker loaded!---');
      var pickerDateTextArr = [];
      var pickerHourTextArr = [];
      var pickerMinuteTextArr = [];
      var pickerDateValueArr = [];
      //初始时间
      var pickerPreDate = new Date();
      var pickerPreYear = pickerPreDate.getFullYear();
      var pickerPreMonth = pickerPreDate.getMonth() + 1;
      var pickerPreDay = pickerPreDate.getDate();
      var pickerPreHour = pickerPreDate.getHours();
      var pickerPreMinute = pickerPreDate.getMinutes();

      this.data.pickerSelectText = pickerPreYear + '年' + pickerPreMonth + '月' + pickerPreDay + '日 ' + this.addDatetimeZero(pickerPreHour) + ':' + this.addDatetimeZero(pickerPreMinute);

      var pickerNowDate = new Date();
      var pickerNowYear = pickerNowDate.getFullYear();
      var pickerNowHour = pickerNowDate.getHours();
      var pickerNowMinute = pickerNowDate.getMinutes();
      var pickerOldYearDate = new Date(pickerNowYear - 1, 2, 0);
      var pickerOldYearDayNum = 365;
      if (pickerOldYearDate.getDate() == 29) pickerOldYearDayNum = 366;
      var pickerNowMonth = pickerNowDate.getMonth() + 1;
      var pickerNowDay = pickerNowDate.getDate();
      var pickerWeekArr = ["日", "一", "二", "三", "四", "五", "六"];
      var pickerDateIndex = 0;
      var pickerHourIndex = 0;
      var pickerMinuteIndex = 0;
      //获取年月日选择数组
      for (let y = pickerNowYear - 1; y <= pickerNowYear + 1; y++) {
        for (let m = 1; m <= 12; m++) {
          let newDate = new Date(y, m, 0);
          let m_days = newDate.getDate();
          for (let d = 1; d <= m_days; d++) {
            let newDate = new Date(y, m - 1, d);
            let w = pickerWeekArr[newDate.getDay()];

            if (d == pickerPreDay && m == pickerPreMonth && y == pickerPreYear) {
              pickerDateIndex = parseInt((new Date(y + '/' + m + '/' + d) - new Date((pickerNowYear - 1) + '/1/1')) / 1000 / 60 / 60 / 24);

            }
            if (d == pickerNowDay && m == pickerNowMonth && y == pickerNowYear) {
              pickerDateTextArr.push('今天');
            } else {
              pickerDateTextArr.push(m + '月' + d + '日 周' + w);
            }
            pickerDateValueArr.push(y + '年' + m + '月' + d + '日');
          }
        }
      }
      //获取小时和分钟的数组，设置默认值
      for (let i = 0; i < 24; i++) {
        pickerHourTextArr.push(this.addDatetimeZero(i));
        if (pickerNowHour == i) pickerHourIndex = i;
      }
      for (let i = 0; i < 60; i++) {
        pickerMinuteTextArr.push(this.addDatetimeZero(i));
        if (pickerNowMinute == i) pickerMinuteIndex = i;
      }
      //赋值
      this.setData({
        pickerDateValueArr: pickerDateValueArr,
        pickerDateTextArr: pickerDateTextArr,
        pickerHourTextArr: pickerHourTextArr,
        pickerMinuteTextArr: pickerMinuteTextArr,
        pickerSelectIndexArr: [pickerDateIndex, pickerHourIndex, pickerMinuteIndex]
      })
    },

  }

})


/*
使用方法 ：
1. usingComponents 添加
     "time-picker": "../../components/time-picker/index"
     "time-picker": "components/time-picker/index",

2. wxml 添加组件

//根据属性 弹出
<time-picker isShowPicker='{{isShowPicker2}}' title="请选择时间" bind:confirm='confirm1'> </time-picker>

  this.setData({
    isShowPicker2: true,
  });

//根据方法 弹出
<time-picker id='timePicker2' bind:confirm='confirm2'> </time-picker>

var picker = this.selectComponent('#timePicker2');
picker.showPicker();

3.点击事件

  //点击选择器的 确定
  confirm1: function (event){
    console.log(event.detail);
    this.setData({
      currentDateStr1: event.detail.time,
    });
  },

  confirm2: function (event) {
    const picker = this.selectComponent('#timePicker2');
    this.setData({
      currentDateStr2: picker.getTime(),
    });
  },


*/