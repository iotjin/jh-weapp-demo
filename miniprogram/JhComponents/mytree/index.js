// pages/components/mytree/index.js
Component({
  properties: {
    model: Object,
    open: {
      type: Boolean,
      value: false
    },
  },
  data: {
    open: false, //是否展开
    isBranch: false, //是否有子级
  },
  methods: {
    toggle: function (e) {
      if (this.data.isBranch) {
        this.setData({
          open: !this.data.open,
        })
      }
    },
    tapItem: function (e) {
      this.toggle()
      var itemid = e.currentTarget.dataset.itemid;
      // console.log('组件里点击的id: ' + itemid);
      this.triggerEvent('clickItem', {
        itemid: itemid
      }, {
        bubbles: true,
        composed: true
      });
    }
  },
  ready: function (e) {
    this.setData({
      isBranch: Boolean(this.data.model.childNodes && this.data.model.childNodes.length),
      open: this.properties.open
    });
    console.log(this.data);
  },
})