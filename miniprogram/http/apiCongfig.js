/* 接口管理 */

const HTTP = require('../http/httpUtils.js');

// const API_BASE_URL = 'https://www.fastmock.site/mock/1010b262a743f0b06c565c7a31ee9739/root';

const API_BASE_URL = 'https://mock.apipost.cn/app/mock/project/b3489dad-68b9-11eb-a95d-1c34da7b354c/v1/api';


/* 接口地址： */
const URL = {
  api_pageArrDict: API_BASE_URL + '/mock/pages', // 获取分页数组 - get
  api_pageArrDict_post: API_BASE_URL + '/mock/pages', // 获取分页数组 - post
  api_simpleArrDict: API_BASE_URL + '/mock/simpleArrDict', // 获取数组字典
  /*----------------------------------- 首页 -----------------------------------*/
  api_home_add: API_BASE_URL + "/home/add",
  api_home_list: API_BASE_URL + "/home/list",
  /*----------------------------------- 我的 -----------------------------------*/
}



/* 通过module.exports方式提供给外部调用 */
module.exports = {
  URL,
  //获取分页数据 - get
  getPageArrDict: (params) => HTTP.get(URL.api_pageArrDict, params),
  //获取分页数据 - post
  getPageArrDictPost: (params) => HTTP.post(URL.api_pageArrDict_post, params),
  //获取分页数据2
  getPageArrDict2: (params) => {
    console.log(URL.api_pageArrDict_post + '-----------------------')
    return HTTP.post(URL.api_pageArrDict_post, params, '正在加载中...')
  },
  getSimpleArrDict: (params) => HTTP.post(URL.api_simpleArrDict, params),
  /*----------------------------------- 首页 -----------------------------------*/
  addHomeData: (params) => HTTP.post(URL.api_home_add, params, '正在提交...'),
  getHomeListData: (pathParams) => HTTP.get(URL.api_home_list + pathParams),
  /*----------------------------------- 我的 -----------------------------------*/
}


/* 
使用方法 ：

1.在要使用的js文件导入
const API = require('../../../../http/apiCongfig.js'); 


2. 调用
API.getPageArrDic(params).then(res => {

}).catch(error => {

});

 */