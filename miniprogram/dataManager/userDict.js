/* 用户字典 */

/* 
使用方法 ：

const UserDict = require('../../dataManager/userDict.js');
console.log(UserDict.sexDict); 
 */

export const sexDict = [{
  isSelected: false,
  label: '未知',
  value: 0
}, {
  isSelected: false,
  label: '男',
  value: 1
}, {
  isSelected: false,
  label: '女',
  value: 2
}];

export const userTypeDict = [{
  isSelected: false,
  label: '管理员',
  value: 'admin'
}, {
  isSelected: false,
  label: '普通',
  value: 'normal'
}, {
  isSelected: false,
  label: 'VIP',
  value: 'vip'
}];

export const orderByDict = [{
  isSelected: true,
  label: '上次登录时间',
  value: 'lastLoginTime'
}, {
  isSelected: false,
  label: '更新时间',
  value: 'updateTime'
}, {
  isSelected: false,
  label: '创建时间',
  value: 'createTime'
}];

export const sortDict = [{
  isSelected: true,
  label: '降序',
  value: 'desc'
}, {
  isSelected: false,
  label: '正序',
  value: 'asc'
}];