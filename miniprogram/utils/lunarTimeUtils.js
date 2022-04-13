/* 农历时间工具类 */

/*
使用方法：

const LunarTimeUtils = require('../../utils/lunarTimeUtils')

// 转农历
let lunarTimeObj = LunarTimeUtils.Jh_convertLunarTime('2020/02/02')


*/


const TimeUtils = require('./timeUtils')
const lunarCalendar = require('../vendors/calendar')

/* 通过module.exports方式提供给外部调用 */
module.exports = {
  Jh_convertLunarTime, // 将某个格式时间转化成农历
  Jh_getBigAge, // 虚岁年龄
  Jh_getNextBirthday, // 阴历下次生日对应的阳历时间
}


/**
 * 将某个格式时间转化成农历
 * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
 * !important! 公历参数区间1900.1.31~2100.12.31
 * @param time 2019年02月02日 | 2019年2月2日 00:00:00 | 2020/02/02 | 2020-02-02 | 2020/02/02 00:00:00 | 2020-02-02 00:00:00
 * @return - 
 {
  "date": "2019-2-2",
  "lunarDate": "2018-12-28",
  "festival": null,
  "lunarFestival": null,
  "lYear": 2018,
  "lMonth": 12,
  "lDay": 28,
  "Animal": "狗",
  "IMonthCn": "腊月",
  "IDayCn": "廿八",
  "cYear": 2019,
  "cMonth": 2,
  "cDay": 2,
  "gzYear": "戊戌",
  "gzMonth": "乙丑",
  "gzDay": "庚午",
  "isToday": false,
  "isLeap": false,
  "nWeek": 6,
  "ncWeek": "星期六",
  "isTerm": false,
  "Term": null,
  "astro": "水瓶座"
}
 */
function Jh_convertLunarTime(time) {
  const {
    year,
    month,
    day
  } = TimeUtils.Jh_getYearMonthDayObj(time)
  let lunarCalendarTime = lunarCalendar.solar2lunar(year, month, day)
  return lunarCalendarTime
}

/**
 * 虚岁算法：一出生就是一岁，然后，每过一个春节就长一岁。
 * @param birthday 2019年02月02日 | 2019年2月2日 00:00:00 | 2020/02/02 | 2020-02-02 | 2020/02/02 00:00:00 | 2020-02-02 00:00:00
 * @return 返回年龄
 */
function Jh_getBigAge(birthday) {
  const birthdayObj = Jh_convertLunarTime(birthday)
  const nowObj = Jh_convertLunarTime(TimeUtils.Jh_timeStampToYMD())
  return nowObj.lYear - birthdayObj.lYear + 1
}

/**
 * 根据阳历生日获取下一次生日时间（按农历过生日）
 * 先把阳历生日转成农历生日，再算出下次农历生日对应的阳历生日
 * @param birthday 2019年02月02日 | 2019年2月2日 00:00:00 | 2020/02/02 | 2020-02-02 | 2020/02/02 00:00:00 | 2020-02-02 00:00:00
 * @return 2023-01-19
 */
function Jh_getNextBirthday(birthday) {
  // 如果birthday是今天，直接返回
  if (TimeUtils.Jh_isToday(birthday)) {
    return TimeUtils.Jh_timeToTime(birthday, '{y}-{m}-{d}')
  }
  // 如果birthday大于当前时间，直接返回
  let currentTime = TimeUtils.Jh_timeStampToYMD()
  if (TimeUtils.Jh_compareTimes(birthday, currentTime)) {
    return TimeUtils.Jh_timeToTime(birthday, '{y}-{m}-{d}')
  }

  const {
    year,
    month,
    day
  } = TimeUtils.Jh_getYearMonthDayObj(birthday)
  let timeObj = lunarCalendar.solar2lunar(year, month, day)

  // 如果birthday小于当前时间，先判断今年是否已过生日
  let timeObj2 = lunarCalendar.lunar2solar(TimeUtils.Jh_getYear(), timeObj.lMonth, timeObj.lDay)
  let nextTime = timeObj2.date
  // 如果今年生日未过，返回生日
  if (TimeUtils.Jh_compareTimes(nextTime, currentTime)) {
    return TimeUtils.Jh_timeToTime(timeObj2.date, '{y}-{m}-{d}')
  }
  // 如果今年的生日已经过了，计算明年
  let timeObj3 = lunarCalendar.lunar2solar(parseInt(TimeUtils.Jh_getYear()) + 1, timeObj.lMonth, timeObj.lDay)
  return TimeUtils.Jh_timeToTime(timeObj3.date, '{y}-{m}-{d}')
}