Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        text: 'jh-navbar',
        pathUrl: '/pages/demos/componentDemos/component/customNav'
      },
      {
        text: 'jh-dropdown-menu',
        pathUrl: '/pages/demos/componentDemos/component/dropDownMenu'
      },
      {
        text: 'jh-ymd-time-picker',
        pathUrl: '/pages/demos/componentDemos/component/ymdTimePicker'
      },
      {
        text: 'jh-time-picker',
        pathUrl: '/pages/demos/componentDemos/component/timePicker2'
      },
      {
        text: '输入弹框',
        pathUrl: '/pages/demos/componentDemos/component/inputPopView'
      },
      {
        text: 'jh-empty',
        pathUrl: '/pages/demos/componentDemos/component/empty'
      },
      {
        text: 'jh-swiper',
        pathUrl: '/pages/demos/componentDemos/component/swiper'
      },
      {
        text: 'mytree - 树形结构数据1',
        pathUrl: '/pages/demos/componentDemos/component/tree'
      },
      {
        text: 'jh-tree - 树形结构数据2',
        pathUrl: '/pages/demos/componentDemos/component/tree2'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'Other'
    })
  },


})