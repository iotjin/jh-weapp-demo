/*
 空数据展示 , 暂无数据 和网络加载失败两种
*/

/*
使用方法 ：
1. usingComponents 添加
     "JhEmptyView": "../../JhComponents/JhEmptyView/JhEmptyView"

2. wxml 添加组件
<JhTextListView listDataArr='{{dataArr}}' bind:clickCell="clickCell">
</JhTextListView>


<JhEmptyView id='JhEmptyView'
isShowEmptyView ="true"
info="暂无明细，快去记一笔"
emptyType = "1"
bind:ClickEmptyBtn="ClickEmptyBtn"
></JhEmptyView>

3.点击事件
  ClickEmptyBtn:function(e){
    console.log("点击 点击重新加载按钮");

  },


*/



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
      type: String,
      value: '0'
    },
    isShowEmptyView: {
      type: Boolean,
      value: false
    }, 
    verticalTop: {
      type: String,
      value: "0rpx"
    },
    emptyImage: {
      type: String,
      value: "./ic_noData.png"
    },
    info: {
      type: String,
      value: "暂无数据"
    },
    buttonTitle: {
      type: String,
      value: "点击重试"
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {

    attached: function () {
      if (this.properties.emptyType == 0) {
        this.setData({
          info: this.properties.info == '暂无数据' ? '暂无数据' : this.properties.info,
          emptyImage:'./ic_noData.png'
        })
      }
      if (this.properties.emptyType == 1) {
        this.setData({
          info: '网络不给力，点击加载重试',
          emptyImage:'./ic_netErr.png' ,
        })
      }
    }

  },

  /**
   * 组件的方法列表
   */
  methods: {
    ClickBtn() {
      this.triggerEvent('ClickEmptyBtn');
    }
  }
})