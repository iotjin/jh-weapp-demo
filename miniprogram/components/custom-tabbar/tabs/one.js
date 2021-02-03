// pages/tabs/one.js
var app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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

  },
  lifetimes: {
    detached: function () {},
    attached: function () {
      var userType = app.userType
      console.log('组件1111111');
    }
  },
})