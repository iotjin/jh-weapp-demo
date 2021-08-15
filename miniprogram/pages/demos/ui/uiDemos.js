Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        title: '微信登录',
        url: '/pages/login/wxLogin'
      },
      {
        title: '密码登录',
        url: '/pages/login/pwdLogin'
      },
      {
        title: '简单表格',
        url: '/pages/demos/ui/table/table1'
      },
      {
        title: '简单表格2',
        url: '/pages/demos/ui/table/table2'
      },
      {
        title: '简单表格3',
        url: '/pages/demos/ui/table/table3'
      },
      {
        title: '简单表格4',
        url: '/pages/demos/ui/table/table4'
      },
      {
        title: '树形结构数据',
        url: '/pages/demos/componentDemos/component/tree'
      },
      {
        title: 'topTab',
        url: '/pages/demos/ui/topTab/topTab'
      },
      {
        title: 'topTab2',
        url: '/pages/demos/ui/topTab/topTab2'
      },
      {
        title: '表单',
        url: '/pages/demos/ui/ui1/form'
      },
      {
        title: 'main',
        url: '/pages/demos/ui/ui1/main'
      },
      {
        title: 'top',
        url: '/pages/demos/ui/ui1/top'
      },

      {
        title: 'examination',
        url: '/pages/demos/ui/ui2/examination'
      },
      {
        title: '评分页',
        url: '/pages/demos/ui/ui2/score'
      },
      {
        title: '顶部搜索+底部tabbar',
        url: '/pages/demos/ui/ui2/search_tabbar'
      },
      {
        title: 'search',
        url: '/pages/demos/ui/ui2/search'
      },
      {
        title: '侧滑搜索',
        url: '/pages/demos/ui/ui2/sideslip'
      },
      {
        title: 'room',
        url: '/pages/demos/ui/ui2/study_room'
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