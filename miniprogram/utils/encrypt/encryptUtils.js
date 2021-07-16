// 加密工具类

const AESUtils = require('../../utils/encrypt/aes/aesUtils')
const RSAUtils = require('../../utils/encrypt/rsa/rsaUtils')
const sha256 = require('../../utils/encrypt/sha256/sha256')
const md5 = require('../../utils/encrypt/md5/md5')
const base64 = require('../../utils/encrypt/base64/base64')

module.exports = {
  MD5,
  SHA256,
  AESEncrypt,
  AESDecrypt,
  RSAEncrypt,
  RSADecrypt,
  Base64EnCode,
  Base64DeCode,
}

//AES加密
function AESEncrypt(str) {
  return AESUtils.Encrypt(str);
}

//AES解密
function AESDecrypt(str) {
  return AESUtils.Decrypt(str);
}

//RSA加密
function RSAEncrypt(str) {
	return RSAUtils.Encrypt(str);
}

//RSA解密
function RSADecrypt(str) {
	return RSAUtils.Decrypt(str);
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
在线AES : https://tool.lmeee.com/jiami/aes
在线RSA : https://www.bejson.com/enc/rsa/

const EncryptUtils = require('../../utils/encrypt/encryptUtils')

EncryptUtils.AESEncrypt('123')
EncryptUtils.AESDecrypt('123')

EncryptUtils.SHA256('123')
EncryptUtils.MD5('123')

EncryptUtils.Base64EnCode('123')
EncryptUtils.Base64DeCode('123')

*/