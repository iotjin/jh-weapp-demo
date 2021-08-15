// 文字列表view

Component({
  
  /**
   * 组件的属性列表
   */
  properties: {
    dataArr: {
      type: Array,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached: function () {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickItem: function (event) {
      let data = event.currentTarget.dataset.item;
      if (data.url) {
        wx.navigateTo({
          url: data.url
        })
      }
      this.triggerEvent('click', data);
    }
  },

})


/*
使用方法 ：
1. usingComponents 添加
 "jh-text-list-view": "../../../jh-components/jh-text-list-view/index"

2. wxml 添加组件
<jh-text-list-view dataArr='{{dataArr}}' bind:click="onClickItem">
</jh-text-list-view>

3.点击事件
  onClickItem:function(e){
   let item = e.detail
    console.log(item);
    let text = item.title;
    if(text=='退出'){
      wx.navigateTo({
        url: url
      })
    }
  }

4.数据格式

    dataArr: [{
        'title': 'title1',
        'info': 'info1',
        'url': '../url',
      },
      {
        'title': 'title2',
        'info': 'info2',
        'url': '../url',
      },
    ]

*/