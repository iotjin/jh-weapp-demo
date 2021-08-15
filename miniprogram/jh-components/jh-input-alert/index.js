// 输入弹框  https://github.com/c1aris/Weapp-Demo-Inputbox

Component({
  properties: {
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
    maxlength: {
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
        that.triggerEvent('inputCancel')
      }, 350)
    },
    // 单击确定事件
    onConfirmTap: function () {
      var that = this
      this.hideInputBox()
      setTimeout(function () {
        that.triggerEvent('inputConfirm', that.data.text)
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
          maxlength='140'
          bindinputCancel='onInputCancel'
          bindinputConfirm='onInputConfirm'
          wx:if='{{ showInputAlert }}'>
</jh-input-alert>

  <jh-input-alert title='输入框标题' placeholder='(输入框占位符)' maxlength='10' bindinputCancel='onInputCancel' bindinputConfirm='onInputConfirm' wx:if='{{ showInputAlert }}' />
  <jh-input-alert title='输入框标题' multiline placeholder='(输入框占位符)' maxlength='140' bindinputCancel='onInputCancel' bindinputConfirm='onInputConfirm' wx:if='{{ showInputAlert }}' />

3.js

  data: {
    showInputAlert: false,
  },

  onSinglelineButtonTap: function () {
    this.setData({
      showInputAlert: true
    })
  },

  onMultilineButtonTap: function () {
    this.setData({
      showInputAlert: true
    })
  },

  onInputCancel: function () {
    console.log('用户点击取消')
    this.setData({
      showInputAlert: false,
    })
  },

  onInputConfirm: function (e) {
    console.log('用户点击确定，输入框内容为' + (e.detail ? (':' + e.detail) : '空'))
    this.setData({
      showInputAlert: false,
    })
  }


  ## 参数列表

| 参数名 | 类型 | 必填 | 默认值 | 说明 |
| - | :-: | :-: | :-: | :-: | 
| multiline | Boolean | false | false | 是否为多行输入框 |
| title | String | false | 空 | 输入框标题 |
| placeholder | String | false | 空 | 输入框为空时占位符 |
| maxlength | Number | false | 10 | 最大输入长度，设置为 -1 的时候不限制最大长度 |
| bindinputCancel | String | false | 空 | 点击取消将触发 inputCancel 事件 |
| bindinputConfirm | String | false | 空 | 点击确定将触发 inputConfirm 事件，输入框内容保存在 e.detail 中 |


*/