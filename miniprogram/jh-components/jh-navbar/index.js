// vant 自定义导航条，高度：46px + safeArea.top 

Component({

  /**
   * 组件的一些选项
   */
  options: {
    multipleSlots: true
  },

  /**
   * 组件的属性列表
   */
  properties: {
    // 标题，可设置标题slot，slot name：title
    title: {
      type: String,
      value: '',
    },
    // 是否显示返回按钮，默认为true
    isBack: {
      type: Boolean,
      value: true
    },
    // 背景颜色，通过myStyle设置
    bgColor: {
      type: String,
      value: 'linear-gradient(to bottom, #56ccf2, #2f80ed)'
      // value: '#38BC9D',
    },
    // 背景图片，优先级高于背景颜色
    // 推荐网络图片，如果使用本地图片，图片要转成base64 
    // 图片转base64网站：http://tool.chinaz.com/tools/imgtobase
    bgImage: {
      type: String,
      value: '',
      // value: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
    leftText: {
      type: String,
      value: ''
    },
    // 左侧图片地址，优先级高于leftText，低于左侧slot，设置之后不显示返回按钮
    leftImg: {
      type: String,
      value: ''
    },
    // 左侧slot，优先级最高，slot name：left
    leftSlot: {
      type: Boolean,
      value: false
    },
    // 是否显示下边框，默认为true 
    border: {
      type: Boolean,
      value: false
    },
    delta: {
      type: Number,
      value: 1
    },
    // 跳转失败返回首页，针对分享页未做处理分享之后返回异常
    homeUrl: {
      type: String,
      value: '/pages/demos/demos'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    myStyle: '',
    // myStyle: '--jh-navbar-bgColor:red;'
    // myStyle: '--jh-navbar-bgImage:url(https://img.yzcdn.cn/vant/cat.jpeg)',
  },

  lifetimes: {
    attached: function () {
      // 页面创建时执行
      // console.info('---jh-navbar loaded!---')
    },
    ready: function () {
      this.handleBgColor()
      this.handleBgImage()
    },
    detached: function () {
      // 页面销毁时执行
      // console.info('---jh-navbar unloaded!---')
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickBack() {
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
    onClickLeftItem() {
      this.triggerEvent('left', {})
    },
    handleBgColor() {
      let newStyle = '--jh-navbar-bgColor:' + this.properties.bgColor + ';'
      this.setData({
        myStyle: newStyle
      })
    },
    handleBgImage() {
      let bgImg = this.properties.bgImage
      if (bgImg) {
        if (!new RegExp("http").test(bgImg) && new RegExp("data:image").test(bgImg)) {
          // 把base图片中的回车换行替换为''
          bgImg = bgImg.replace(/[\r\n]/g, '')
        }
        let newStyle = '--jh-navbar-bgImage:url(' + bgImg + ');'
        this.setData({
          myStyle: newStyle
        })
      }
    },
  }
})