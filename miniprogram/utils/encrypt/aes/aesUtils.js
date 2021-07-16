// AES 加密 CBC

/*
https://www.cnblogs.com/sunnyeve/p/12145448.html
https://www.jianshu.com/p/534401394ac1
https://www.cnblogs.com/memphis-f/p/10109027.html
*/

const CryptoJS = require('./aes.js');
const _KEY = ""; //32位
const _IV = ""; //16位    //这个key和偏移量都是后台给的数据

//字符串加密
function encrypt(str) {
  var key = CryptoJS.enc.Utf8.parse(_KEY);
  var iv = CryptoJS.enc.Utf8.parse(_IV);
  var encrypted = '';
  var srcs = CryptoJS.enc.Utf8.parse(str);
  encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.ciphertext.toString();
}

//字符串解密
function decrypt(str) {
  var key = CryptoJS.enc.Utf8.parse(_KEY);
  var iv = CryptoJS.enc.Utf8.parse(_IV);
  var encryptedHexStr = CryptoJS.enc.Hex.parse(str);
  var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  var decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

/* 软件版本比较 新旧 比较 大于是true  */
function versionCompare(vNew, vOld) {
  if (vNew == '' || vNew == null || vNew == undefined) {
    return false;
  } else {
    var vn = vNew.replace(/(^\s+)|(\s+$)/gi, '');
  }
  var vo = vOld.replace(/(^\s+)|(\s+$)/gi, '');

  if (!vn || !vo) return true;

  var reg = /\d(\.|\d)*\d/gi;
  vn = vn.match(reg)[0];
  vo = vo.match(reg)[0];

  var vnArr = vn.split('.');
  var voArr = vo.split('.');
  // 版本比较 1.1.1类型
  if (vnArr[0] > voArr[0]) {
    return true;
  } else if (vnArr[0] == voArr[0]) {
    if (vnArr[1] > voArr[1]) {
      return true;
    } else if (vnArr[1] == voArr[1]) {
      if (vnArr[2] > voArr[2]) {
        return true;
      } else if (vnArr[2] == voArr[2]) {
        return false;
      }
    }
  }
  return false;
}

module.exports = {
  Decrypt: decrypt,
  Encrypt: encrypt
}

/* 使用

const AES = require('../../utils/aes/aesUtils')
AES.Encrypt('123')

*/