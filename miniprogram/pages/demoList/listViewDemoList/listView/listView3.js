// var http = require('../../../../JhHttpUtils/JhHttpUtils.js'); //相对路径

var API = require('../../../../JhHttpUtils/APICongfig.js'); //相对路径

var index = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: []
  },

  requestData: function(isLoadMore) {

    if (isLoadMore) {
      index++;
    } else {
      index = 0;
    }

    var prams = {
      page: index
    }

    // API.getPageArrDic(prams).then(res => {
    // });

    API.getPageArrDic2(prams).then(res => {
      if (!res.data.length) {
        wx.showToast({
          title: '暂无更多数据',
          icon: 'none',
        })
        return;
      }
      this.setData({
        dataArr: this.data.dataArr.concat(res.data)
      })
    }).catch(error => {

    });
   

    // http.postRequest('dsf', prams).then(res => {

    //   if (!res.data.length) {
    //     wx.showToast({
    //       title: '暂无更多数据',
    //       icon: 'none',
    //     })
    //     return;
    //   }
    //   this.setData({
    //     dataArr: this.data.dataArr.concat(res.data)
    //   })
    // }).catch(error=>{

    // });


  },

  // requestData: function (isLoadMore) {

  //   if (isLoadMore){
  //     index++;
  //   }else{
  //     index=0;
  //   }

  //   wx.showLoading({
  //     title: '加载中',
  //   })

  //   wx.request({
  //     url: 'https://www.fastmock.site/mock/1010b262a743f0b06c565c7a31ee9739/root/getPageArrDic',
  //     method: 'post',
  //     data: {
  //       page: index
  //     },
  //     success: (res) => {
  //       wx.hideLoading();
  //       wx.stopPullDownRefresh();
  //       // console.log(res.data);

  //       if (!res.data.data.length){
  //         wx.showToast({
  //           title: '暂无更多数据',
  //           icon: 'none',
  //           duration: 2000
  //         })
  //         return;
  //       }

  //       this.setData({
  //         dataArr: this.data.dataArr.concat(res.data.data) 
  //       })
  //     },
  //     Error: (Error) => {
  //       wx.hideLoading();
  //       wx.stopPullDownRefresh();
  //       console.log(Error);
  //     }
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    wx.setNavigationBarTitle({
      title: '分页加载'
    })

    this.requestData();

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

    this.requestData();

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.requestData(true);
  },


})