// 云函数入口文件

// npm install node-xlsx

const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

//操作excel用的类库
var xlsx = require('node-xlsx');
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {

  // var momdelArr = event.dicArr

  // db.collection('Table')
  //   .where({
  //     paperId: '84e72bb95f263a98004820c865f5d8c9'
  //   })
  //   .field({
  //     name: true,
  //   })
  //   .limit(10)
  //   .get()
  //   .then(res => {
  //     console.log(res.data)
  //   })


  var tableList = [{
      'id': 0,
      'name': '张三',
      'birthday': '2010-1-1',
      'age': 20,
    },
    {
      'id': 1,
      'name': '李四',
      'birthday': '2020-1-1',
      'age': 1,
    }
  ]
  var dicArr = tableList


  // try {
  //1,定义excel表格名
  let dataCVS = 'test.xlsx'
  //2，定义存储数据的
  let alldata = []
  let row = ['编号', '名称', '生日', '年龄'] //表属性
  alldata.push(row)
  for (let key in dicArr) {
    let arr = []
    arr.push(dicArr[key].id)
    arr.push(dicArr[key].name)
    arr.push(dicArr[key].birthday)
    arr.push(dicArr[key].age)
    alldata.push(arr)
  }
  //3，把数据保存到excel里
  var buffer = await xlsx.build([{
    name: "Sheet1",
    data: alldata
  }]);

  //4，把excel文件保存到云存储里
  let res = await cloud.uploadFile({
    cloudPath: 'exportExcel/' + dataCVS,
    // cloudPath: dataCVS,
    fileContent: buffer, //excel二进制文件
  })
  // .then(res => {
  // console.log(res.fileID);
  //   return res
  // }).catch(function (err) {
  //   return err
  // })
  // return res

  if (!res.fileID) {
    return '上传失败'
  } else {
    let res2 = await cloud.getTempFileURL({
      fileList: [res.fileID],
    })
    if (!res2.fileList.length) {
      return '获取下载地址失败'
    } else {
      let fileUrl = res2.fileList[0].tempFileURL
      console.log('文件下载链接' + fileUrl);
      return fileUrl
    }
  }
}



/*

   onLoad: function (options) {

    this.exportExcel()

  },

    //云函数，导出Excel
  exportExcel() {
    let that = this
    wx.cloud.callFunction({
      name: "exportExcel",
      data: {
        // dicArr: dicArr
      },
      success(res) {
        console.log("保存成功", res)
        console.log("文件下载链接", res.result)
        //复制文件路径到剪切板
        that.copyFileUrl(res.result)
        //下载并预览
        // that.downloadExcelFile(res.result)
      },
      fail(res) {
        console.log("保存失败", res)
      }
    })
  },

  //复制文件路径到剪切板
  copyFileUrl(url) {
    wx.setClipboardData({
      data: url,
      success: function (res) {
        wx.getClipboardData({
          success(res) {
            console.log("复制成功",res.data) // data
          }
        })
        // wx.showModal({
        //   title: '提示',
        //   content: '复制成功',
        //   success: function (res) {
        //     if (res.confirm) {
        //       console.log('确定')
        //     } else if (res.cancel) {
        //       console.log('取消')
        //     }
        //   }
        // })
      }
    })
  },
  //下载并预览
  downloadExcelFile(url) {
    wx.downloadFile({
      url: url,
      success: function (res) {
        const tempFilePath = res.tempFilePath;
        // 保存文件
        wx.saveFile({
          tempFilePath,
          success: function (res) {
            const savedFilePath = res.savedFilePath;
            // 文件预览
            wx.openDocument({
              filePath: savedFilePath,
              success: function (res) {
                console.log('打开文档成功')
              },
            });
          },
          fail: function (err) {
            console.log('保存失败：', err)
          }
        });
      },
      fail: function (err) {
        console.log('下载失败：', err);
      },
    });
  },
  //文件预览
  openfile(filePath) {
    let path = filePath;
    wx.openDocument({
      filePath: path,
      success: (res) => {
        console.log('读取成功', res)
      },
      fail: (err) => {
        console.log('读取失败', err)
      }
    })
  },
*/