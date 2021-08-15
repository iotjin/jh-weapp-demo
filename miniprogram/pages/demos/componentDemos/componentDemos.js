Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
        title: 'jh-navbar',
        url: '/pages/demos/componentDemos/component/customNav'
      },
      {
        title: 'jh-custom-navbar',
        url: '/pages/demos/componentDemos/component/customNav2'
      },
      {
        title: 'jh-capsule-navbar',
        url: '/pages/demos/componentDemos/component/customNav3'
      },
      {
        title: 'jh-dropdown-menu',
        url: '/pages/demos/componentDemos/component/dropDownMenu'
      },
      {
        title: 'jh-string-picker',
        url: '/pages/demos/componentDemos/component/stringPickerDemo'
      },
      {
        title: 'jh-ymd-time-picker',
        url: '/pages/demos/componentDemos/component/ymdTimePicker'
      },
      {
        title: 'jh-time-picker',
        url: '/pages/demos/componentDemos/component/timePicker2'
      },
      {
        title: '输入弹框',
        url: '/pages/demos/componentDemos/component/inputPopView'
      },
      {
        title: 'jh-loading-toast',
        url: '/pages/demos/componentDemos/component/toastDemo'
      },
      {
        title: 'jh-empty-view',
        url: '/pages/demos/componentDemos/component/emptyDemo'
      },
      {
        title: 'jh-swiper-view',
        url: '/pages/demos/componentDemos/component/swiperDemo'
      },
      {
        title: 'jh-time-switch',
        url: '/pages/demos/componentDemos/component/timeSwitchDemo'
      },
      {
        title: 'mytree - 树形结构数据1',
        url: '/pages/demos/componentDemos/component/tree'
      },
      {
        title: 'jh-tree - 树形结构数据2',
        url: '/pages/demos/componentDemos/component/tree2'
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