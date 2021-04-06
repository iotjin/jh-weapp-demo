// 输入弹框

/*
使用方法 ：
1. usingComponents 添加
     "jh-dialog": "../../JhComponents/jh-dialog/index"

2. wxml 添加组件
<jh-dialog isShow='{{isShow}}' bind:onConfirm="onConfirm">
</jh-dialog>

3.点击事件
  //点击选择器的 确定
  onConfirm(event) {
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
  },

  lifetimes: {
    attached: function () {
      // 页面创建时执行
      // console.info('---JhDialog loaded!---')
    },
    detached: function () {
      // 页面销毁时执行
      // console.info('---JhDialog unloaded!---')
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //显示PopView
    showDialog: function () {
      this.setData({
        isShow: true
      });
    },
    //隐藏Dialog
    hiddenDialog: function () {
      this.setData({
        isShow: false
      });
    },
    //将要弹出popView
    willShowPopView: function (event) {},


  }
})