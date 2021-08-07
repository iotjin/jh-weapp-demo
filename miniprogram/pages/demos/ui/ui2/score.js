Page({

  /**
   * 页面的初始数据
   */
  data: {
    score: 5,
    scoreText: '非常满意',
    topDic: {
      "id": "1",
      "description": "这是问题描述1",
      "collegeName": "姓名姓名姓名",
      "workOrderCreateTime": "2020-01-30 15:00",
      "workOrderStatus": "1",
      "workOrdertType": "0",
      "evaluationStatus": "1",
    },
    dataArr: [{
      text: '内容asdf一',
      value: 1,
      isSelected: false
    }, {
      text: '内asdf容二',
      value: 1,
      isSelected: false
    }, {
      text: '内容ad三',
      value: 1,
      isSelected: false
    }, {
      text: '内asdf容四',
      value: 1,
      isSelected: false
    }, {
      text: '内容五',
      value: 1,
      isSelected: false
    }, {
      text: '内容二',
      value: 1,
      isSelected: false
    }, {
      text: '内asd容三',
      value: 1,
      isSelected: false
    }, {
      text: '内容四',
      value: 1,
      isSelected: false
    }, {
      text: '内容adsfasdfasdf二',
      value: 1,
      isSelected: false
    }, {
      text: '内asdfasdf容三',
      value: 1,
      isSelected: false
    }, {
      text: '内容四',
      value: 1,
      isSelected: false
    }],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onChange(event) {
    var score = event.detail
    var newScore = score * 2
    var scoreText = ''
    if (newScore == 1) {
      scoreText = '不满意'
    }
    if (newScore == 10) {
      scoreText = '非常满意'
    }
    if (newScore == 2 || newScore == 3 || newScore == 4 || newScore == 5) {
      scoreText = '一般'
    }
    if (newScore == 6 || newScore == 7 || newScore == 8 || newScore == 9) {
      scoreText = '满意'
    }
    this.setData({
      score: event.detail,
      scoreText: scoreText
    });
  },
  clickItem(event) {
    var item = event.currentTarget.dataset.item
    var index = event.currentTarget.dataset.index
    var isSelected = !item.isSelected
    console.log(item);
    console.log(isSelected);
    this.setData({
      ['dataArr[' + index + '].isSelected']: isSelected
    })
  }
})