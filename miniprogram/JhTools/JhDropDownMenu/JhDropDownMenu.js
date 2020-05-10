/* 下拉菜单组件 JhDropDownMenu

默认展示array 的第0个item。设置index 展示指定item，
设置hintText,优先展示提示文字，提示文字默认不显示

*/

Component({

  /**
   * 组件的属性列表
   */

  externalClasses: ['menu-bg', 'menu-content'], //不能使用小驼峰命名，只能用 -或 _
  properties: {
    array: { //模型数组
      type: Array,
    },
    index: { //选中索引，默认0
      type: Number,
      value: 0
    },
    hintText: { //提示文字，默认''
      type: String,
      value: "",
    },
    width: { //菜单的宽度，默认'80px'
      type: String,
      value: "80px",
    },
    bgColor: { //背景颜色，默认'white'
      type: String,
      value: "white",
    },
    maskColor: { //蒙版背景颜色，默认'white'
      type: String,
      value: "transparent",
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false, //初始option不显示
    selectText: '',
    animationData: {}, //右边箭头的动画
    listView_x:'', 
    listView_y:'', 
    listView_w:'',
  },


  lifetimes: {
    attached: function () {
      this.setData({
        selectText: this.properties.hintText.length > 0 ? this.properties.hintText : this.properties.array[this.properties.index].text
      })

      // wx.createSelectorQuery().select('#menuBgView').boundingClientRect(function (rect) {
      //   console.log(rect.width)
      //   // rect.id      // 节点的ID
      //   // rect.dataset // 节点的dataset
      //   // rect.left    // 节点的左边界坐标
      //   // rect.right   // 节点的右边界坐标
      //   // rect.top     // 节点的上边界坐标
      //   // rect.bottom  // 节点的下边界坐标
      //   // rect.width   // 节点的宽度
      //   // rect.height  // 节点的高度
      // }).exec()

      var that = this;
      this.createSelectorQuery().select('#menuBgView').boundingClientRect(function (rect) {
        // console.log(rect)
        that.setData({
          listView_x: rect.left + 'px',
          listView_y: rect.top + 32 + 'px',
          listView_w: rect.width + 'px',
        })
      }).exec();

      // 页面创建时执行
      console.info('---JhDropDownMenu loaded!---')
    },
    detached: function () {
      // 页面销毁时执行
      console.info('---JhDropDownMenu unloaded!---')
    },

  },


  /**
   * 组件的方法列表
   */
  methods: {

    //option的显示与否
    clickMenu: function(e) {
      // console.log(e)   
      // // console.log(e.currentTarget.offsetLeft)
      // // console.log(e.currentTarget.offsetTop)
      // var that = this;
      // this.createSelectorQuery().select('#menuBgView').boundingClientRect(function (rect) {
      //   // console.log(rect)
      //   that.setData({
      //     // listView_x: e.currentTarget.offsetLeft + 'px',
      //     // listView_y: e.currentTarget.offsetTop + 32 + 'px',
      //     listView_x: rect.left + 'px',
      //     listView_y: rect.top + 32 + 'px',
      //     listView_w: rect.width + 'px',
      //   })
      // }).exec();

      var nowShow = this.data.isShow; //获取当前option显示的状态
      //创建动画
      var animation = wx.createAnimation({
        timingFunction: "ease"
      })
      this.animation = animation;
      if (nowShow) {
        animation.rotate(0).step();
        this.setData({
          animationData: animation.export()
        })
      } else {
        animation.rotate(180).step();
        this.setData({
          animationData: animation.export()
        })
      }
      this.setData({
        isShow: !nowShow
      })
    },

    //点击某一行item 设置内容
    clickItem: function(e) {
 
      var arr = this.properties.array; //当前option的数据是引入组件的页面传过来的，所以这里获取数据只有通过this.properties
      var id = e.target.dataset.index; //当前点击的索引
      var selText = arr[id].text; //当前点击的内容
      //再次执行动画，注意这里一定，一定，一定是this.animation来使用动画
      this.animation.rotate(0).step();
      this.setData({
        isShow: false,
        selectText: selText,
        animationData: this.animation.export()
      })
      var selItem = {
        id: id,
        text: selText
      }
      this.triggerEvent('clickItem', selItem)
    },
    clickMaskHidden: function() {

      //再次执行动画，注意这里一定，一定，一定是this.animation来使用动画
      this.animation.rotate(0).step();
      this.setData({
        isShow: false,
        animationData: this.animation.export()
      })
    },

  }


})