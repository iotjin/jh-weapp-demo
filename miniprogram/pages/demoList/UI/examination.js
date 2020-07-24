// miniprogram/pages/main/examination/examination.js

var TimeUtils = require('../../../utils/timeUtils.js');
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIPhoneX: app.isIPhoneX,
    endTime: '2020-07-20 13:40:23',
    timeData: {},
    currentNum: 0,
    allNum: 0,
    subjects: [{
        score: 1,
        type: "单选题",
        question: "这是题目内容。这是题目内容。这是题目内容。这是题目内容。这是题目内容。这是题目内容。这是题目内容。这是题目内容。这是题目内容。这是题目内容。这是题目内容。",
        option: ["A.选项一", "B.选项二", "C.选项三", "D.选项四"],
        answer: "A",
        myanswer: [],
        tip: "这里解析这是解析",
        isTrue: false,
        optionSelected: [true, false, false, false],

      },
      {
        score: 1,
        type: "多选题",
        question: "这是多选....这是多选。这是多选这是多选。这是多选这是多选。这是多选这是多选。这是多选这是多选。",
        option: ["A.选项1", "B.选项2", "C.选项3", "D.选项4"],
        answer: "AB",
        myanswer: [],
        tip: "这里解析这是解析",
        isTrue: false,
        optionSelected: [false, false, false, false],
      },
      {
        score: 1,
        type: "多选题",
        question: "这是多选这是多选。这是多选这是多选。这是多选这是多选。这是多选这是多选。这是多选这是多选。",
        option: ["A.选项1", "B.选项2", "C.选项3", "D.选项4"],
        answer: "AC",
        myanswer: [],
        tip: "这里解析这是解析",
        isTrue: false,
        optionSelected: [false, false, false, false],
      },
      {
        score: 1,
        type: "判断题",
        question: "这是判断。这是判断。这是判断。这是判断。这是判断。这是判断。这是判断。",
        option: ["对", "错"],
        answer: "对",
        myanswer: [],
        tip: "这里是提示这里是提示",
        isTrue: false,
        optionSelected: [false, false, false, false],
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var currentDate = new Date().getTime();
    let endDate = TimeUtils.Jh_convertTimeStamp(this.data.endTime)
    endDate = endDate - currentDate
    endDate = 1 * 3600 * 1000
    this.setData({
      allNum: this.data.subjects.length,
      endTime: endDate
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
  onShow: function () {},

  //倒计时
  onTimeChange(e) {
    this.setData({
      timeData: e.detail,
    });
  },
  //倒计时结束
  TimeEnd(e) {
    console.log("倒计时结束了");

  },

  //点击选项
  ClickOptionBtn: function (e) {
    const {
      text,
      index
    } = e.currentTarget.dataset
    // console.log(text);
    // console.log(index);

    var type = this.data.subjects[this.data.currentNum].type
    var optionSelectedArr = this.data.subjects[this.data.currentNum].optionSelected
    var myanswerArr = this.data.subjects[this.data.currentNum].myanswer
    let isTrue = false
    let answerStr = this.data.subjects[this.data.currentNum].answer

    var myanswerKey = 'subjects[' + this.data.currentNum + '].myanswer'
    var optionSelectedKey = 'subjects[' + this.data.currentNum + '].optionSelected'
    let isTrueKey = 'subjects[' + this.data.currentNum + '].isTrue';

    var selectOptionStr = index == 0 ? 'A' : (index == 1 ? 'B' : (index == 2 ? 'C' : (index == 3 ? 'D' : (index == 4 ? 'E' : 'F'))))

    //处理选中和答案 数据
    if (type == "单选题") {
      myanswerArr = [selectOptionStr]
      for (let i = 0; i < optionSelectedArr.length; i++) {
        optionSelectedArr[i] = index == i ? true : false
      }
    }
    if (type == "判断题") {
      myanswerArr = index == 0 ? ['对'] : ['错']
      for (let i = 0; i < optionSelectedArr.length; i++) {
        optionSelectedArr[i] = index == i ? true : false
      }
    }
    if (type == "多选题") {
      //选中某项，某项的值取反
      for (let i = 0; i < optionSelectedArr.length; i++) {
        if (index == i) {
          optionSelectedArr[i] = !optionSelectedArr[i]
          //选中
          if (optionSelectedArr[i] == true) {
            myanswerArr.push(selectOptionStr)
          } else {
            //取消选中
            let index = myanswerArr.indexOf(selectOptionStr)
            if (index >= 0) {
              myanswerArr.splice(index, 1)
            }
          }
        }
      }
    }
    this.setData({
      [myanswerKey]: myanswerArr,
      [optionSelectedKey]: optionSelectedArr
    })

    // console.log(optionSelectedArr);
    // console.log(myanswerArr);

    //判断是否做对
    if (type == "单选题" || type == "判断题") {
      if (answerStr.length == 1) {
        let A = answerStr.substr(0, 1)
        isTrue = myanswerArr.indexOf(A) >= 0
      }
    }
    if (type == "多选题") {

      var AnsterArr = answerStr.split('')
      if (myanswerArr.length == AnsterArr.length) {
        for (let index = 0; index < AnsterArr.length; index++) {
          let str = AnsterArr[index];
          if (myanswerArr.indexOf(str) >= 0) {
            isTrue = true
          } else {
            isTrue = false
            break
          }
        }
      } else {
        isTrue = false
      }
    }
    this.setData({
      [isTrueKey]: isTrue,
    })

    // console.log(isTrue);

  },

  //上一题
  ClickLastBtn: function (e) {
    let currentNum = this.data.currentNum
    var currentType = this.data.subjects[currentNum].type
    if (currentNum != 0) {
      currentNum--
      var lastType = this.data.subjects[currentNum].type
      this.setData({
        currentNum: currentNum
      })
      if (currentType != lastType) {
        wx.showToast({
          title: lastType,
          icon: 'none'
        })
      }
    } else {
      wx.showToast({
        title: '当前为第一题',
        icon: 'none'
      })
    }
  },
  //下一题
  ClickNextBtn: function (e) {
    let currentNum = this.data.currentNum
    let allNum = this.data.allNum
    var currentType = this.data.subjects[currentNum].type
    //切换题数
    if (currentNum + 1 < allNum) {
      currentNum++
      var nextType = this.data.subjects[currentNum].type
      this.setData({
        currentNum: currentNum
      })
      if (currentType != nextType) {
        wx.showToast({
          title: nextType,
          icon: 'none'
        })
      }
    } else {
      wx.showToast({
        title: '最后一题啦',
        icon: 'none'
      })
    }
  },
  //交卷 
  ClickSubmitBtn() {
    let dataArr = this.data.subjects
    let score = 0
    for (let index = 0; index < dataArr.length; index++) {
      if (dataArr[index].isTrue) {
        score++
      }
    }
    console.log(dataArr);

  },

})