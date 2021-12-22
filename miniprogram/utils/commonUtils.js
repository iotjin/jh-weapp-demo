 //通用工具类

 module.exports = {
   getSafeRandomNum: getSafeRandomNum,
   getRandomNum: getRandomNum,
 }

 // 创建 min-max 之间的随机整数
 function getSafeRandomNum(min, max) {
   var seed = (new Date()).getTime();
   seed = (seed * 9301 + 49297) % 233280;
   var rand = seed / (233280.0);
   var range = max - min;
   return Math.floor(rand * (range + 1) + min);
 }

 // 创建 min-max 之间的随机整数
 function getRandomNum(min, max) {
   var range = max - min;
   var rand = Math.random();
   return Math.floor(rand * (range + 1) + min);
 }

 // 把数组拆分n个一组的小数组(小数组长度为n)
 function splitArrayByLength(array, subGroupLength) {
   let index = 0;
   let newArray = [];
   while (index < array.length) {
     newArray.push(array.slice(index, index += subGroupLength));
   }
   return newArray;
 }

 /*  使用
 const CommonUtils = require('../../utils/commonUtils')

 CommonUtils.getRandomNum()

*/