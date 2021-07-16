// RSA 加密

// const JSEncrypt = require('./rsa.js');
import { JSEncrypt } from './rsa2'

const _PubKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA8/m0r9XKWXhjdN3z3yrInUTjsWHw08sNAl0FsMdrq3W2myQaYCN5lJmadSf7Pf6iKeUheu0ch3J/Req5anu0uwFzZOlC1u7yV1eJwcg1GLugTlAZ2dlhbf1SCgbgtIIkJg2Kv9ynycwEhXWU4+pooIibTEVHmIUwmS++M5pgavLXCQW4zbejmVMDyZz2gme088Xhd921/4m2SH5qcEMmOw5rOcGuI1f01z2ZkjgutnsEhdtPbONV/MFxsJGZ1KUM4coexe1B/ko9K3xhY1vifCwARS4dQXPTecDtffRBq+X5oPDZGSAuBOyjyKYudrxYT3G8ZLFE8eYUAEl6Eo3fywIDAQAB';

const _PrivateKey = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDz+bSv1cpZeGN03fPfKsidROOxYfDTyw0CXQWwx2urdbabJBpgI3mUmZp1J/s9/qIp5SF67RyHcn9F6rlqe7S7AXNk6ULW7vJXV4nByDUYu6BOUBnZ2WFt/VIKBuC0giQmDYq/3KfJzASFdZTj6migiJtMRUeYhTCZL74zmmBq8tcJBbjNt6OZUwPJnPaCZ7TzxeF33bX/ibZIfmpwQyY7Dms5wa4jV/TXPZmSOC62ewSF209s41X8wXGwkZnUpQzhyh7F7UH+Sj0rfGFjW+J8LABFLh1Bc9N5wO199EGr5fmg8NkZIC4E7KPIpi52vFhPcbxksUTx5hQASXoSjd/LAgMBAAECggEBALFeXzLaDWLgOAX1el9K/k//jj0eA/QlkU6fjAyJ3kfnqxq8s4QjJjeXOAhmSaw3W3NzxdRVX0FFRyvwSl4Ukz7E/jxlrJcPXhWLaXX89EUH2rI0X6bV95P771Gk0GXKmzci7zUu2LjHXp4b7mOHvgq/ZY+cakGCyuMDJ5bia6gzeimpSihZyARDmDM9STFV3lsfcPyFzXbp9mDjKPZpAVkTxq4qkwq6qyus2+0FTGGnUNg/Mi6dQqt7G/d0qpX0d/9dvm93BKEvaRomqw1WQIp2uelvNu796rHzfZOFzoB6G1y4Hs2yyjPYbvD2flpSyJJMdwduzMpjXmSRZ4XKDEECgYEA+tWtU+iGrQum6LanQ+dYo3RBMzA/JrZjkWxK40QrAMrxIqij7IJ+pFz07xq5ubdYunSfy5pNi7W9r4nYfIwc0c0uP4qRsz8RJtRBZEyoP4tmWbSSoPxttfUL1S4F4uuFRI3pzH+nyao9g5VtgpPVI5ufEWrSp4giJ8hlYV47hiECgYEA+P/ea8ZVg54nUYwSUVVpq7XwFoBdko3Yx+rmLDa9EZAAvjXoL4sqKzwtJawFGUHN/RATuZuqIY24Wa353XQJoXccApSG1lIQPrjDfuxuHA5zlJBwq7qWZmvCXRZk6+PJ1RPIVPhqJgXvw9W44yj9H4mXI0pZLygdxFx40phy0GsCgYAMFzamn8O2HaSq/PrtC/66ykTGSeIRZKNCBD1L3SJRhHbBG+3i3ZtrIsvvppMjP5I4UpzNPJ/WRylgh712q25MMp6zE2PYhwa1n2+TfRpzDa4eTtTui5xiM/ChEvnXqVCgMFL/t3uH/fu/FvnTXHren4a4WTTUPHyg/Ejeu6MU4QKBgCwBHA+z51zxUEWLGZmiHKCp8JopaWADDXKXQsJBkjxOVLNI15W/ZF5rrhbgRa5nAL5eXv4IUpLHdvLyWhwW67TLVfnmwcWSjyhmgrYllngC3c49kIvo17eWB61nzcIaaYrsihTqKeg6WFslpB0RG1q9eCZWd1hsIIaZSQj+xButAoGBAPm6+nBKVCuVqVZE/wpRVLOc8Rc3qrnPtsKPlUibxOrzuSOAsIf9ICLDHcXcYPzWlp4E0ocNRfJd5Z3FMopdsqR8lxTl/nz+G1D8xa5mhiMuZnT0QULP5d/9IHiwxu3uGLs9LQCd3/lbzOGP/rxzz6HFuyFcdLu8CpH30JBn8q69';

//字符串加密
function encrypt(str) {
  let encrypt = new JSEncrypt();
  encrypt.setPublicKey(_PubKey);
  let encrypted = encrypt.encryptLong(str);
  return encrypted;
}

//字符串解密
function decrypt(str) {
  let encrypt = new JSEncrypt();
  encrypt.setPrivateKey(_PrivateKey);
  let decryptedStr = encrypt.decryptLong(str);
  return decryptedStr;
}

