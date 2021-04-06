// 文字列表view

/*
使用方法 ：
1. usingComponents 添加
 "jh-text-list-view": "../../../JhComponents/jh-text-list-view/index"

2. wxml 添加组件
<jh-text-list-view listDataArr='{{dataArr}}' bind:clickCell="clickCell">
</jh-text-list-view>

3.点击事件
  clickCell:function(e){
    console.log(e.detail);
    let text = e.detail.title;
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
    }
  ],

*/

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listDataArr: {
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
    onClickCell: function (event) {
      var data = event.currentTarget.dataset.model;
      this.triggerEvent('clickCell', data);
    }
  }
})