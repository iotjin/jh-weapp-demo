//刷新组件
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height: {
      type: String,
      value: '100vh'
    },
    width: {
      type: String,
      value: '100vw'
    },
    background: {
      type: String,
      value: 'white'
    },
    timeout: {
      type: Number,
      value: 4000
    },
    //是否开启上拉加载更多，默认开启
    enablemore: {
      type: Boolean,
      value: true
    }
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用slot支持
  },

  /**
   * 组件的初始数据
   */
  data: {
    isRefreshing: false //正在刷新中
  },
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached: function () {
    // console.log('attached')
  },
  // 在组件实例被从页面节点树移除时执行
  detached: function () {
    // console.log('detached')
    this.endFresh()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //拖拽下拉回调函数
    onPulling(e) {},
    //刷新
    onRefresh(e) {
      this.handleMultipleTriggers()
    },
    //刷新重置
    onRestore(e) {
      this.triggerEvent("onRestore")
    },
    //刷新中断
    onAbort(e) {
      this.triggerEvent("onAbort")
    },
    //刷新结束
    endRefresh() {
      this.setData({
        isRefreshing: false,
      })
      this.triggerEvent("onRefreshEnd")
    },
    //上拉更多
    onLoadMore(e) {
      if (!this.properties.enablemore) {
        return
      }
      this.handleMultipleTriggers(true)
    },
    handleMultipleTriggers(isLoadMore) {
      if (this.data.isRefreshing) return
      this.setData({
        isRefreshing: true
      })
      let that = this
      setTimeout(() => {
        that.endRefresh()
      }, this.properties.timeout)
      if (isLoadMore) {
        this.triggerEvent("onLoadMore")
      } else {
        this.triggerEvent("onRefresh")
      }
    }
  }
})