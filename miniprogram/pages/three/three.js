// miniprogram/pages/three/three.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
      // newIcon: require('../.././images/ic_heart.png'),

    cellIcon_leibie: '../../images/ic_category.png',

    cellIcon_set: '../../images/ic_set.png',


    listData: [
      {
        'title':'标签',
        'icon': '../../images/ic_category.png',
    },
      {
        'title': '设置',
        'icon': '../../images/ic_set.png',
      },
      {
        'title': '关于',
        'icon': '../../images/ic_about.png',
        'url': './about',
      },
      {
        'title': '意见反馈',
        'icon': '../../images/ic_opinion.png',
        'url': './feedback/feedback',
      }, 
      {
        'title': '天数',
        'icon': '../../images/ic_heart.png',
        'info': '15天'
      }
    ],

    listData0:[
      "1",
      "2",
      "3",
      "4"
    ],


 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      // cellIcon1: require('/miniprogram/images/ic_heart.png'),
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  ClickCell(event){
    var data = event.currentTarget.dataset.model;
    var text = data.title;
    console.log(text);
    var url = data.url;
    if (text == "关于" ||text == "意见反馈" ) {
      wx.navigateTo({
        url: url
      })
    }
  },
  ClickHeader(){
    wx.navigateTo({
      url: './mine'
    })
  }

})