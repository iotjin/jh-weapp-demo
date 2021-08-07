Page({

  /**
   * 页面的初始数据
   */
  data: {
    topTabText1: '待处理',
    topTabText2: '待评价',
    "searchText": "",
    tabbarSelect: 0,
    tabbars: [{
      text: '标签一',
      tab: 'https://img.yzcdn.cn/vant/user-inactive.png',
      tab_sel: 'https://img.yzcdn.cn/vant/user-active.png',
    }, {
      text: '标签二',
      tab: 'https://img.yzcdn.cn/vant/user-inactive.png',
      tab_sel: 'https://img.yzcdn.cn/vant/user-active.png',
    }, {
      text: '标签三',
      tab: 'https://img.yzcdn.cn/vant/user-inactive.png',
      tab_sel: 'https://img.yzcdn.cn/vant/user-active.png',
    }],
    dataArr: [{
        "id": "1",
        "description": "这是问题描述1",
        "collegeName": "名称名称名称1",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "1",
        "workOrdertType": "0",
        "evaluationStatus": "1",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述3",
        "collegeName": "名称名称名称3",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述4",
        "collegeName": "名称名称名称4",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述2",
        "collegeName": "名称名称名称2",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述98",
        "collegeName": "名称名称名称98",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      },
      {
        "id": "2",
        "description": "这是问题描述99",
        "collegeName": "名称名称名称99",
        "workOrderCreateTime": "2020-01-30 15:00",
        "workOrderStatus": "2",
        "workOrdertType": "2",
        "evaluationStatus": "0",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  onChangeTopTab1(event) {
    var title = event.detail.title
    this.setData({
      topTabText1: title
    })
    if (title == "待处理") {}
    if (title == "已处理") {}
  },
  onChangeTopTab2(event) {
    var title = event.detail.title
    this.setData({
      topTabText2: title
    })
    if (title == "待评价") {}
    if (title == "已评价") {}
  },


  onClickRightItem() {
    console.log('点击筛选');
  },
  onChangeTabbar(event) {
    var index = event.detail
    this.setData({
      tabbarSelect: index
    });
    if (index == 0) {

    }
    if (index == 1) {
      this.selectComponent('#tabs1').resize();
    }
    if (index == 2) {
      this.selectComponent('#tabs2').resize();
    }
  }
})