// miniprogram/pages/tabbar/index.js
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabbars: [{
        isShowRedDot: true,
        info: '',
        text: '模块一',
        iconPath: 'https://img.yzcdn.cn/vant/user-inactive.png',
        selectedIconPath: 'https://img.yzcdn.cn/vant/user-active.png',
      },
      {
        isShowRedDot: false,
        info: '5',
        text: '模块二',
        iconPath: 'https://img.yzcdn.cn/vant/user-inactive.png',
        selectedIconPath: 'https://img.yzcdn.cn/vant/user-active.png',
      },
      {
        isShowRedDot: false,
        info: '',
        text: '模块三',
        iconPath: 'https://img.yzcdn.cn/vant/user-inactive.png',
        selectedIconPath: 'https://img.yzcdn.cn/vant/user-active.png',
      }
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var userType = app.userType
    // console.log(userType);
  },
  onChangeTabbar(event) {
    var index = event.detail
    this.setData({
      currentTabBar: index
    });
    if (index == 0) {}
    if (index == 1) {}
    if (index == 2) {}
  }

})

/*

  "tabBar": {
    "custom": true,
    "color": "#cdcdcd",
    "selectedColor": "#4252DD",
    "list": [{
        "text": "首页",
        "pagePath": "pages/one/one",
        "iconPath": "images/tab/tab1.png",
        "selectedIconPath": "images/tab/tab1_select.png"
      },
      {
        "text": "我的",
        "pagePath": "pages/two/two",
        "iconPath": "images/tab/tab2.png",
        "selectedIconPath": "images/tab/tab2_select.png"
      }
    ]
  },




*/