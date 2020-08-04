// 输入弹框

/*
使用方法 ：
1. usingComponents 添加
     "JhDialog": "../../JhTools/JhDialog/JhDialog"

2. wxml 添加组件
<JhDialog isShowDialog='{{isShowDialog}}' bind:onConfirm="onConfirm">
</JhDialog>

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
    isShowDialog: {
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
        isShowDialog: true
      });
    },
    //隐藏Dialog
    hiddenDialog: function () {
      this.setData({
        isShowDialog: false
      });
    },
    //将要弹出popView
    willShowPopView: function (event) {},


  }
})
