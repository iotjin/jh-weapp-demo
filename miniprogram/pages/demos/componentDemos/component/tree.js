// miniprogram/pages/maintenance/room_monitor/tree.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    treeData: {
      text: 'My Tree',
      id: 0,
      childNodes: [{
          text: 'Parent 1',
          id: 1,
          childNodes: [{
              text: 'Child 1',
              id: 2,
              childNodes: [{
                  text: 'Grandchild 1',
                  id: 3,
                },
                {
                  text: 'Grandchild 2',
                  id: 4,
                },
              ]
            },
            {
              text: 'Child 2',
              id: 5,
            }
          ]
        },
        {
          text: 'Parent 2',
          id: 6,
          childNodes: [{
              text: 'Child 1',
              id: 7,
            },
            {
              text: 'Child 2',
              id: 8,
            }
          ]
        }
      ]
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onClickItem(event) {
    console.log(event.detail);
  }

})