const CheckUtils = require('../../../../utils/checkUtils')
const TimeUtils = require('../../../../utils/timeUtils');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowTimePicker1: false,
    isShowTimePicker2: false,
    isShowStringPicker: false,
    // 单列选择器对象数组 参考格式（不一定非要用name和id）
    typeDataArr: [{
      name: "一级",
      id: "0"
    }, {
      name: "二级",
      id: "1"
    }, {
      name: "三级",
      id: "2"
    }],
    name: '',
    phone: '',
    question: '',
    time1: '',
    time2: '',
    typeText: '',
    typeId: '',
    isUse: false,
    desc: '',
    imgArr: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onChange1(e) {
    this.setData({
      name: e.detail
    })
  },
  onChange2(e) {
    this.setData({
      phone: e.detail
    })
  },
  onChange3(e) {
    this.setData({
      question: e.detail
    })
  },
  onChange4(e) {
    this.setData({
      desc: e.detail
    })
  },
  switchChange1(e) {
    this.setData({
      isUse: e.detail.value
    });
  },
  onClickTime1() {
    this.setData({
      isShowTimePicker1: true,
    });
  },
  onClickTime2() {
    this.setData({
      isShowTimePicker2: true,
    });
  },
  onClickType() {
    this.setData({
      isShowStringPicker: true,
    });
  },
  confirm1: function (e) {
    let dict = e.detail
    console.log(dict.time);
    console.log(dict.timeStamp);
    // 转成需要的格式
    let newTime = TimeUtils.Jh_timeStampToTime(dict.timeStamp, '{y}-{m}-{d} {h}:{i}:{s} 星期{w}')
    console.log(newTime);
    this.setData({
      time1: dict.time,
    });
  },
  confirm2: function (e) {
    let time = TimeUtils.Jh_timeStampToTime(e.detail, '{y}-{m}-{d}')
    this.setData({
      time2: time,
    });
  },
  confirm3: function (e) {
    let dict = e.detail
    console.log(dict);
    this.setData({
      typeText: dict.name,
      typeId: dict.id,
    });
  },
  onSelectPicture(e) {
    const {
      file
    } = e.detail;
    console.log(e.detail);
    let tempArr = this.data.imgArr
    tempArr.push({
      url: file.url
    })

    this.setData({
      imgArr: tempArr
    })
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    // wx.uploadFile({
    //   url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
    //   filePath: file.url,
    //   name: 'file',
    //   formData: {
    //     user: 'test'
    //   },
    //   success(res) {
    //     // 上传完成需要更新 fileList
    //     const {
    //       fileList = []
    //     } = this.data;
    //     fileList.push({
    //       ...file,
    //       url: res.data
    //     });
    //     this.setData({
    //       fileList
    //     });
    //   },
    // });
  },
  deleteImg(event) {
    let index = event.detail.index
    this.data.imgArr.splice(index, 1)
    this.setData({
      imgArr: this.data.imgArr
    })
  },
  clickSubmitBtn() {
    var isPhone = CheckUtils.isPhone(this.data.phone)
    console.log(isPhone);
    let params = {}

    params.name = this.data.name
    params.phone = this.data.phone
    params.question = this.data.question
    params.time1 = this.data.time1
    params.time2 = this.data.time2
    params.typeId = this.data.typeId
    params.isUse = this.data.isUse
    params.desc = this.data.desc
    params.imgArr = this.data.imgArr
    console.log(JSON.stringify(params));

  }
})