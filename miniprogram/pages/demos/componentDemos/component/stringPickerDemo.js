// pages/demos/componentDemos/component/pickerDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowStringPicker: false,
    // 对象数组 参考格式（不一定非要用name和id）
    stringPickerDataArr: [{
      name: "一般",
      id: "0"
    }, {
      name: "严重",
      id: "1"
    }],
    name: '',
    id: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onClickItem(e) {
    this.setData({
      isShowStringPicker: true,
    });
  },
  //点击选择器的 确定
  confirm1: function (event) {
    let dict = event.detail
    console.log(dict);
    this.setData({
      name: dict.name,
      id: dict.id,
    });
  },

})