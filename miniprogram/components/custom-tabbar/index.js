// components/custom-tabbar/index.js
var app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //  tabbar 数组
    list: {
      type: Array,
      value: []
    },
  },
  data: {
    selected: 0,
    isShowTabbar: true,
    color: "#7d7e80",
    selectedColor: "#1989fa",
    tabbars: [],
    tabbars0: [{
        isShowRedDot: true,
        info: '',
        text: '模块一',
        iconPath: 'https://img.yzcdn.cn/vant/user-inactive.png',
        selectedIconPath: 'https://img.yzcdn.cn/vant/user-active.png',
      },
      {
        isShowRedDot: false,
        info: '5',
        text: '模块二',
        iconPath: 'https://img.yzcdn.cn/vant/user-inactive.png',
        selectedIconPath: 'https://img.yzcdn.cn/vant/user-active.png',
      },
      {
        isShowRedDot: false,
        info: '5',
        text: '模块三',
        iconPath: 'https://img.yzcdn.cn/vant/user-inactive.png',
        selectedIconPath: 'https://img.yzcdn.cn/vant/user-active.png',
      }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChangeTabbar(event) {
      var index = event.detail
      this.setData({
        selected: index
      });
      this.triggerEvent('onChangeTabbar', this.data.selected);
    }
  },
  lifetimes: {
    detached: function () {},
    attached: function () {
      this.setData({
        tabbars: this.properties.list
      })
    }
  },

})