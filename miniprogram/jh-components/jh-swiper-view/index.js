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
      let {
        current,
        source
      } = e.detail
      if (source === 'autoplay' || source === 'touch') {
        //根据官方 source 来进行判断swiper的change事件是通过什么来触发的，autoplay是自动轮播。touch是用户手动滑动。其他的就是未知问题。抖动问题主要由于未知问题引起的，所以做了限制，只有在自动轮播和用户主动触发才去改变current值，达到规避了抖动bug
        this.setData({
          currentIndex: current
        })
      }

    },
    onClickItem(event) {
      var item = event.currentTarget.dataset.item
      this.triggerEvent('click', item)
    },
  }
})