module.exports = {
  Encrypt: encrypt,
  Decrypt: decrypt,
}

/* 使用

const RSA = require('../../utils/encrypt/rsa/rsaUtils')
RSA.Encrypt('123')

*/


// https://www.bejson.com/enc/rsa/

// -----BEGIN PUBLIC KEY-----
// MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA8/m0r9XKWXhjdN3z3yrI
// nUTjsWHw08sNAl0FsMdrq3W2myQaYCN5lJmadSf7Pf6iKeUheu0ch3J/Req5anu0
// uwFzZOlC1u7yV1eJwcg1GLugTlAZ2dlhbf1SCgbgtIIkJg2Kv9ynycwEhXWU4+po
// oIibTEVHmIUwmS++M5pgavLXCQW4zbejmVMDyZz2gme088Xhd921/4m2SH5qcEMm
// Ow5rOcGuI1f01z2ZkjgutnsEhdtPbONV/MFxsJGZ1KUM4coexe1B/ko9K3xhY1vi
// fCwARS4dQXPTecDtffRBq+X5oPDZGSAuBOyjyKYudrxYT3G8ZLFE8eYUAEl6Eo3f
// ywIDAQAB
// -----END PUBLIC KEY-----

// -----BEGIN PRIVATE KEY-----
// MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDz+bSv1cpZeGN0
// 3fPfKsidROOxYfDTyw0CXQWwx2urdbabJBpgI3mUmZp1J/s9/qIp5SF67RyHcn9F
// 6rlqe7S7AXNk6ULW7vJXV4nByDUYu6BOUBnZ2WFt/VIKBuC0giQmDYq/3KfJzASF
// dZTj6migiJtMRUeYhTCZL74zmmBq8tcJBbjNt6OZUwPJnPaCZ7TzxeF33bX/ibZI
// fmpwQyY7Dms5wa4jV/TXPZmSOC62ewSF209s41X8wXGwkZnUpQzhyh7F7UH+Sj0r
// fGFjW+J8LABFLh1Bc9N5wO199EGr5fmg8NkZIC4E7KPIpi52vFhPcbxksUTx5hQA
// SXoSjd/LAgMBAAECggEBALFeXzLaDWLgOAX1el9K/k//jj0eA/QlkU6fjAyJ3kfn
// qxq8s4QjJjeXOAhmSaw3W3NzxdRVX0FFRyvwSl4Ukz7E/jxlrJcPXhWLaXX89EUH
// 2rI0X6bV95P771Gk0GXKmzci7zUu2LjHXp4b7mOHvgq/ZY+cakGCyuMDJ5bia6gz
// eimpSihZyARDmDM9STFV3lsfcPyFzXbp9mDjKPZpAVkTxq4qkwq6qyus2+0FTGGn
// UNg/Mi6dQqt7G/d0qpX0d/9dvm93BKEvaRomqw1WQIp2uelvNu796rHzfZOFzoB6
// G1y4Hs2yyjPYbvD2flpSyJJMdwduzMpjXmSRZ4XKDEECgYEA+tWtU+iGrQum6Lan
// Q+dYo3RBMzA/JrZjkWxK40QrAMrxIqij7IJ+pFz07xq5ubdYunSfy5pNi7W9r4nY
// fIwc0c0uP4qRsz8RJtRBZEyoP4tmWbSSoPxttfUL1S4F4uuFRI3pzH+nyao9g5Vt
// gpPVI5ufEWrSp4giJ8hlYV47hiECgYEA+P/ea8ZVg54nUYwSUVVpq7XwFoBdko3Y
// x+rmLDa9EZAAvjXoL4sqKzwtJawFGUHN/RATuZuqIY24Wa353XQJoXccApSG1lIQ
// PrjDfuxuHA5zlJBwq7qWZmvCXRZk6+PJ1RPIVPhqJgXvw9W44yj9H4mXI0pZLygd
// xFx40phy0GsCgYAMFzamn8O2HaSq/PrtC/66ykTGSeIRZKNCBD1L3SJRhHbBG+3i
// 3ZtrIsvvppMjP5I4UpzNPJ/WRylgh712q25MMp6zE2PYhwa1n2+TfRpzDa4eTtTu
// i5xiM/ChEvnXqVCgMFL/t3uH/fu/FvnTXHren4a4WTTUPHyg/Ejeu6MU4QKBgCwB
// HA+z51zxUEWLGZmiHKCp8JopaWADDXKXQsJBkjxOVLNI15W/ZF5rrhbgRa5nAL5e
// Xv4IUpLHdvLyWhwW67TLVfnmwcWSjyhmgrYllngC3c49kIvo17eWB61nzcIaaYrs
// ihTqKeg6WFslpB0RG1q9eCZWd1hsIIaZSQj+xButAoGBAPm6+nBKVCuVqVZE/wpR
// VLOc8Rc3qrnPtsKPlUibxOrzuSOAsIf9ICLDHcXcYPzWlp4E0ocNRfJd5Z3FMopd
// sqR8lxTl/nz+G1D8xa5mhiMuZnT0QULP5d/9IHiwxu3uGLs9LQCd3/lbzOGP/rxz
// z6HFuyFcdLu8CpH30JBn8q69
// -----END PRIVATE KEY-----