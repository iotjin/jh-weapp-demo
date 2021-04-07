// miniprogram/pages/demoList/otherDemoList/other/tree2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '标题',
    treeData: {
      text: 'My Tree',
      id: 0,
      level: 0,
      childNodes: [{
          text: 'Parent 1',
          id: 1,
          level: 1,
          childNodes: [{
              text: 'Child 1',
              id: 2,
              level: 2,
              childNodes: [{
                  text: 'Grandchild 1',
                  id: 3,
                  level: 3,
                },
                {
                  text: 'Grandchild 2',
                  id: 4,
                  level: 3,
                },
              ]
            },
            {
              text: 'Child 2',
              id: 5,
              level: 2,
            }
          ]
        },
        {
          text: 'Parent 2',
          id: 6,
          level: 1,
          childNodes: [{
              text: 'Child 1',
              id: 7,
              level: 2,
            },
            {
              text: 'Child 2',
              id: 8,
              level: 2,
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