// miniprogram/pages/one/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '详情',
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

  ClickBack() {

    console.log('点击返回');
    let pages = getCurrentPages(); //页面栈
    console.log(pages);
    let beforePage = pages[pages.length - 2];
    console.log(beforePage);
    console.log(beforePage.route)
    beforePage.setData({      //直接修改上个页面的数据（可通过这种方式直接传递参数）
      day:30
    })
    wx.navigateBack({
      delta: 1,
      success: function () {
        if (beforePage.route == 'pages/one/one') {
          beforePage.reloadData()
        }
      }
    })

  }
})