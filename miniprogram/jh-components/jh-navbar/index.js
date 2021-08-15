// vant 自定义导航条

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
      value: 'linear-gradient(to bottom, #56ccf2, #2f80ed)',
      // value: '#38BC9D',
    },
    // 网络背景图片，优先级高于背景颜色
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
    delta: {
      type: Number,
      value: 1
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
      let newStyle = '--jh-navbar-bgColor:' + this.properties.bgColor + ';'
      if (this.properties.bgImage) {
        newStyle = '--jh-navbar-bgImage:url(' + this.properties.bgImage + ');'
      }
      this.setData({
        myStyle: newStyle
      })
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
      wx.navigateBack({
        delta: this.properties.delta
      });
      this.triggerEvent('back', {})
    },
    onClickLeftItem() {
      this.triggerEvent('left', {})
    },
  }
})