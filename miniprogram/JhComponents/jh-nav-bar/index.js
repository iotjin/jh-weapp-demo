// 自定义导航条
const app = getApp();
Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  /**
   * 组件的对外属性
   */
  properties: {
    title: {
      type: String,
      value: '',
    },
    delta: {
      type: Number,
      value: 1
    },
    bgColor: {
      type: String,
      value: '#38BC9D',
    },
    isBack: {
      type: Boolean,
      value: true
    },
    backText: {
      type: String,
      value: ''
    },
    backColor: { //返回文字和返回按钮颜色
      type: String,
      value: 'white'
    },
    homeColor: { //home按钮颜色
      type: String,
      value: 'white'
    },
    titleColor: { //标题颜色
      type: String,
      value: 'white'
    },
    isCustom: {
      type: Boolean,
      value: false
    },
    bgImage: {
      type: String,
      value: '',
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom
  },
  lifetimes: {
    attached: function () {
      // 页面创建时执行
      console.info('---jh-nav-bar loaded!---')
      // console.log(this.data.StatusBar);
      // console.log(this.data.CustomBar);
      // console.log(this.data.Custom);
    },
    detached: function () {
      // 页面销毁时执行
      console.info('---jh-nav-bar unloaded!---')
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onClickBack() {
      console.log('返回上个页面');
      wx.navigateBack({
        delta: this.properties.delta
      });
      this.triggerEvent('clickBack', {})
    },
    onClickHome() {
      console.log('返回主页');
      wx.reLaunch({
        url: '/pages/demoList/demoList',
      })
      this.triggerEvent('clickHome', {})
    }
  }
})