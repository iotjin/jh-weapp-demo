/* 用户 数据管理类 */

/* 
使用方法 ：
1.在要使用的js文件导入
var UserDataManager = require('../DataManager/UserDataManager');
2. 调用
    UserDataManager.addUser().then(res => {
    }).catch(error => {
    });
 */


var TimeUtils = require('../utils/timeUtils.js');

const db = wx.cloud.database()
const _ = db.command;

const kTableName = 'User_Table';

module.exports = {
  addUser: addUser,
  selectUserIsExist: selectUserIsExist,
  searchUserById: searchUserById,
  updateUserById: updateUserById,
  searchUserLikeName: searchUserLikeName,
  searchUserInfoByPage: searchUserInfoByPage,
  deleteUserById: deleteUserById
}

//新增用户
function addUser(userInfo, openId) {
  return new Promise((resolve, reject) => {
    db.collection(kTableName).add({
      data: {
        _id: openId,
        createTime: TimeUtils.Jh_timeStampToTime(new Date().getTime(), "{y}-{m}-{d} {h}:{i}:{s}"),
        updateTime: TimeUtils.Jh_timeStampToTime(new Date().getTime(), "{y}-{m}-{d} {h}:{i}:{s}"),
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
        return resolve(true)
      },
      fail(err) {
        return resolve(err)
      }
    })
  });
}

//查用户是否存在
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

//根据id  删除一个用户
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

//根据  用户输入数据   模糊查询查询数据   或为昵称  或为手机号  或为  姓名 查询  
function searchUserLikeName(name) {
  return new Promise((resolve, reject) => {
    db.collection(kTableName)
      .where(_.and([
        _.or(
          [{
              wxNickName: {
                $regex: '.*' + name,
                $options: '1'
              }
            },
            {
              userName: {
                $regex: '.*' + name,
                $options: '1'
              }
            },
            {
              phoneNum: {
                $regex: '.*' + name,
                $options: '1'
              }
            }
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

//根据id 更新用户数据
function updateUserById(params, openId) {
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

//根据id 查询用户数据：
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

//分页加载用户列表 
function searchUserInfoByPage(page, openId) {
  return new Promise((resolve, reject) => {
    db.collection(kTableName)
      .where({
        _id: db.command.neq(openId),
      })
      .field({
        userName: true,
        wxNickName: true,
        avatarUrl: true,
        phoneNum: true
      })
      .skip(page * 20)
      .limit(20)
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