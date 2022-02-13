//给定的经度1，纬度1；经度2，纬度2. 计算2个经纬度之间的距离。
//<returns>距离 （单位：米）</returns>
//util的方法是通过读取类文件，然后通过映射获取的，所以需要在使用的page中加入
//var util = require('../../../utils/util.js');相当于一个导入的过程。
function distance(p1, p2) {
  //用haversine公式计算球面两点间的距离。
  //经纬度转换成弧度
  var lat1 = p1.latitude * Math.PI / 180;
  var lon1 = p1.longitude * Math.PI / 180;
  var lat2 = p2.latitude * Math.PI / 180;
  var lon2 = p2.longitude * Math.PI / 180;
  //差值
  var vLon = Math.abs(lon1 - lon2);
  var vLat = Math.abs(lat1 - lat2);
  //h is the great circle distance in radians, great circle就是一个球体上的切面，它的圆心即是球心的一个周长最大的圆。
  var v = Math.sin(vLat / 2);
  var v1 = Math.sin(vLon / 2);
  var h = v * v + Math.cos(lat1) * Math.cos(lat2) * v1 * v1;
  // 地球半径 平均值，米
  var distance = 2 * 6371000 * Math.asin(Math.sqrt(h));
  return distance;
}
module.exports = {//用于映射函数
  distance: distance,
}