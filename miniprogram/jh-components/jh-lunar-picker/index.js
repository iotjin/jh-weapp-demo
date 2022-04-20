// 公农历通用时间选择器
// 支持同步切换，设置默认选中时间、设置最大最小时间(公历范围：1901/01/01 ~ 2100/12/31)、标题栏颜色

const TimeUtils = require('../../utils/timeUtils')
const lunarCalendar = require('../../vendors/calendar')

const isShowLog = false

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示选择器
    isShow: {
      type: Boolean,
      value: false,
    },
    // 是否切换到农历选择器，默认展示公历选择器
    isLunar: {
      type: Boolean,
      value: false,
    },
    cancelText: {
      type: String,
      value: '取消',
    },
    confirmText: {
      type: String,
      value: '确定',
    },
    // 最小时间（公历），支持 1901/01/01 | 1901-01-01 | 1901年01月01日
    minTime: {
      type: String,
      value: '1901/01/01',
    },
    // 最大时间（公历），支持 2100/12/31 | 2100-12-31 | 2100年12月31日
    maxTime: {
      type: String,
      value: '2100/12/31',
    },
    // 默认选择时间，不传默认当天
    selectTime: {
      type: String,
      value: TimeUtils.Jh_timeStampToYMD(),
    },
    // 标题栏主题色
    titleColor: {
      type: String,
      value: '#2F80F2',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    pickerYearArr: [], // 年数组
    pickerMonthArr: [], // 月数组
    pickerDayArr: [], // 天数组
    pickerSelectIndexArr: [], // 选中的index数组
    pickerSelectTime: '', // 记录选择的时间(公历)，格式：1900/01/01
    pickerIsLunar: false,
    titleActive: 0,
    isUpdateIndex: false,
    isAutoUpdateIndex: false,
  },

  lifetimes: {
    detached: function () {
      // 页面销毁时执行
      // console.info('---JhLunarPicker unloaded!---')
    },
    attached: function () {
      // 页面创建时执行
      // console.info('---JhLunarPicker loaded!---')
    },
    ready: function () {
      this.initData()
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 初始化和切换公农历更新数据
    initData(isUpdate) {
      this.Jh_log('初始化和切换公农历更新数据')
      if (!isUpdate) {
        this.setData({
          pickerIsLunar: this.properties.isLunar,
          titleActive: this.properties.isLunar ? 1 : 0,
          pickerSelectTime: this.properties.selectTime
        })
      }
      // 根据选中的公历时间更新公农历
      let timeObj = TimeUtils.Jh_getYearMonthDayObj(this.data.pickerSelectTime)
      this.Jh_log('选中的公历时间:')
      this.Jh_log(timeObj)
      if (this.data.pickerIsLunar) {
        // 选择的时间转成农历
        let lunarTimeObj = lunarCalendar.solar2lunar(timeObj.year, timeObj.month, timeObj.day)
        let newTimeObj = {}
        // 农历年月日赋值
        newTimeObj.year = lunarTimeObj.lYear
        newTimeObj.month = lunarTimeObj.lMonth
        newTimeObj.day = lunarTimeObj.lDay
        // 判断是否是闰月
        newTimeObj.isLeapMonth = lunarTimeObj.IMonthCn.includes('闰')
        this.setDateLunarTime(newTimeObj)
      } else {
        this.setDateTime(timeObj)
      }
    },
    /**
     * 公历时间设置
     * @timeObj 公历时间对象
     */
    setDateTime(timeObj) {
      this.Jh_log('更新公历时间：')
      this.Jh_log(timeObj)
      let yearArr = this.getYears()
      let monthArr = this.getMonths(timeObj.year)
      let dayArr = this.getDays(timeObj.year, timeObj.month)
      this.setData({
        pickerYearArr: yearArr,
        pickerMonthArr: monthArr,
        pickerDayArr: dayArr,
      })
      // 获取年月日index
      let yearIndex = yearArr.findIndex(item => item.value == timeObj.year)
      let monthIndex = monthArr.findIndex(item => item.value == timeObj.month)
      let dayIndex = dayArr.findIndex(item => item.value == timeObj.day)
      // 最小年月日处理
      let minTime = this.properties.minTime
      if (timeObj.year <= this.Jh_getYear(minTime)) {
        yearIndex = yearArr.findIndex(item => item.value == this.Jh_getYear(minTime))
      }
      if (timeObj.year <= this.Jh_getYear(minTime) && timeObj.month <= this.Jh_getMonth(minTime)) {
        monthIndex = monthArr.findIndex(item => item.value == this.Jh_getMonth(minTime))
      }
      if (timeObj.year <= this.Jh_getYear(minTime) && timeObj.month <= this.Jh_getMonth(minTime) && timeObj.day <= this.Jh_getDay(minTime)) {
        dayIndex = dayArr.findIndex(item => item.value == this.Jh_getDay(minTime))
      }
      // 最大年月日处理
      let maxTime = this.properties.maxTime
      if (timeObj.year >= this.Jh_getYear(maxTime)) {
        yearIndex = yearArr.findIndex(item => item.value == this.Jh_getYear(maxTime))
      }
      if (timeObj.year >= this.Jh_getYear(maxTime) && timeObj.month >= this.Jh_getMonth(maxTime)) {
        monthIndex = monthArr.findIndex(item => item.value == this.Jh_getMonth(this.properties.maxTime))
      }
      if (timeObj.year >= this.Jh_getYear(maxTime) && timeObj.month >= this.Jh_getMonth(maxTime) && timeObj.day >= this.Jh_getDay(maxTime)) {
        dayIndex = dayArr.findIndex(item => item.value == this.Jh_getDay(maxTime))
      }
      this.Jh_log('修正后的年月日index')
      this.Jh_log(yearIndex)
      this.Jh_log(monthIndex)
      this.Jh_log(dayIndex)
      // 更新记录的选中时间
      let selectTime =
        TimeUtils.Jh_timeToTime(yearArr[yearIndex].value + '/' + monthArr[monthIndex].value + '/' + dayArr[dayIndex].value, '{y}/{m}/{d}')
      this.setData({
        pickerSelectTime: selectTime
      })
      // 更新数据
      this.Jh_log('公历 -- 自动更新开始')
      this.setData({
        isAutoUpdateIndex: true,
        isUpdateIndex: false,
        pickerSelectIndexArr: [yearIndex, monthIndex, dayIndex]
      })
      let that = this
      setTimeout(() => {
        that.setData({
          isAutoUpdateIndex: false,
        })
        that.Jh_log('公历 -- 自动更新结束')
      }, 300)
    },
    getYears() {
      let minYear = this.Jh_getYear(this.properties.minTime)
      let maxYear = this.Jh_getYear(this.properties.maxTime)
      let tempArr = []
      for (let i = minYear; i <= maxYear; i++) {
        tempArr.push({
          label: i + '年',
          value: i
        })
      }
      return tempArr
    },
    getMonths(year) {
      let minMonth = 1
      let maxMonth = 12
      if (year <= this.Jh_getYear(this.properties.minTime)) {
        minMonth = this.Jh_getMonth(this.properties.minTime)
      }
      if (year >= this.Jh_getYear(this.properties.maxTime)) {
        maxMonth = this.Jh_getMonth(this.properties.maxTime)
      }
      let tempArr = []
      for (let i = minMonth; i <= maxMonth; i++) {
        tempArr.push({
          label: i < 10 ? '0' + i + '月' : i + '月',
          value: i
        })
      }
      return tempArr
    },
    getDays(year, month) {
      let dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if ((year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
        dayInMonth[1] = 29
      }
      let minDay = 1
      let maxDay = dayInMonth[month - 1]
      if (year <= this.Jh_getYear(this.properties.minTime) && month <= this.Jh_getMonth(this.properties.minTime)) {
        minDay = this.Jh_getDay(this.properties.minTime)
      }
      if (year >= this.Jh_getYear(this.properties.maxTime) && month >= this.Jh_getMonth(this.properties.maxTime)) {
        maxDay = this.Jh_getDay(this.properties.maxTime)
      }
      let tempArr = []
      for (let i = minDay; i <= maxDay; i++) {
        tempArr.push({
          label: i < 10 ? '0' + i + '日' : i + '日',
          value: i
        })
      }
      return tempArr
    },
    /**
     * 农历时间设置
     * @timeObj 农历时间对象
     */
    setDateLunarTime(timeObj) {
      this.Jh_log('更新农历时间：')
      this.Jh_log(timeObj)
      // 判断是否是闰月
      let isLeapMonth = timeObj.isLeapMonth && lunarCalendar.leapMonth(timeObj.year) == timeObj.month
      // 农历时间转农历对象
      let lunarTimeObj = lunarCalendar.lunar2solar(timeObj.year, timeObj.month, timeObj.day, isLeapMonth)
      this.Jh_log('农历时间对象：')
      this.Jh_log(lunarTimeObj)
      let yearArr = this.getLunarYears()
      let monthArr = this.getLunarMonths(lunarTimeObj.lYear)
      let dayArr = this.getLunarDays(lunarTimeObj.lYear, lunarTimeObj.lMonth, isLeapMonth)
      this.setData({
        pickerYearArr: yearArr,
        pickerMonthArr: monthArr,
        pickerDayArr: dayArr,
      })
      // 获取年月日index
      let yearIndex = yearArr.findIndex(item => item.value == timeObj.year)
      let monthIndex = monthArr.findIndex(item => item.label == lunarTimeObj.IMonthCn)
      let dayIndex = dayArr.findIndex(item => item.label == lunarTimeObj.IDayCn)
      // 最小年月日处理
      let minLunarTimeObj = this.Jh_convertLunarTime(this.properties.minTime)
      let minYear = minLunarTimeObj.lYear
      let minMonth = minLunarTimeObj.lMonth
      let minDay = minLunarTimeObj.lDay
      if (timeObj.year <= minYear) {
        yearIndex = yearArr.findIndex(item => item.value == minYear)
      }
      if (timeObj.year <= minYear && timeObj.month <= minMonth) {
        monthIndex = monthArr.findIndex(item => item.value == minMonth)
      }
      if (timeObj.year <= minYear && timeObj.month <= minMonth && timeObj.day <= minDay) {
        dayIndex = dayArr.findIndex(item => item.value == minDay)
      }
      // 最大年月日处理
      let maxLunarTimeObj = this.Jh_convertLunarTime(this.properties.maxTime)
      let maxYear = maxLunarTimeObj.lYear
      let maxMonth = maxLunarTimeObj.lMonth
      let maxDay = maxLunarTimeObj.lDay
      if (timeObj.year >= maxYear) {
        yearIndex = yearArr.findIndex(item => item.value == maxYear)
      }
      if (timeObj.year >= maxYear && timeObj.month >= maxMonth) {
        monthIndex = monthArr.findIndex(item => item.value == maxMonth)
      }
      if (timeObj.year >= maxYear && timeObj.month >= maxMonth && timeObj.day >= maxDay) {
        dayIndex = dayArr.findIndex(item => item.value == maxDay)
      }
      this.Jh_log('修正后的年月日index')
      this.Jh_log(yearIndex)
      this.Jh_log(monthIndex)
      this.Jh_log(dayIndex)
      // 更新记录的选中时间
      let selectLunarTimeObj = lunarCalendar.lunar2solar(yearArr[yearIndex].value, monthArr[monthIndex].value, dayArr[dayIndex].value, isLeapMonth)
      let selectTime =
        TimeUtils.Jh_timeToTime(selectLunarTimeObj.date, '{y}/{m}/{d}')
      this.setData({
        pickerSelectTime: selectTime
      })
      // 更新数据
      this.Jh_log('农历 -- 自动更新开始')
      this.setData({
        isAutoUpdateIndex: true,
        isUpdateIndex: false,
        pickerSelectIndexArr: [yearIndex, monthIndex, dayIndex]
      })
      let that = this
      setTimeout(() => {
        that.setData({
          isAutoUpdateIndex: false,
        })
        that.Jh_log('农历 -- 自动更新结束')
      }, 300)
    },
    getLunarYears() {
      let minLunarTimeObj = this.Jh_convertLunarTime(this.properties.minTime)
      let maxLunarTimeObj = this.Jh_convertLunarTime(this.properties.maxTime)
      let minYear = minLunarTimeObj.lYear
      let maxYear = maxLunarTimeObj.lYear
      let tempArr = []
      for (let i = minYear; i <= maxYear; i++) {
        tempArr.push({
          label: i + '(' + lunarCalendar.toGanZhiYear(i) + '年)',
          value: i
        })
      }
      return tempArr
    },
    getLunarMonths(year) {
      let minMonth = 1
      let maxMonth = 12
      let minLunarTimeObj = this.Jh_convertLunarTime(this.properties.minTime)
      let maxLunarTimeObj = this.Jh_convertLunarTime(this.properties.maxTime)
      if (year <= minLunarTimeObj.lYear) {
        minMonth = minLunarTimeObj.lMonth
      }
      if (year >= maxLunarTimeObj.lYear) {
        maxMonth = maxLunarTimeObj.lMonth
      }
      // 是否有闰月
      let leapMonth = lunarCalendar.leapMonth(year)
      let tempArr = []
      for (let i = minMonth; i <= maxMonth; i++) {
        tempArr.push({
          label: lunarCalendar.toChinaMonth(i),
          value: i,
          isLeapMonth: false
        })
      }
      if (leapMonth > 0 && (leapMonth >= minMonth && leapMonth <= maxMonth)) {
        tempArr.splice(leapMonth, 0, {
          label: "闰" + lunarCalendar.toChinaMonth(leapMonth),
          value: leapMonth,
          isLeapMonth: true
        })
      }
      return tempArr
    },
    getLunarDays(year, month, isLeapMonth = false) {
      let days = isLeapMonth ? lunarCalendar.leapDays(year) : lunarCalendar.monthDays(year, month)
      let minDay = 1
      let maxDay = days
      let minLunarTimeObj = this.Jh_convertLunarTime(this.properties.minTime)
      let maxLunarTimeObj = this.Jh_convertLunarTime(this.properties.maxTime)
      if (year <= minLunarTimeObj.lYear && month <= minLunarTimeObj.lMonth) {
        minDay = minLunarTimeObj.lDay
      }
      if (year >= maxLunarTimeObj.lYear && month >= maxLunarTimeObj.lMonth) {
        maxDay = maxLunarTimeObj.lDay
      }
      let tempArr = []
      for (let i = minDay; i <= maxDay; i++) {
        tempArr.push({
          label: lunarCalendar.toChinaDay(i),
          value: i
        })
      }
      return tempArr
    },
    // 显示Picker
    showPicker: function () {
      this.setData({
        isShow: true
      })
    },
    // 隐藏Picker
    hiddenPicker: function () {
      this.setData({
        isShow: false
      })
    },
    // 将要弹出Picker
    willShowPicker: function (event) {

    },
    // 点击取消按钮
    onCancel: function () {
      this.setData({
        isShow: false
      })
    },
    onChangeStart() {
      this.Jh_log('开始滚动 -- onChangeStart')
      this.setData({
        isUpdateIndex: true
      })
    },
    onChangeEnd() {
      this.Jh_log('结束滚动 -- onChangeEnd')
      if (this.data.isAutoUpdateIndex) {
        this.setData({
          isAutoUpdateIndex: false
        })
      } else {
        let that = this
        setTimeout(() => {
          that.setData({
            isUpdateIndex: false,
          })
          that.Jh_log('拖动结束滚动 -- onChangeEnd')
        }, 300)
      }
    },
    // picker滚动事件
    onChange: function (event) {
      let value = event.detail.value
      this.Jh_log("==========滚动index==========")
      this.Jh_log(value)

      // 年月日索引处理
      let yearIndex = value[0] >= 0 ? value[0] : 0
      let monthIndex = value[1] >= 0 ? value[1] : 0
      let dayIndex = value[2] >= 0 ? value[2] : 0
      // 选择的年月日对象
      let yearObj = this.data.pickerYearArr[yearIndex]
      let monthObj = this.data.pickerMonthArr[monthIndex]
      let dayObj = this.data.pickerDayArr[dayIndex]
      // 滚动时年月日对象
      // 结果不一定正确，因为有最大最小值，要看修正后的，最终以点确定按钮的为主
      this.Jh_log('滚动时年月日对象')
      this.Jh_log(yearObj)
      this.Jh_log(monthObj)
      this.Jh_log(dayObj)
      // 滚动后更新数据
      if (this.data.isUpdateIndex) {
        this.Jh_log('滚动后更新数据')
        if (this.data.pickerIsLunar) {
          this.setDateLunarTime({
            year: yearObj.value,
            month: monthObj.value,
            day: dayObj.value,
            isLeapMonth: monthObj.isLeapMonth
          })
        } else {
          this.setDateTime({
            year: yearObj.value,
            month: monthObj.value,
            day: dayObj.value
          })
        }
      }
    },
    // 点击确定按钮
    onConfirm: function () {
      console.log('==========点击确定按钮==========')
      let selectTime = this.data.pickerSelectTime
      console.log('记录的选中时间（公历时间）：')
      console.log(selectTime)
      let timeStamp = TimeUtils.Jh_convertTimeStamp(selectTime)
      let time = TimeUtils.Jh_timeStampToYMD(timeStamp)
      let lunarTimeObj = this.Jh_convertLunarTime(selectTime)
      let returnObj = {
        time: time, // 公历时间，格式：2020/02/02
        timeStamp: timeStamp, // 公历时间戳
        timeObject: lunarTimeObj, // 公农历对象信息
      }
      console.log('传递出去的选中时间对象：')
      console.log(returnObj)
      this.setData({
        isShow: false
      })
      this.triggerEvent('confirm', returnObj)
    },
    // 公历农历切换
    onChangeTab(event) {
      this.Jh_log('onChangeTab')
      this.setData({
        titleActive: event.detail.index,
        pickerIsLunar: event.detail.title == '农历'
      })
      this.initData(true)
    },
    Jh_getYear(time) {
      let timeObj = TimeUtils.Jh_getYearMonthDayObj(time)
      return Number(timeObj.year)
    },
    Jh_getMonth(time) {
      let timeObj = TimeUtils.Jh_getYearMonthDayObj(time)
      return Number(timeObj.month)
    },
    Jh_getDay(time) {
      let timeObj = TimeUtils.Jh_getYearMonthDayObj(time)
      return Number(timeObj.day)
    },
    /**
     * 将某个格式时间转化成农历
     * 传入公历年月日获得详细的公历、农历object信息 <=>JSON
     * !important! 公历参数区间1900.1.31~2100.12.31
     * @param time 2019年02月02日 | 2020/02/02 | 2020-02-02 | 2020/02/02 00:00:00 | 2020-02-02 00:00:00
     * return JSON
     */
    Jh_convertLunarTime(time) {
      const {
        year,
        month,
        day
      } = TimeUtils.Jh_getYearMonthDayObj(time)
      let lunarCalendarTime = lunarCalendar.solar2lunar(year, month, day)
      return lunarCalendarTime
    },
    Jh_log(value) {
      if (isShowLog) {
        console.log(value)
      }
    }
  },
})

/*
使用方法 ：
1. usingComponents 添加
    "jh-lunar-picker": "jh-components/jh-lunar-picker/index",

2. wxml 添加组件

<jh-lunar-picker isShow='{{isShowTimePicker}}' bind:confirm="onConfirm" />

3. js 弹出选择器
  this.setData({
    isShowTimePicker: true
  });

4.点击事件

  // 点击选择器的 确定按钮
  onConfirm(e) {
    let dict = e.detail
    console.log(dict)
    this.setData({
      time: dict.time,
      timeStamp: dict.timeStamp,
      timeObject: dict.timeObject
    })
  }

*/