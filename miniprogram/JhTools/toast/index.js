//Toast组件 - loading

/*
引用：
"Toast": "./components/toast/index",

xml
<Toast isShowLoading="{{true}}"></Toast>
<Toast isShowLoading="{{true}}" forbidClick="{{true}}"></Toast>

js
  data: {
    isShowLoading: false
  },
  showLoading() {
    this.setData({
      isShowLoading: true
    })
  },
  hideLoading() {
    this.setData({
      isShowLoading: false
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
    isShowLoading: { // 是否显示Loading
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
      // console.log(this.properties.isShowLoading);  
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
        isShowLoading: true
      })
    },
    hideLoading() {
      this.setData({
        isShowLoading: false
      })
    }

  }
})