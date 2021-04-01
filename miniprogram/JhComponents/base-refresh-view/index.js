var HTTP = require('../../JhHttpUtils/JhHttpUtils.js');
let currentPage = 0;

Component({
	properties: {
		url: {
			type: String,
			value: ''
		},
		limit: {
			type: Number,
			value: 10
		},
		params: {
			type: Object,
			value: {}
		},
		//首次刷新
		firstRefresh: {
			type: Boolean,
			value: true
		},
		// 加载中
		requesting: {
			type: Boolean,
			value: false,
			observer: 'requestingEnd',
		},
		// 加载完毕
		end: {
			type: Boolean,
			value: false,
		},
		// 控制空状态的显示
		emptyShow: {
			type: Boolean,
			value: false,
		},
		// 空状态的图片
		emptyUrl: {
			type: String,
			value: "./ic_empty.png"
		},
		// 空状态的文字提示
		emptyText: {
			type: String,
			value: "暂无数据"
		},
		// 下拉刷新的高度
		refreshSize: {
			type: Number,
			value: 90,
			observer: 'refreshChange'
		},
		// 顶部高度
		topSize: {
			type: Number,
			value: 0,
		},
		// 底部高度
		bottomSize: {
			type: Number,
			value: 0,
		},
		// 颜色
		color: {
			type: String,
			value: "transparent"
		},
		// iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向，无效
		enableBackToTop: {
			type: Boolean,
			value: false
		}
	},
	data: {
		dataArr: [], //数据的长度和emptyShow控制空状态的显示
		emptyShow: false, //控制空状态的显示
		/* 未渲染数据 */
		mode: 'refresh', // refresh 和 more 两种模式
		successShow: false, // 显示success
		successTran: false, // 过度success
		refreshStatus: 1, // 1: 下拉刷新, 2: 松开更新, 3: 加载中, 4: 加载完成
		move: -65, // movable-view 偏移量
		scrollHeight1: 0, // refresh view 高度负值
		scrollHeight2: 0, // refresh view - success view 高度负值
		timer: null,
		/* 渲染数据 */
		scrollTop: 0,
		overOnePage: false
	},
	methods: {
		// 处理 bindscrolltolower 失效情况
		scroll(e) {
			// 可以触发滚动表示超过一屏
			this.setData({
				overOnePage: true
			});
			clearTimeout(this.data.timer);
			this.setData({
				timer: setTimeout(() => {
					this.setData({
						scrollTop: e.detail.scrollTop
					})
				}, 100)
			});
		},
		// movable-view 滚动监听
		change(e) {
			let refreshStatus = this.data.refreshStatus,
				diff = e.detail.y;
			if (refreshStatus >= 3) return;
			if (diff > -10) {
				this.setData({
					refreshStatus: 2
				});
			} else {
				this.setData({
					refreshStatus: 1
				});
			}
		},
		// movable-view 触摸结束事件
		touchend() {
			let refreshStatus = this.data.refreshStatus;
			if (refreshStatus >= 3) return;
			if (refreshStatus === 2) {
				//刷新
				this.refresh()
			} else if (refreshStatus === 1) {
				this.setData({
					move: this.data.scrollHeight1
				});
			}
		},
		refresh() {
			// wx.vibrateShort();
			this.setData({
				refreshStatus: 3,
				move: 0,
				mode: 'refresh'
			});
			this.triggerEvent('refresh');
			this.requestData()
		},
		//加载更多
		more() {
			// if (!this.properties.end) {
			this.setData({
				mode: 'more'
			});
			this.triggerEvent('more');
			this.requestData(true)
			// }
		},
		/**
		 * 监听 requesting 字段变化, 来处理下拉刷新对应的状态变化
		 */
		requestingEnd(newVal, oldVal) {
			if (this.data.mode === 'more') return;
			if (oldVal === true && newVal === false) {
				setTimeout(() => {
					this.setData({
						successShow: true,
						refreshStatus: 4,
						move: this.data.scrollHeight2
					});
					setTimeout(() => {
						this.setData({
							successTran: true,
							move: this.data.scrollHeight1
						});
						setTimeout(() => {
							this.setData({
								refreshStatus: 1,
								successShow: false,
								successTran: false,
								move: this.data.scrollHeight1
							});
						}, 350)
					}, 50)
				}, 50)
			} else {
				if (this.data.refreshStatus !== 3) {
					this.setData({
						refreshStatus: 3,
						move: 0
					});
				}
			}
		},
		//监听下拉刷新高度变化, 如果改变重新初始化参数, 最小高度80rpx
		refreshChange(newVal, oldVal) {
			if (newVal <= 80) {
				this.setData({
					refreshSize: 80
				});
			}
			// 异步加载数据时候, 延迟执行 init 方法, 防止基础库 2.7.1 版本及以下无法正确获取 dom 信息
			setTimeout(() => this.init(), 10);
		},
		// 初始化scroll组件参数, 动态获取 下拉刷新区域 和 success 的高度
		init() {
			let {
				windowWidth
			} = wx.getSystemInfoSync();
			let successHeight = (windowWidth || 375) / 750 * 70;
			this.createSelectorQuery().select("#refresh").boundingClientRect((res) => {
				this.setData({
					scrollHeight1: -res.height,
					scrollHeight2: successHeight - res.height
				});
				if (this.properties.firstRefresh) {
					setTimeout(() => {
						this.refresh()
					}, 500);
				}
			}).exec();
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
					end: false,
					dataArr: [],
				})
			}
			var params = this.properties.params
			params.page = currentPage
			params.limit = this.properties.limit
			that.isRefresh(true)
			wx.showNavigationBarLoading()
			HTTP.get(url, params).then(res => {
				wx.hideNavigationBarLoading()
				that.isRefresh(false)
				if (res.code == 200) {
					var data = res.data
					if (!data.length) {
						wx.showToast({
							title: '暂无更多数据',
							icon: 'none',
						})
						if (isLoadMore) {
							that.setData({
								end: true
							})
						} else {
							that.setData({
								emptyShow: true
							})
						}
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
				that.isRefresh(false)
				currentPage--
				currentPage = currentPage < 0 ? 0 : currentPage
			});
		},
		isRefresh(isRefresh) {
			this.setData({
				requesting: isRefresh
			})
		},
		//传出的数据
		onReturnData(data) {
			this.setData({
				emptyShow: data.length === 0 ? true : false
			})
			this.triggerEvent("onReturnData", data)
		},
	},
	ready() {
		this.init();
	},

});