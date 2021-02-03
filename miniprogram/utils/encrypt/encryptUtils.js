// 加密工具类

var AES = require('../../utils/encrypt/aes/aesUtils')
var sha256 = require('../../utils/encrypt/sha256/sha256')

module.exports = {
  AESEncrypt: AESEncrypt,
  AESDecrypt: AESDecrypt,
  SHA256: SHA256,
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

/*  使用
var EncryptUtils = require('../../utils/encrypt/encryptUtils')

EncryptUtils.AESEncrypt('123')
EncryptUtils.AESDecrypt('123')

EncryptUtils.SHA256('123')

*/