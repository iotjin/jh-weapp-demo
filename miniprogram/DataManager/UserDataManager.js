/* 用户 数据管理类 */

/* 
使用方法 ：
1.在要使用的js文件导入
var UserDataManager = require('../dataManager/userDataManager');
2. 调用
    UserDataManager.addUser().then(res => {
    }).catch(error => {
    });
 */


var TimeUtils = require('../utils/timeUtils.js');

const db = wx.cloud.database()
const _ = db.command;
const $ = db.command.aggregate;
const kPageCount = 20;
const kTableName = 'User_Table';

module.exports = {
  addOrUpdateUser: addOrUpdateUser,
  addUser: addUser,
  selectUserIsExist: selectUserIsExist,
  deleteUserById: deleteUserById,
  updateUserById: updateUserById,
  getAllCount: getAllCount,
  getUserListByPage: getUserListByPage,
  searchUserById: searchUserById,
  searchUserLikeText: searchUserLikeText,
}


function getOpenId() {
  let openId = wx.getStorageSync('kOpenId')
  if (openId) {
    return openId
  }
  return
}

// 添加或者更新用户信息
function addOrUpdateUser(userInfo, openId) {
  return new Promise((resolve, reject) => {
    db.collection(kTableName).where({
        _openid: openId,
      })
      .get({
        success(res) {
          // console.log(res.data);
          if (res.data.length > 0) {
            wx.setStorageSync(app.kUserType, res.data[0].userType)
            // console.log('更新用户信息');
            updateUser(userInfo, openId).then(res => {
              return resolve(true)
            }).catch(error => {
              return resolve(error)
            });
          } else {
            // console.log('新增');
            addUser(userInfo, openId).then(res => {
              wx.setStorageSync(app.kUserType, 'normal')
              return resolve(true)
            }).catch(error => {
              return resolve(error)
            });

          }
        },
        fail(err) {
          return resolve(err)
        }
      })
  });
}

//新增用户
function addUser(userInfo) {
  let openId = getOpenId()
  if (!openId) {
    return
  }
  let time = TimeUtils.Jh_timeStampToTime(new Date().getTime(), "{y}-{m}-{d} {h}:{i}:{s}")

  return new Promise((resolve, reject) => {
    db.collection(kTableName).add({
      data: {
        _id: openId,
        createTime: time,
        updateTime: time,
        lastLoginTime: time,
        userType: "normal",
        phone: "",
        name: "",
        avatarUrl: userInfo.avatarUrl,
        city: userInfo.city,
        gender: userInfo.gender,
        wxNickName: userInfo.nickName,
        province: userInfo.province,
      },
      success(res) {
        return resolve(res)
      },
      fail(err) {
        return resolve(err)
      }
    })
  });
}

//根据openId查用户是否存在
function selectUserIsExist(openId) {
  return new Promise((resolve, reject) => {
    db.collection(kTableName).where({
        _openid: openId,
      })
      .get({
        success(res) {
          return resolve(res.data.length > 0)
        },
        fail(err) {
          return resolve(err)
        }
      })
  });
}

//根据openId  删除一个用户
function deleteUserById(openId) {
  return new Promise((resolve, reject) => {
    db.collection(kTableName).doc(openId)
      .remove({
        success: function (res) {
          return resolve(res);
        },
        fail(err) {
          return resolve(err)
        }
      })
  });
}

//根据openId 更新用户数据
function updateUserById(params, openId) {
  let time = TimeUtils.Jh_timeStampToTime(new Date().getTime(), "{y}-{m}-{d} {h}:{i}:{s}")
  params = params ? params : {}
  params.lastLoginTime = time
  params.updateTime = time
  return new Promise((resolve, reject) => {
    db.collection(kTableName)
      .doc(openId)
      .update({
        data: params,
        success: function (res) {
          return resolve(res);
        },
        fail(err) {
          return resolve(err)
        }
      })
  });
}

//获取总条数
function getAllCount() {
  return new Promise((resolve, reject) => {
    db.collection(kTableName).count().then(res => {
      if (res) {
        var num = res.total
        return resolve(num)
      } else {
        return resolve(0)
      }
    }).catch((e) => {
      return resolve(0)
    })
  })
}

//分页加载用户列表，params 为{} 
function getUserListByPage(page, params) {
  let openId = getOpenId()
  if (!openId) {
    return
  }
  params = params ? params : {}
  params._id = db.command.neq(openId)
  return new Promise((resolve, reject) => {
    db.collection(kTableName)
      .where(params)
      // .where({
      //   _id: db.command.neq(openId),
      // })
      .field({
        userName: true,
        wxNickName: true,
        avatarUrl: true,
        phoneNum: true
      })
      .skip(page * kPageCount)
      .limit(kPageCount)
      // .orderBy('lastLoginTime', 'desc')
      .get({
        success: function (resUser) {
          return resolve(resUser)
        },
        fail(err) {
          return resolve(err)
        }
      })
  });
}

//根据openId 查询用户数据：
function searchUserById(openId) {
  return new Promise((resolve, reject) => {
    db.collection(kTableName)
      .doc(openId)
      .get({
        success: function (res) {
          return resolve(res)
        },
        fail(err) {
          return resolve(err)
        }
      });
  });
}

/*  模糊查询
const db = wx.cloud.database(); 
   db.collection("collectionName").where({	 	//collectionName 表示欲模糊查询数据所在collection的名
      columnName:{								//columnName表示欲模糊查询数据所在列的名
        $regex:'.*' + queryContent + '.*',		//queryContent表示欲查询的内容，‘.*’等同于SQL中的‘%’
        $options: 'i'							//$options:'1' 代表这个like的条件不区分大小写,详见开发文档
      }
    }).get()
*/

//根据  用户输入数据   模糊查询查询数据   或为昵称  或为手机号  或为  姓名 查询  
function searchUserLikeText(inputText) {
  return new Promise((resolve, reject) => {
    db.collection(kTableName)
      .where(_.and([
        _.or(
          [{
              wxNickName: {
                $regex: '.*' + inputText + '.*',
                $options: '1'
              }
            },
            {
              userName: {
                $regex: '.*' + inputText + '.*',
                $options: '1'
              }
            },
            {
              phoneNum: {
                $regex: '.*' + inputText + '.*',
                $options: '1'
              }
            },
            {
              city: new RegExp('.*' + inputText + '.*')
            },
            {
              province: new RegExp('.*' + inputText + '.*')
            },
            {
              gender: new RegExp('.*' + inputText + '.*')
            },
          ]
        ),
        {
          _id: _.neq('admin')
        }
      ])).get({
        success: function (res) {
          return resolve(res);
        },
        fail(err) {
          return resolve(err)
        }
      })
  });
}