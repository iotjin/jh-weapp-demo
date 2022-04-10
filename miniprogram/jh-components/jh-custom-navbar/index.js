// 自定义导航条

const app = getApp();
Component({

  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: false,
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
    home: {
      type: Boolean,
      value: false
    },
    homeUrl: {
      type: String,
      value: '/pages/demos/demos'
    },
    // 背景图片，优先级高于背景颜色
    // 背景图片。推荐网络图片，如果使用本地图片，图片要转成base64 
    // 图片转base64网站：http://tool.chinaz.com/tools/imgtobase
    bgImage: {
      type: String,
      value: '',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: app.globalData.kStatusBarHeight,
    customNavHeight: app.globalData.kCustomNavHeight,
    capsule: app.globalData.kCapsule
  },

  lifetimes: {
    attached: function () {
      // 页面创建时执行
      // console.info('---jh-nav-bar loaded!---')
      // console.log(this.data.statusBarHeight);
      // console.log(this.data.customNavHeight);
      // console.log(this.data.capsule);
      this.handleLocalImage()
    },
    detached: function () {
      // 页面销毁时执行
      // console.info('---jh-nav-bar unloaded!---')
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickBack() {
      // console.log('返回上个页面');
      let that = this
      wx.navigateBack({
        delta: this.properties.delta,
        fail: function (err) {
          // 跳转失败返回首页，针对分享页未做处理分享之后返回异常
          wx.reLaunch({
            url: that.properties.homeUrl,
          })
        },
      });
      this.triggerEvent('back', {})
    },
    onClickHome() {
      // console.log('返回主页');
      wx.reLaunch({
        url: this.properties.homeUrl,
      })
      this.triggerEvent('home', {})
    },
    handleLocalImage() {
      let bgImg = this.properties.bgImage
      if (bgImg) {
        if (!new RegExp("http").test(bgImg) && new RegExp("data:image").test(bgImg)) {
          // 把base图片中的回车换行替换为''
          let base64 = bgImg.replace(/[\r\n]/g, '')
          this.setData({
            bgImage: base64
          })
        }
      }
    },
  }
})