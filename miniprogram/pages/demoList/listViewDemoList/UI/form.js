var CheckUtils = require('../../../../utils/checkUtils')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowTimePicker: false,
    isShowStringPicker: false,
    stringPickerTextArr: [{
      name: "一级",
      id: "0"
    }, {
      name: "二级",
      id: "1"
    }, {
      name: "三级",
      id: "2"
    }],
    userName: '',
    name: '',
    phone: '',
    question: '',
    time: '',
    level: '',
    desc: '',
    fileList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onChange2(e) {
    this.setData({
      phone: e.detail
    })
  },

  clickUser(e) {},
  clickTime() {
    this.setData({
      isShowTimePicker: true,
    });
  },
  clickLevel() {
    this.setData({
      isShowStringPicker: true,
    });
  },

  confirm1: function (event) {
    console.log(event);
    this.setData({
      time: event.detail.time,
    });
  },
  confirm2: function (event) {
    var dic = event.detail
    // console.log(dic.value);
    // console.log(dic.index);
    this.setData({
      level: dic.value,
    });
  },
  afterRead(event) {
    const {
      file
    } = event.detail;
    console.log(event.detail);
    var fileList = this.data.fileList
    fileList.push({
      url: file.url
    })

    this.setData({
      fileList: fileList
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
    this.data.fileList.splice(index, 1)
    this.setData({
      fileList: this.data.fileList
    })
  },
  clickSubmitBtn() {
    var isPhone = CheckUtils.isPhone(this.data.phone)
    console.log(isPhone);
  }
})