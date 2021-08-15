Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowPopView2: false,
    currentDateStr1: '',
    currentDateStr2: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },

  ClickTimeBtn1: function () {
    this.setData({
      isShowPopView2: true,
    });
  },
  
  confirm1: function (event) {
    console.log(event.detail);
    this.setData({
      currentDateStr1: event.detail.time,
    });
  },

  ClickTimeBtn2: function () {
    var picker = this.selectComponent('#JhTimePicker2');
    picker.showPicker();
  },
  confirm2: function (event) {
    console.log(event.detail);
    const picker = this.selectComponent('#JhTimePicker2');
    this.setData({
      currentDateStr2: picker.getTime(),
    });
  },

})

// "JhTimePicker": "/jh-components/JhTimePicker/JhTimePicker"