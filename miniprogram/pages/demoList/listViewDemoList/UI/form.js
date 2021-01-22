var CheckUtils = require('../../../../utils/checkUtils')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowTimePicker: false,
    isShowStringPicker: false,
    stringPickerTextArr: ['一级', '二级', '三级'],
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
    this.setData({
      time: event.detail,
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
  clickSubmitBtn() {
    var isPhone = CheckUtils.isPhone(this.data.phone)
    console.log(isPhone);
  }
})