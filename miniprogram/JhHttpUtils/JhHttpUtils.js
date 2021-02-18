/* 网络请求工具类 */

var isProduct = __wxConfig.envVersion == 'release';
var isDevelop = __wxConfig.envVersion == 'develop';

/* 请求头 */
var _header = {
  'content-type': 'application/x-www-form-urlencoded',
  // 'version': '1.0.0',
}

/**
 * function: 根据需求处理请求参数
 * @params 请求参数
 */
function dealParams(params) {
  if (isDevelop) {
    console.log("请求参数:", params);
  }
  return params;
}

/**
 * function: 显示/隐藏加载框
 * @isShow 显示/隐藏
 * @loadingText 加载框文字
 */
function showLoading(isShow, loadingText) {
  if (isShow == false) {
    wx.hideLoading();
    return
  }
  if (loadingText == undefined) {} else {
    if (loadingText != "" && isShow == true) {
      wx.showLoading({
        title: loadingText,
      })
    }
  }
}

/* 进行请求 */
const request = (url, method, params, loadingText) => {
  showLoading(true, loadingText)
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: method,
      data: dealParams(params),
      header: _header,
      success(res) {
        if (isDevelop) {
          console.log("请求返回数据:", res.data);
        }
        resolve(res.data)
      },
      fail(error) {
        // wx.showToast({
        //   title: error,
        //   icon: 'none',
        //   duration: 2000
        // })
        reject(error)
      },
      complete() {
        showLoading(false)
      }
    })
  });
}

/* get请求 */
function get(url, params, loadingText) {
  return request(url, "GET", params, loadingText);
}

/* post请求 */
function post(url, params, loadingText) {
  return request(url, "POST", params, loadingText);
}

/* 通过module.exports方式提供给外部调用 */
module.exports = {
  request,
  getRequest: get,
  postRequest: post,
}

/* 
使用方法 ：

1.在要使用的js文件导入
var HTTP = require('../../../../JhHttpUtils/JhHttpUtils.js');

2. 调用
HTTP.postRequest('url', prams).then(res => {
}).catch(error=>{
});

 */