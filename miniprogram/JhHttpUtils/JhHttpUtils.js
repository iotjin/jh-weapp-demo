/* 网络请求工具类 */

var isProduct = __wxConfig.envVersion == 'release';
var isDevelop = __wxConfig.envVersion == 'develop';

function getToken() {
  let token = '1';
  return token;
}

/* 请求头 */
var _header = {
  'content-type': 'application/x-www-form-urlencoded',
  // 'version': '1.0.0',
}

//处理发送的数据，对数据加密
function handleSendData(params) {
  if (isDevelop) {
    console.log("请求参数：", params);
  }
  return params;
}

//处理返回数据，对数据解密
function handleReturnData(res) {
  if (isDevelop) {
    console.log("返回数据：", res.data);
  }
  return res;
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
      data: handleSendData(params),
      header: _header,
      success(res) {
        resolve(handleReturnData(res.data))
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

/* 文件上传 */
const uploadFile = (url, filePath, params, loadingText) => {
  // console.log("-----文件上传------");
  showLoading(true, loadingText)
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: url,
      name: 'file',
      filePath: filePath,
      formData: handleSendData(params),
      header: _header,
      success(res) {
        resolve(handleReturnData(JSON.parse(res.data)))
      },
      fail(error) {
        reject(error)
      },
      complete: info => {
        showLoading(false)
      }
    })
  })
}

/* 图片加载 */
const loadImage = (url, params) => {
  // console.log("-----图片下载------");
  let auth = '_auth=' + getToken()
  if (url.indexOf("?") > 0) {
    url = url + "&" + auth
  } else {
    url = url + "?" + auth
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: 'GET',
      data: params,
      header: _header,
      responseType: 'arraybuffer',
      success(res) {
        if (res.statusCode == 200 && res.data.byteLength) {
          let base64 = wx.arrayBufferToBase64(res.data);
          let img = 'data:image/jpeg;base64,' + base64
          resolve(img)
        } else {
          resolve(null)
        }
      },
      fail(error) {
        reject(error)
      },
      complete: info => {}
    })
  })
}

/* 通过module.exports方式提供给外部调用 */
module.exports = {
  request,
  uploadFile,
  loadImage,
  get: get,
  post: post,
}

/* 
使用方法 ：

1.在要使用的js文件导入
var HTTP = require('../../../../JhHttpUtils/JhHttpUtils.js');

2. 调用
HTTP.post('url', prams).then(res => {
}).catch(error=>{
});

 */