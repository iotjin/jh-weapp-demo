// 输入弹框

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    // 是否为多行输入框，默认false
    multiline: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: ''
    },
    maxLength: {
      type: Number,
      value: 10
    }
  },
  data: {
    modalBottom: '',
    modalHeight: '',
    text: '',
    shadowAnimation: 'shadowDisplay',
    modalAnimation: 'modalDisplay',
    shadowOpacity: '0.65',
    modalOpacity: '1'
  },
  attached: function () {
    var res = wx.getSystemInfoSync()
    this.setData({
      modalBottom: this.data.multiline ? (res.screenHeight - 234).toString() : (res.screenHeight - 178).toString(),
      modalHeight: this.data.multiline ? '468' : '355'
    })
  },
  methods: {
    // 监听用户输入
    onInput: function (e) {
      this.setData({
        text: e.detail.value
      })
    },
    // 隐藏输入框
    hideInputBox: function () {
      this.setData({
        shadowAnimation: 'shadowHide',
        modalAnimation: 'modalHide',
        shadowOpacity: '0',
        modalOpacity: '0'
      })
    },
    // 单击取消事件
    onCancelTap: function () {
      var that = this
      this.hideInputBox()
      setTimeout(function () {
        that.triggerEvent('cancel')
      }, 350)
    },
    // 单击确定事件
    onConfirmTap: function () {
      var that = this
      this.hideInputBox()
      setTimeout(function () {
        that.triggerEvent('confirm', that.data.text)
      }, 350)
    },
    // 捕获背景的点击事件以防止冒泡
    tapCatcher: function () {}
  }
})

/*
使用方法 ：
1. usingComponents 添加
    "jh-input-alert": "../../../jh-components/jh-input-alert/index"

2. wxml 添加组件
<jh-input-alert title='输入框标题'
          multiline
          placeholder='(输入框占位符)'
          maxLength='140'
          bind:cancel='onInputCancel'
          bind:confirm='onInputConfirm'
          wx:if='{{ isShowInputAlert }}'>
</jh-input-alert>

  <jh-input-alert title='输入框标题' placeholder='(输入框占位符)' maxLength='10' bind:cancel='onInputCancel' bind:confirm='onInputConfirm' wx:if='{{ isShowInputAlert }}' />
  <jh-input-alert title='输入框标题' multiline placeholder='(输入框占位符)' maxLength='140' bind:cancel='onInputCancel' bind:confirm='onInputConfirm' wx:if='{{ isShowInputAlert }}' />

3.js

  data: {
    isShowInputAlert: false,
  },

  onSinglelineButtonTap: function () {
    this.setData({
      isShowInputAlert: true
    })
  },

  onMultilineButtonTap: function () {
    this.setData({
      isShowInputAlert: true
    })
  },

  onInputCancel: function () {
    console.log('用户点击取消')
    this.setData({
      isShowInputAlert: false,
    })
  },

  onInputConfirm: function (e) {
    console.log('用户点击确定，输入框内容为' + (e.detail ? (':' + e.detail) : '空'))
    this.setData({
      isShowInputAlert: false,
    })
  }

*/