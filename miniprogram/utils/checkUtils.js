// 校验 

module.exports = {
  isPhone: isPhone,
}

const regular_phone = /^1[3-9][0-9]{9}$/;

function isEmpty(text) {
  return text.isEmpty()
}

function isPhone(phone) {
  return regular_phone.test(phone)
}


/* 正则：
var myreg = /^1[3-9][0-9]{9}$/;
var myreg = new RegExp('^1[3-9][0-9]{9}$');
myreg.test(str)
*/

/*
const CheckUtils= require('../../utils/checkUtils.js')
*/