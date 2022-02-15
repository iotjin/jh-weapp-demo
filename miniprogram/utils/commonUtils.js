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

 /**
  * 数组根据数组对象中的某个属性值进行排序的方法 
  * 使用例子：newArray.sort(CommonUtils.sortBy('number',false)) //表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序
  * @param attr 排序的属性 如number属性
  * @param rev true表示升序排列，false降序排序
  */
 function sortBy(attr, rev) {
   //第二个参数没有传递 默认升序排列
   if (rev == undefined) {
     rev = 1;
   } else {
     rev = (rev) ? 1 : -1;
   }
   return function (a, b) {
     a = a[attr];
     b = b[attr];
     if (a < b) {
       return rev * -1;
     }
     if (a > b) {
       return rev * 1;
     }
     return 0;
   }
 }


 /*  使用
 const CommonUtils = require('../../utils/commonUtils')

 CommonUtils.getRandomNum()

*/