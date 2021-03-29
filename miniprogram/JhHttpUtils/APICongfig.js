/* 接口管理 */

var HTTP = require('../JhHttpUtils/JhHttpUtils.js');

var API_BASE_URL = 'https://www.fastmock.site/mock/1010b262a743f0b06c565c7a31ee9739/root';


/* 接口地址： */
var URL = {
  api_getPageArrDic: API_BASE_URL + '/getPageArrDic', // 获取分页数组
  /*----------------------------------- 首页 -----------------------------------*/
  addHomeData: API_BASE_URL + "/home/add",
  getData: API_BASE_URL + "/home/list",
  /*----------------------------------- 我的 -----------------------------------*/
}



/* 通过module.exports方式提供给外部调用 */
module.exports = {
  URL,
  //获取分页数据
  getPageArrDic: (params) => HTTP.post(URL.api_getPageArrDic, params),
  //获取分页数据2
  getPageArrDic2: (params) => {
    console.log(URL.api_getPageArrDic + '-----------------------')
    return HTTP.post(URL.api_getPageArrDic, params, '正在加载中...')
  },
  /*----------------------------------- 首页 -----------------------------------*/
  addHomeData: (params) => HTTP.post(URL.addHomeData, params, '正在提交...'),
  getData: (pathParams) => HTTP.get(URL.getData + pathParams),
  /*----------------------------------- 我的 -----------------------------------*/
}


/* 
使用方法 ：

1.在要使用的js文件导入
var API = require('../../../../JhHttpUtils/APICongfig.js'); 


2. 调用
API.getPageArrDic(params).then(res => {

}).catch(error => {

});

 */