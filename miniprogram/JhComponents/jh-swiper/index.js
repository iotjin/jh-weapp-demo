// 轮播图

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataArr: {
      type: Array,
      value: []
    },
    activeColor: {
      type: String,
      value: 'white',
    },
    otherColor: {
      type: String,
      value: 'gray',
    },
    interval: {
      type: Number,
      value: 3000,
    },
    isCard: {
      type: Boolean,
      value: false,
    },
    currentIndex: {
      type: Number,
      value: 0,
    },
    autoplay: {
      type: Boolean,
      value: true,
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
    onChange(e) {
      this.setData({
        currentIndex: e.detail.current
      })
    },
    onClickItem(event) {
      var item = event.currentTarget.dataset.item
      this.triggerEvent('clickItem', item)
    },
  }
})