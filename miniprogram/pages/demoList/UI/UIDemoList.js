Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        text: '表单',
        pathUrl: '/pages/demoList/UI/form'
      },
      {
        text: '搜索',
        pathUrl: '/pages/demoList/UI/search'
      },
      {
        text: 'top',
        pathUrl: '/pages/demoList/UI/top'
      },
      {
        text: 'topTab',
        pathUrl: '/pages/demoList/UI/topTab'
      },
      {
        text: 'topTab2',
        pathUrl: '/pages/demoList/UI/topTab2'
      },
      {
        text: '登录',
        pathUrl: '/pages/demoList/UI/login'
      },
      {
        text: 'main',
        pathUrl: '/pages/demoList/UI/main'
      },
      {
        text: 'examination',
        pathUrl: '/pages/demoList/UI/examination'
      },
      {
        text: '简单表格',
        pathUrl: '/pages/demoList/UI/table1'
      },
      {
        text: '简单表格2',
        pathUrl: '/pages/demoList/UI/table4'
      },
      {
        text: '树形结构数据',
        pathUrl: '/pages/demoList/UI/tree'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    wx.setNavigationBarTitle({
      title: 'DemoList'
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})