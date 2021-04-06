//自定义Toast组件 - loading

/*
引用：
"jh-toast": "./components/jh-toast/index",

xml
<jh-toast isShow="{{true}}"></jh-toast>
<jh-toast isShow="{{true}}" forbidClick="{{true}}"></jh-toast>

js
  data: {
    isShow: false
  },
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

  var that = this
  this.showLoading()
  that.hideLoading()

*/


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
      // console.log(this.properties.isShow);  
      // console.log(this.properties.forbidClick);  
    },
    detached: function () {}
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
    }

  }
})