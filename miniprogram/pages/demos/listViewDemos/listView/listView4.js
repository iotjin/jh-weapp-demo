// pages/demos/listViewDemos/listView/listView4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    arr:['1','2','3','4'],
    tabs: [],
    arr2: [],
    activeTab: 0,
  },

  onLoad() {

    wx.setNavigationBarTitle({
      title: 'tab分页加载'
    })

    const titles = ['首页', '外卖', '商超生鲜', '购物', '美食饮品', '生活服务', '休闲娱乐', '出行']
    const tabs = titles.map(item => ({ title: item }))
    this.setData({ tabs })
    this.setData({ arr2: ['11', '22', '33', '44'] })
  },

  onTabCLick(e) {
    const index = e.detail.index
    console.log('----------'+index);
    this.setData({ activeTab: index })
  },

  onChange(e) {
    const index = e.detail.index
    console.log('----------'+index);
    this.setData({ activeTab: index })
  }

})
