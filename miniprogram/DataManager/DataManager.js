/* 数据管理类 */

/* 
使用方法 ：
1.在要使用的js文件导入
    const DataManager = require('../../../dataManager/dataManager');
2. 调用
    DataManager.Jh_handleExcel('123').then(res => {
    }).catch(error => {
    });
 */


const db = wx.cloud.database()
const _ = db.command;
const $ = db.command.aggregate;
const kPageCount = 20;

module.exports = {
  Jh_chooseExcelFile: chooseExcelFile,
  Jh_handleExcel: handleExcel, //处理excel
}

//选择excel文件
function chooseExcelFile() {
  wx.chooseMessageFile({
    count: 1,
    type: 'file',
    success(res) {
      // console.log('选择文件成功！',res)
      let name = res.tempFiles[0].name
      let path = res.tempFiles[0].path
      uploadExcel(name, path)
    }
  })
}

//上传excel到云存储
function uploadExcel(name, path) {
  wx.showLoading({
    title: "正在上传...",
  })
  wx.cloud.uploadFile({
    // cloudPath: new Date().getTime() + '.xls',
    cloudPath: name,
    filePath: path, //文件路径
    success(res) {
      console.log("excel上传成功：", res.fileID)
      let nameStr = name.substring(0, 6)
      wx.hideLoading()
      handleExcel(res.fileID, nameStr)
    },
    fail(err) {
      console.log("excel上传失败：", err)
      wx.hideLoading()
      wx.showToast({
        title: 'excel上传失败',
        icon: 'none'
      })
    }
  })
}

// 处理excel
function handleExcel(fileID, subjectLibTime) {
  wx.showLoading({
    title: "正在导入数据...",
  })
  return new Promise((resolve, reject) => {
    wx.cloud.callFunction({
      "name": "handleExcel",
      data: {
        fileID: fileID,
        subjectLibTime: subjectLibTime,
      },
      success(res) {
        console.log("excel导入成功：", res)
        wx.hideLoading()
        wx.showToast({
          title: '数据导入成功',
        })
        return resolve(res)
      },
      fail(res) {
        console.log("excel导入失败：", res)
        wx.hideLoading()
        wx.showToast({
          title: '数据导入失败，请重试',
          icon: 'none'
        })
        return resolve(res)
      }
    })
  })
}