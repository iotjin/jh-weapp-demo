/**
 * 将某个时间戳转化成 指定格式时间
 * @param {date} time 时间
 * @param {string} cFormat {y}-{m}-{d} {h}:{i}:{s} {w} 
 */
export function Jh_timeStampToTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {} else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    w: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|w)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'w') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0;
  })
  return time_str;
}
//转成不带0的时间格式
export function Jh_timeStampToNo0Time(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {} else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    w: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|w)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'w') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    // if (result.length > 0 && value < 10) {
    //   value = '0' + value
    // }
    return value || 0;
  })
  return time_str;
}

// //把 "2019-05-20 00:00:00" 转成 时间戳
// export function Jh_convertTimeStamp(time) {
//   //用正则主要是把“2019-05-20 00:00:00”转换成“2019/05/20 00:00:00”兼容ios
//   let newTime = time.replace(/-/g, '/');
//   return Date.parse(newTime)
// }
//把 "2019-05-20 00:00:00" 转成 时间戳
export function Jh_convertTimeStamp(time) {
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
    newTime = newTime + ':00'
  }
  return Date.parse(newTime)
}


// 时间戳转年月日
function timestampToYMD(unixtime, format) {
  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];
  var dateTime = new Date(parseInt(unixtime))
  var year = dateTime.getFullYear();
  var month = dateTime.getMonth() + 1;
  var day = dateTime.getDate();
  var hour = dateTime.getHours();
  var minute = dateTime.getMinutes();
  var second = dateTime.getSeconds();
  returnArr.push(year);
  returnArr.push(month < 10 ? '0' + month : month);
  returnArr.push(day < 10 ? '0' + day : day);
  returnArr.push(hour < 10 ? '0' + hour : hour);
  returnArr.push(minute < 10 ? '0' + minute : minute);
  returnArr.push(second < 10 ? '0' + second : second);
  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}

//某个时间是否是今天 time格式：2020-07-19 20:33:00
export function Jh_isToday(time) {
  let newTime = time.replace(/-/g, '');
  newTime = newTime.substring(0, 8);
  var currentTime = new Date().getTime();
  currentTime = Jh_timeStampToTime(currentTime, '{y}{m}{d}')
  return newTime == currentTime
}

//判断当前时间是否在某个时间段内  time格式：2020-07-19 20:33:00
export function Jh_isBetweenTimes(beginTime, endTime) {
  beginTime = beginTime.replace(/-/g, '/');
  endTime = endTime.replace(/-/g, '/');
  beginTime = new Date(beginTime)
  endTime = new Date(endTime)
  let currentTime = new Date();
  if (beginTime <= currentTime && currentTime <= endTime) {
    return true;
  }
  return false;
}

//获取当前年月  time格式：2020-07
export function Jh_getYearMonth() {
  let timestamp = Date.parse(new Date());
  return Jh_timeStampToTime(timestamp, '{y}-{m}');
}

//获取 指定年的上一年 time格式：2020 | 2020年
export function Jh_getPrevYear(time) {
  let tempYear = time.substring(0, 4)
  tempYear = parseInt(tempYear)
  tempYear = tempYear - 1
  let text = time.substring(4, 5)
  let prevTime = ''
  if (text == '年') {
    prevTime = tempYear + '年'
  } else {
    prevTime = tempYear + text
  }
  return prevTime
}

//获取 指定年的下一年 time格式：2020 | 2020年
export function Jh_getNextYear(time) {
  let tempYear = time.substring(0, 4)
  tempYear = parseInt(tempYear)
  tempYear = tempYear + 1
  let text = time.substring(4, 5)
  let nextTime = ''
  if (text == '年') {
    nextTime = tempYear + '年'
  } else {
    nextTime = tempYear + text
  }
  return nextTime
}

//获取 指定年月的上一年月 time格式：2020-07 | 2020年07月
export function Jh_getPrevYearMonth(time) {
  let tempYear = time.substring(0, 4)
  let tempMonth = time.substring(5, 7)
  tempYear = parseInt(tempYear)
  tempMonth = parseInt(tempMonth)
  tempMonth = tempMonth - 1
  if (tempMonth == 0) {
    tempYear = tempYear - 1
    tempMonth = 12
  }
  if (tempMonth < 10) {
    tempMonth = '0' + tempMonth
  }
  let text = time.substring(4, 5)
  let prevTime = ''
  if (text == '年') {
    prevTime = tempYear + '年' + tempMonth + '月'
  } else {
    prevTime = tempYear + text + tempMonth
  }
  return prevTime
}

// 获取 指定年月的下一年月 time格式：2020-07 | 2020年07月
export function Jh_getNextYearMonth(time) {
  let tempYear = time.substring(0, 4)
  let tempMonth = time.substring(5, 7)
  tempYear = parseInt(tempYear)
  tempMonth = parseInt(tempMonth)
  tempMonth = tempMonth + 1
  if (tempMonth == 13) {
    tempYear = tempYear + 1
    tempMonth = 1
  }
  if (tempMonth < 10) {
    tempMonth = '0' + tempMonth
  }
  let text = time.substring(4, 5)
  let nextTime = ''
  if (text == '年') {
    nextTime = tempYear + '年' + tempMonth + '月'
  } else {
    nextTime = tempYear + text + tempMonth
  }
  return nextTime
}


/*
使用方法：

var TimeUtils = require('../../utils/timeUtils.js');

//时间戳转指定格式时间
TimeUtils.Jh_timeStampToTime(1554803832, '{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}')                     1487065320000


*/