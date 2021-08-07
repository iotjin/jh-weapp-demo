// vant 自定义导航条
Component({
  /**
   * 组件的属性列表
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
    onClickBack() {
      console.log('返回上个页面');
      wx.navigateBack({
        delta: this.properties.delta
      });
      this.triggerEvent('clickBack', {})
    },
  }
})