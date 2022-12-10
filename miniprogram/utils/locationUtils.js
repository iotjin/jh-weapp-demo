/* 定位工具类 */

/*
使用方法：

  const LocationUtils = require('../../utils/locationUtils.js')

  // wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
  LocationUtils.Jh_getLocation('gcj02').then(res => {
    console.log('当前位置');
    console.log(res);
    console.log(res.latitude); // 纬度，范围为 -90~90，负数表示南纬
    console.log(res.longitude); // 经度，范围为 -180~180，负数表示西经
  }).catch(error => {
    console.log(error);
    // wx.showToast({
    //   title: '为了不影响您的使用，请授权定位',
    //   icon: 'none'
    // })
  });

  注：
  1、需要申请开通
  2、requiredPrivateInfos中的模糊位置和精确位置是互斥的，即声明了模糊位置信息就无法声明精确位置信息
  3、getFuzzyLocation 基础库 2.25.0 开始支持
  4、需在app.json中配置

  "requiredPrivateInfos": [
    "getFuzzyLocation",
    "chooseLocation"
  ],
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序定位"
    },
    "scope.userFuzzyLocation": {
      "desc": "你的模糊位置信息将用于小程序定位"
    }
  },

官方公告（地理位置接口新增与相关流程调整）：
https://developers.weixin.qq.com/community/develop/doc/000a02f2c5026891650e7f40351c01

官方文档：
https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getFuzzyLocation.html

*/

module.exports = {
  Jh_getLocation: getLocation,
  Jh_getFuzzyLocation: getFuzzyLocation,
  Jh_chooseLocation: chooseLocation
}

/** 
  获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。
  需申请开通（「开发」-「开发管理」-「接口设置」中自助开通该接口权限）,需在app.json配置
  官方文档：https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html
  注：
  2.17.0 起wx.getLocation` 增加调用频率限制
  工具中定位模拟使用 IP 定位，可能会有一定误差。且工具目前仅支持 gcj02 坐标。
  使用第三方服务进行逆地址解析时，请确认第三方服务默认的坐标系，正确进行坐标转换。
 */
function getLocation(type) {
  type = type ? type : 'gcj02'
  return new Promise((resolve, reject) => {
    // wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
    wx.getLocation({
      type: type,
      success: (res) => {
        return resolve(res)
      },
      fail: (err) => {
        return reject(err)
        // wx.showToast({
        //   title: '为了不影响您的使用，请授权定位',
        //   icon: 'none'
        // })
      }
    });
  });
}

/** 
  获取当前的模糊地理位置。
  需申请开通（「开发」-「开发管理」-「接口设置」中自助开通该接口权限）,需在app.json配置
  官方文档：https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getFuzzyLocation.html
  注：基础库 2.25.0 开始支持
  */
function getFuzzyLocation(type) {
  type = type ? type : 'gcj02'
  return new Promise((resolve, reject) => {
    // wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
    wx.getFuzzyLocation({
      type: 'gcj02',
      success: (res) => {
        return resolve(res)
      },
      fail: (err) => {
        return reject(err)
        // wx.showToast({
        //   title: '为了不影响您的使用，请授权定位',
        //   icon: 'none'
        // })
      }
    });
  });
}

/** 
  打开地图选择位置。
  需申请开通（「开发」-「开发管理」-「接口设置」中自助开通该接口权限）,需在app.json配置
  官方文档：https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html
 */
function chooseLocation() {
  return new Promise((resolve, reject) => {
    wx.chooseLocation({
      success: (res) => {
        return resolve(res)
      },
      fail: (err) => {
        return reject(err)
        // wx.showToast({
        //   title: '为了不影响您的使用，请授权定位',
        //   icon: 'none'
        // })
      }
    });
  });
}