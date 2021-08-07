Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowPop: false,
    isShowTimePicker: false,
    time: '',
    workOrdertType: [{
      isSelected: false,
      text: '类型一'
    }, {
      isSelected: false,
      text: '类型二'
    }, {
      isSelected: false,
      text: '类型三'
    }],
    level: [{
      isSelected: false,
      text: '一般'
    }, {
      isSelected: false,
      text: '严重'
    }, {
      isSelected: false,
      text: '紧急'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onClickRightItem() {
    console.log('点击筛选');
    this.setData({
      isShowPop: true
    })
  },
  onClose() {
    this.setData({
      isShowPop: false
    });
  },
  myMove() {
    // return
  },
  clickReset() {
    var workOrdertType = [{
      isSelected: false,
      text: '类型一'
    }, {
      isSelected: false,
      text: '类型二'
    }, {
      isSelected: false,
      text: '类型三'
    }]
    var level = [{
      isSelected: false,
      text: '一般'
    }, {
      isSelected: false,
      text: '严重'
    }, {
      isSelected: false,
      text: '紧急'
    }]

    this.setData({
      workOrdertType: workOrdertType,
      level: level,
      startDate: ''
    })

  },
  clickSearch() {

  },
  clickType(event) {
    var item = event.currentTarget.dataset.item
    var index = event.currentTarget.dataset.index
    var isSelected = !item.isSelected
    console.log(item);
    console.log(isSelected);
    this.setData({
      ['workOrdertType[' + index + '].isSelected']: isSelected
    })
  },
  clickLevel(event) {
    var item = event.currentTarget.dataset.item
    var index = event.currentTarget.dataset.index
    var isSelected = !item.isSelected
    console.log(item);
    console.log(isSelected);
    this.setData({
      ['level[' + index + '].isSelected']: isSelected
    })
  },
  clickStartDate() {
    this.setData({
      isShowTimePicker: true,
    });
  },
  confirm1: function (event) {
    this.setData({
      time: event.detail,
      startDate: event.detail,
    });
  },

})