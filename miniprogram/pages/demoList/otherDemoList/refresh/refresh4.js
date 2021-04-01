let app = getApp()
var API = require('../../../../JhHttpUtils/APICongfig.js');

Page({
  data: {
    dataArr: [],
    params: {
      maxCount: 50,
      // noData: true
    },
    limit: 10,
    url: API.URL.api_getNewPageArrDic,
  },
  onLoad() {

  },
  onReturnData(e) {
    console.log('===page拿到的数据===');
    console.log(e.detail);
    this.setData({
      dataArr: e.detail
    })
  },
  clickItem(e) {
    console.log(e);
  },

});