/* 用户 数据管理类 */

/* 
使用方法 ：
1.在要使用的js文件导入
    const UserDataManager = require('../dataManager/userDataManager');
2. 调用
    UserDataManager.addUser().then(res => {
    }).catch(error => {
    });
 */


const TimeUtils = require('../utils/timeUtils.js');

const db = wx.cloud.database()
const _ = db.command;
const $ = db.command.aggregate;
const kPageCount = 20;
const kTableName = 'User_Table';

module.exports = {
  addOrUpdateUser: addOrUpdateUser,
  selectUserIsExist: selectUserIsExist,
  addUser: addUser,
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
            wx.setStorageSync(app.kUserType, res.data[0].userType) // 用户类型从数据库直接改
            // console.log('更新用户信息');
            updateUser(userInfo, openId).then(res => {
              return resolve(true)
            }).catch(error => {
              return reject(error)
            });
          } else {
            // console.log('新增');
            addUser(userInfo, openId).then(res => {
              wx.setStorageSync(app.kUserType, 'normal')
              return resolve(true)
            }).catch(error => {
              return reject(error)
            });
          }
        },
        fail(err) {
          return reject(err)
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
        nickName: userInfo.nickName,
        province: userInfo.province,
        country: userInfo.country,
      },
      success(res) {
        return resolve(res)
      },
      fail(err) {
        return reject(err)
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
          return reject(err)
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
          return reject(err)
        }
      })
  });
}

//根据openId 更新用户数据
function updateUserById(userInfo, openId) {
  let time = TimeUtils.Jh_timeStampToTime(new Date().getTime(), "{y}-{m}-{d} {h}:{i}:{s}")
  return new Promise((resolve, reject) => {
    db.collection(kTableName)
      .doc(openId)
      .update({
        data: {
          updateTime: time,
          lastLoginTime: time,
          // 用户类型从数据库直接改
          // userType: userInfo.userType ? userInfo.userType : "normal",
          phone: userInfo.phone ? userInfo.phone : "",
          name: userInfo.name ? userInfo.name : "",
          avatarUrl: userInfo.avatarUrl,
          city: userInfo.city,
          gender: userInfo.gender,
          nickName: userInfo.nickName,
          province: userInfo.province,
          country: userInfo.country,
        },
        success: function (res) {
          return resolve(res);
        },
        fail(err) {
          return reject(err)
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
    }).catch((err) => {
      return reject(err)
    })
  })
}

//分页加载用户列表

/* 查询条件
    params = {
      phone: "",
      name: "",
      userType: "", //admin normal
      nickName: "",
      avatarUrl: "",
      gender: "", //性别 0：未知、1：男、2：女
      province: "",
      city: "",
      country:"",
    }
  排序条件
  orderBy：createTime || updateTime || lastLoginTime
  sort ： asc || desc
*/
function getUserListByPage(page, orderBy, sort, params) {
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
      // .field({
      //   nickName: true,
      //   avatarUrl: true,
      //   phone: true,
      //   name: true,
      // })
      .skip(page * kPageCount)
      .limit(kPageCount)
      .orderBy(orderBy, sort)
      // .orderBy('lastLoginTime', 'desc')
      .get({
        success: function (res) {
          return resolve(res)
        },
        fail(err) {
          return reject(err)
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
          return reject(err)
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
      .where(_.or([{
          nickName: {
            $regex: '.*' + inputText + '.*',
            $options: 'i'
          }
        },
        {
          name: new RegExp('.*' + inputText + '.*')
        },
        {
          phone: new RegExp('.*' + inputText + '.*')
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
        {
          country: new RegExp('.*' + inputText + '.*')
        },
      ])).get({
        success: function (res) {
          return resolve(res);
        },
        fail(err) {
          return reject(err)
        }
      })
  });
}