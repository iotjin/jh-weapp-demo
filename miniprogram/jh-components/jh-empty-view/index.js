// 空数据组件 , 暂无数据 和网络加载失败两种

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的属性列表
   */
  properties: {
    //  0 暂无数据; 1 网络请求错误;
    emptyType: {
      // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      type: Number,
      value: 0
    },
    verticalTop: {
      type: String,
      value: "200rpx"
    },
    emptyImage: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: "./ic_empty.png" // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    info: {
      type: String,
      value: "暂无数据"
    },
    btnTitle: {
      type: String,
      value: "点击重试"
    },
  },
  lifetimes: {
    attached: function () {
      if (this.properties.emptyType == 0) {
        this.setData({
          info: this.properties.info == '暂无数据' ? '暂无数据' : this.properties.info,
          emptyImage: './ic_empty.png',
          showBtn: false,
        })
      }
      if (this.properties.emptyType == 1) {
        this.setData({
          info: this.properties.info == '暂无数据' ? '网络不给力，点击加载重试' : this.properties.info,
          emptyImage: './ic_netErr.png',
          showBtn: true,
        })
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onClickEmptyBtn() {
      this.triggerEvent('click');
    }
  }
})


/* 
使用方法 ：

1. usingComponents 添加
  "jh-empty-view": "./components/jh-empty-view/index",

2. wxml 添加组件

//不带按钮
<jh-empty-view wx:if="true"></jh-empty-view>
<jh-empty-view wx:if="true" info="暂无数据2"></jh-empty-view>

//带按钮 1
<jh-empty-view wx:if="true" 
emptyType="1" 
bind:click="onClickEmptyBtn">
</jh-empty-view>
//带按钮 2
<jh-empty-view wx:if="true" 
emptyType="1" 
info="暂无数据2" 
btnTitle="按钮文字" 
bind:click="onClickEmptyBtn">
</jh-empty-view>

3. 点击事件
  onClickEmptyBtn:function(e){
    console.log("点击 点击重新加载按钮");
  },

*/