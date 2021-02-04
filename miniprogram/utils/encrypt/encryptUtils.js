// 加密工具类

var AES = require('../../utils/encrypt/aes/aesUtils')
var sha256 = require('../../utils/encrypt/sha256/sha256')
var md5 = require('../../utils/encrypt/md5/md5')
var base64 = require('../../utils/encrypt/base64/base64')

module.exports = {
  MD5: MD5,
  SHA256: SHA256,
  AESEncrypt: AESEncrypt,
  AESDecrypt: AESDecrypt,
  Base64EnCode: Base64EnCode,
  Base64DeCode: Base64DeCode,
}

//AES加密
function AESEncrypt(str) {
  return AES.Encrypt(str);
}

//AES解密
function AESDecrypt(str) {
  return AES.Decrypt(str);
}
//SHA256加密
function SHA256(str) {
  return sha256.hex_sha256(str);
}

//md5（32位小写）
function MD5(str) {
  return md5.hex_md5(str);
}

//base64 编码
function Base64EnCode(str) {
  return base64.encode(str);
}

//base64 解码
function Base64DeCode(str) {
  return base64.decode(str);
}

/*  使用
var EncryptUtils = require('../../utils/encrypt/encryptUtils')

EncryptUtils.AESEncrypt('123')
EncryptUtils.AESDecrypt('123')

EncryptUtils.SHA256('123')
EncryptUtils.MD5('123')

EncryptUtils.Base64EnCode('123')
EncryptUtils.Base64DeCode('123')

*/