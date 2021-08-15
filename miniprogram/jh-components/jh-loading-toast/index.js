// 自定义Toast组件 - loading

Component({

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的属性列表
   */
  properties: {
    isShow: { // 是否显示Loading
      type: Boolean,
      value: false
    },
    img: {
      type: String,
      value: '../../images/weixinLogo.png'
    },
    loadingText: {
      type: String,
      value: '加载中...'
    },
    forbidClick: { //是否禁止背景点击,默认false, 为true点击事件无法穿透
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},
  lifetimes: {
    attached: function () {
      // 页面创建时执行
      // console.info('---jh-loading-toast loaded!---')
      // console.log(this.properties.isShow);  
      // console.log(this.properties.forbidClick);  
    },
    detached: function () {
      // 页面销毁时执行
      // console.info('---jh-loading-toast unloaded!---')
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showLoading() {
      this.setData({
        isShow: true
      })
    },
    hideLoading() {
      this.setData({
        isShow: false
      })
    },
  }
})


/*
使用方法 ：

1. usingComponents 添加
"jh-loading-toast": "./components/jh-loading-toast/index",

2. wxml 添加组件
<jh-loading-toast isShow="{{isShowToast}}"></jh-loading-toast>
<jh-loading-toast isShow="{{isShowToast}}" forbidClick="{{true}}"></jh-loading-toast>

3. js弹出
  data: {
    isShowToast: false
  },
  showLoading() {
    this.setData({
      isShowToast: true
    })
  },
  hideLoading() {
    this.setData({
      isShowToast: false
    })
  },

  var that = this
  this.showLoading()
  that.hideLoading()

*/