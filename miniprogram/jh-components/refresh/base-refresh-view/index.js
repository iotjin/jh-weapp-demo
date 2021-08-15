//刷新组件
var HTTP = require('../../../http/httpUtils.js');
let currentPage = 0;

Component({

  options: {
    virtualHost: true,
    addGlobalClass: false,
    multipleSlots: true // 在组件定义时的选项中启用slot支持
  },

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
      value: 1000
    },
    //是否开启上拉加载更多，默认开启
    enablemore: {
      type: Boolean,
      value: true
    },
    url: {
      type: String,
      value: ''
    },
    limit: {
      type: Number,
      value: 100
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    isRefreshing: false, //正在刷新中
    dataArr: [],
  },
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached: function () {
    // console.log('attached')
    this.onRefresh()
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
      setTimeout(() => {
        this.setData({
          isRefreshing: false,
        })
        this.triggerEvent("onRefreshEnd")
      }, this.properties.timeout)
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
      if (isLoadMore) {
        this.triggerEvent("onLoadMore")
        this.requestData(isLoadMore);
      } else {
        this.triggerEvent("onRefresh")
        this.requestData();
      }
    },
    //请求数据
    requestData: function (isLoadMore) {
      let url = this.properties.url
      if (!url.length) {
        wx.showToast({
          title: '请求地址为空！',
          icon: 'none',
        })
        return
      }
      var that = this
      if (isLoadMore) {
        currentPage++;
      } else {
        currentPage = 0;
        this.setData({
          dataArr: [],
        })
      }
      var params = {
        page: currentPage,
        limit: this.properties.limit,
      }
      wx.showNavigationBarLoading()
      HTTP.post(url, params).then(res => {
        wx.hideNavigationBarLoading()
        that.endRefresh()
        if (res.code == 200) {
          var data = res.data
          if (!data.length) {
            wx.showToast({
              title: '暂无更多数据',
              icon: 'none',
            })
            return
          }
          if (isLoadMore) {
            that.setData({
              dataArr: that.data.dataArr.concat(data),
            })
          } else {
            that.setData({
              dataArr: data,
            })
          }
          that.onReturnData(that.data.dataArr)
        } else {
          currentPage--
          currentPage = currentPage < 0 ? 0 : currentPage
        }
      }).catch(error => {
        wx.hideNavigationBarLoading()
        that.endRefresh()
        currentPage--
        currentPage = currentPage < 0 ? 0 : currentPage
      });
    },
    //传出的数据
    onReturnData(data) {
      this.triggerEvent("onReturnData", data)
    },
  }
})