/* 网络请求工具类 */

var isProduct = __wxConfig.envVersion =='release';
var isDevelop = __wxConfig.envVersion == 'develop';

/* get请求 */
function get(url, params) {
  return request(url, "GET", params);
}

/* post请求 */
function post(url, params) {
  return request(url, "POST", params);
}

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
  if (isDevelop){
    console.log("请求参数:", params);
  }
  return params;
}

const request = (url, method, params) => {

  wx.showLoading({
    title: '加载中',
  })

  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: method,
      data: dealParams(params),
      header: _header,
      success(res) {
        wx.hideLoading();

        if (isDevelop) {
          console.log("请求返回数据:", res.data);
        }
        resolve(res.data)
      },
      fail(error) {
        wx.hideLoading();
        wx.showToast({
          title: error,
          icon: 'none',
          duration: 2000
        })
        reject(error)
      }
    })
  });

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
var http = require('../../../../JhHttpUtils/JhHttpUtils.js');

2. 调用
http.postRequest('url', prams).then(res => {
}).catch(error=>{
});

 */
