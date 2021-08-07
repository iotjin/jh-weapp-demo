Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        text: '简单表格',
        pathUrl: '/pages/demos/ui/table/table1'
      },
      {
        text: '简单表格2',
        pathUrl: '/pages/demos/ui/table/table2'
      },
      {
        text: '简单表格3',
        pathUrl: '/pages/demos/ui/table/table3'
      },
      {
        text: '简单表格4',
        pathUrl: '/pages/demos/ui/table/table4'
      },
      {
        text: '树形结构数据',
        pathUrl: '/pages/demos/componentDemos/component/tree'
      },
      {
        text: 'topTab',
        pathUrl: '/pages/demos/ui/topTab/topTab'
      },
      {
        text: 'topTab2',
        pathUrl: '/pages/demos/ui/topTab/topTab2'
      },
      {
        text: '表单',
        pathUrl: '/pages/demos/ui/ui1/form'
      },
      {
        text: '登录',
        pathUrl: '/pages/demos/ui/ui1/login'
      },
      {
        text: 'main',
        pathUrl: '/pages/demos/ui/ui1/main'
      },
      {
        text: 'top',
        pathUrl: '/pages/demos/ui/ui1/top'
      },

      {
        text: 'examination',
        pathUrl: '/pages/demos/ui/ui2/examination'
      },
      {
        text: '评分页',
        pathUrl: '/pages/demos/ui/ui2/score'
      },
      {
        text: '顶部搜索+底部tabbar',
        pathUrl: '/pages/demos/ui/ui2/search_tabbar'
      },
      {
        text: 'search',
        pathUrl: '/pages/demos/ui/ui2/search'
      },
      {
        text: '侧滑搜索',
        pathUrl: '/pages/demos/ui/ui2/sideslip'
      },
      {
        text: 'room',
        pathUrl: '/pages/demos/ui/ui2/study_room'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    wx.setNavigationBarTitle({
      title: 'UI'
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