// 底部输入弹框

// 输入弹框

/*
使用方法 ：
1. usingComponents 添加
  "JhBottomInputPop": "../../JhTools/JhBottomInputPop/JhBottomInputPop",

2. wxml 添加组件
<JhBottomInputPop isShow='{{showBottomInputPop}' title="标题" maxLength='50' placeholder='请输入（不超过50字）' bindonConfirm='confirm'>
</JhBottomInputPop>

3.点击事件
  //点击选择器的 确定
  confirm(e){
    console.log('用户点击确定，输入框内容为' + (e.detail ? (':' + e.detail) : '空'))
  },


*/


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: '添加'
    },
    okText: {
      type: String,
      value: '确定'
    },
    placeholder: {
      type: String,
      value: '请输入'
    },
    maxLength: {
      type: Number,
      value: 20
    },
  },

  lifetimes: {
    attached: function () {
      // 页面创建时执行
      // console.info('---JhBottomInputPop loaded!---')
    },
    detached: function () {
      // 页面销毁时执行
      // console.info('---JhBottomInputPop unloaded!---')
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    textFieldText: '',
    currentLength: 0,
    focus: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //显示PopView
    showPopView: function () {
      this.setData({
        isShow: true
      });
    },
    //隐藏PopView
    hiddePopView: function () {
      this.setData({
        isShow: false
      });
    },
    //将要弹出popView
    willShowPopView: function (e) {},
    //输入改变
    inputChange: function (e) {
      var textFieldText = e.detail.value; //输入的内容
      var value = e.detail.value.length; //输入内容的长度
      var currentLength = value; //剩余字数
      // console.log('输入的内容 :' + textFieldText);
      this.setData({
        textFieldText: textFieldText,
        currentLength: currentLength
      })
    },
    //点击确定
    onConfirm: function (e) {
      var inputText = this.data.textFieldText
      this.hiddePopView()
      this.triggerEvent('onConfirm', inputText);
    }
  }
})