// 单列文字 选择器
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示选择器
    isShow: {
      type: Boolean,
      value: false,
    },
    // title
    title: {
      type: String,
      value: '请选择',
    },
    // 对象数组 格式：[{name: "一般", id: "0"},{name: "严重", id: "1"}]
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
        isShow: true
      });
    },
    //隐藏Picker
    hiddenPicker: function () {
      this.setData({
        isShow: false
      });
    },
    //将要弹出popView
    willShowPopView: function (event) {
      var that = this
      setTimeout(function () {
        that.setData({
          pickerTextArr: that.properties.textArr,
          pickerSelectIndexArr: [that.properties.selectIndex]
        })
      }, 300)
    },
    //点击取消按钮
    onCancel: function (event) {
      this.setData({
        isShow: false
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
    onConfirm: function (event) {
      let indexArr = this.data.pickerSelectIndexArr
      let selectText = this.data.pickerTextArr[indexArr[0]].name
      let selectIndex = this.data.pickerTextArr[indexArr[0]].id
      // console.log("点击确定按钮: " + selectText);
      this.setData({
        isShow: false
      });
      //传递选中的text
      var dic = {
        value: selectText,
        index: selectIndex
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
    }
  }

})

/*
使用方法 ：
1. usingComponents 添加
     "jh-string-picker": "../../components/jh-string-picker/index"
     "jh-string-picker": "components/jh-string-picker/index",

2. wxml 添加组件
  
  data: {
    isShowPicker: false,
    stringPickerTextArr: [{name: "一般", id: "0"},{name: "严重", id: "1"}]
  },

// 弹出
<jh-string-picker textArr='{{stringPickerTextArr}}' selectIndex='1' isShow='{{isShowPicker}}' title="请选择" bind:confirm='confirm1'>
</jh-string-picker>

  this.setData({
    isShow: true,
  });

3.点击事件

//点击选择器的 确定
confirm1: function (event){
    var dic = event.detail
    console.log(dic.value);
    console.log(dic.index);
},

*/