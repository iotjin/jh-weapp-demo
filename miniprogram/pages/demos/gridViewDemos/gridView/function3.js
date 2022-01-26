// pages/demos/gridViewDemos/gridView/function2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
      text: '功能1',
      url: './gridView1',
      img: '../../../../images/weixinLogo.png'
    }, {
      text: '功能2',
      url: './gridView2',
      img: '../../../../images/weixinLogo.png'
    }, {
      text: '功能3',
      url: './gridView3',
      img: '../../../../images/weixinLogo.png'
    }, {
      text: '功能4',
      url: './gridView4',
      img: '../../../../images/weixinLogo.png'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'GridView8 - 功能列表3'
    })
  },

  onClickItem(e) {
    let item = e.currentTarget.dataset.item
    console.log(item);
    wx.navigateTo({
      url: item.url
    })


  }
})