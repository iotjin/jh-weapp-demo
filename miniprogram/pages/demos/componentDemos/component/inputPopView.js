Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    showDialog2: false,
    showDialog3: false,
    showDialog4: false,
    dataArr: [{
        text: '弹框1 - model',
      },
      {
        text: 'jh-input-alert - 单行',
      },
      {
        text: 'jh-input-alert - 多行',
      },
      {
        text: 'jh-input-picker',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  ClickCell(event) {
    var data = event.currentTarget.dataset.model;
    var text = data.text;
    console.log(text);
    if (text == "弹框1 - model") {
      this.setData({
        showDialog: true
      });
    }
    if (text == "jh-input-alert - 单行") {
      this.setData({
        showDialog2: true
      });
    }
    if (text == "jh-input-alert - 多行") {
      this.setData({
        showDialog3: true
      });
    }
    if (text == "jh-input-picker") {
      this.setData({
        showDialog4: true
      });


    }

  },


  confirm(e) {
    console.log('用户点击确定，输入框内容为' + (e.detail ? (':' + e.detail) : '空'))
    this.setData({
      showDialog: false,
      showDialog2: false,
      showDialog3: false,
      showDialog4: false,
    });
  },
  cancel() {
    this.setData({
      showDialog: false,
      showDialog2: false,
      showDialog3: false,
      showDialog4: false,
    });
  },



})