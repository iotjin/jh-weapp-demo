// pages/demos/componentDemos/component/pickerDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
      'title': '显示 jh-string-picker',
      'info': '',
    }, ],
    isShowPicker: false,
    stringPickerTextArr: [{
      name: "一般",
      id: "0"
    }, {
      name: "严重",
      id: "1"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onClickItem(e) {
    console.log(e);
    this.setData({
      isShowPicker: true,
    });
  },
  //点击选择器的 确定
  confirm1: function (event) {
    let dic = event.detail
    console.log(dic.value);
    console.log(dic.index);
  },

})