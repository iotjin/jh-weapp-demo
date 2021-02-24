// 单列文字 选择器
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示选择器
    isShowPicker: {
      type: Boolean,
      value: false,
    },
    // title
    title: {
      type: String,
      value: '请选择',
    },
    // 字符串数组
    textArr: {
      type: Array,
      value: [],
    },
    // 设置默认选中的索引
    selectIndex: {
      type: Number,
      value: 0,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    pickerTextArr: [], //字符串数组
    pickerSelectIndexArr: [], //选中的index数组
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //显示Picker
    showPicker: function () {
      this.setData({
        isShowPicker: true
      });
    },
    //隐藏Picker
    hiddenPicker: function () {
      this.setData({
        isShowPicker: false
      });
    },
    //将要弹出popView
    willShowPopView: function (event) {
      var that = this
      setTimeout(function () {
        that.setData({
          pickerSelectIndexArr: [that.properties.selectIndex]
        })
      }, 300)
    },
    //点击取消按钮
    cancel: function (event) {
      this.setData({
        isShowPicker: false
      });
    },
    //滚动
    onChange: function (event) {
      let value = event.detail.value
      // console.log("滚动" + value);
      this.setData({
        pickerSelectIndexArr: [value[0]]
      })
    },
    //点击确定按钮
    confirm: function (event) {
      let indexArr = this.data.pickerSelectIndexArr
      var selectText = this.data.pickerTextArr[indexArr[0]]
      // console.log("点击确定按钮: " + selectText);
      this.setData({
        isShowPicker: false
      });
      //传递选中的text
      var dic = {
        value: selectText,
        index: indexArr[0]
      }
      this.triggerEvent('confirm', dic);
    }
  },

  lifetimes: {
    detached: function () {
      // 页面销毁时执行
      // console.info('---JhStringPicker unloaded!---')
    },
    attached: function () {
      // 页面创建时执行
      // console.info('---JhStringPicker loaded!---');
      this.setData({
        pickerTextArr: this.properties.textArr
      })
    }
  }

})

/*
使用方法 ：
1. usingComponents 添加
     "string-picker": "../../components/string-picker/index"
     "string-picker": "components/string-picker/index",

2. wxml 添加组件
  
  data: {
    isShowPicker: false,
    stringPickerTextArr: ['一', '二', '三']
  },

// 弹出
<string-picker textArr='{{stringPickerTextArr}}' selectIndex='1' isShowPicker='{{isShowPicker}}' title="请选择" bind:confirm='confirm1'>
</string-picker>

  this.setData({
    isShowPicker: true,
  });

3.点击事件

//点击选择器的 确定
confirm1: function (event){
    var dic = event.detail
    console.log(dic.value);
    console.log(dic.index);
},

*/