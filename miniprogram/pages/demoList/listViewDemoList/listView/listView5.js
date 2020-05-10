
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
  },

  onLoad() {

    wx.setNavigationBarTitle({
      title: 'tab分页加载-vant'
    })

  },


  onClick(e) {

    const index = e.detail.index
    console.log('-----onClick-----' + index);
  
  },

  onChange(e) {
    const index = e.detail.index
    console.log('-----onChange-----' + index);

  }

})
