// 底部输入弹框

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
    confirmText: {
      type: String,
      value: '保存'
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
      // console.info('---jh-input-picker loaded!---')
    },
    detached: function () {
      // 页面销毁时执行
      // console.info('---jh-input-picker unloaded!---')
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    textFieldText: '',
    currentLength: 0,
    focus: false,
    isShowTextarea: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //显示Picker
    showPicker: function () {
      this.setData({
        isShow: true
      });
    },
    //隐藏Picker
    hiddePicker: function () {
      this.setData({
        isShow: false,
        isShowTextarea: false
      });
    },
    //将要弹出Picker
    willShowPicker: function (e) {},
    afterEnter: function (e) {
      this.setData({
        isShowTextarea: true
      });
    },
    //输入改变
    onInputChange: function (e) {
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
      this.hiddePicker()
      this.triggerEvent('confirm', inputText);
    }
  }
})


// 输入弹框

/*
使用方法 ：
1. usingComponents 添加
  "jh-input-picker": "../../jh-components/jh-input-picker/index",

2. wxml 添加组件
<jh-input-picker isShow='{{showBottomInputPop}' title="标题" maxLength='50' placeholder='请输入（不超过50字）' bindconfirm='confirm'>
</jh-input-picker>

3.点击事件
  //点击选择器的 确定
  confirm(e){
    console.log('用户点击确定，输入框内容为' + (e.detail ? (':' + e.detail) : '空'))
  },

*/