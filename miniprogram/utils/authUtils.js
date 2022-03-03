const authsName = {
    "scope.userInfo": "用户信息", // 请用button获取该信息
    "scope.userLocation": "地理位置",
    "scope.userLocationBackground": "后台定位",
    "scope.address": "通讯地址",
    "scope.invoiceTitle": "发票抬头",
    "scope.invoice": "获取发票",
    "scope.werun": "微信运动步数",
    "scope.record": "录音功能",
    "scope.writePhotosAlbum": "保存到相册",
    "scope.camera": "摄像头",
}

var scope = null;
var success = null;
var fail = null;
var denyBack = null;
var deniedFun = null;

/**
 * 申请某个权限
 * _scope 权限名称
 * _success 成功回调
 * _fail 失败回调
 * _denyBack 申请权限时用户 拒绝 后的回调
 * _deniedFun 之前申请过该权限但被拒绝了，该情况下调用此函数
 */
function authorize(_scope, _success, _fail, _denyBack, _deniedFun) {
    resetData();
    scope = _scope;
    success = _success;
    fail = _fail;
    denyBack = _denyBack;
    deniedFun = _deniedFun;

    if (!scope) {
        return;
    }

    // 判断权限状态
    wx.getSetting({
        success: function (res) {
            let currentScope = res.authSetting[scope];
            if (currentScope == undefined || currentScope == null) {
                // 之前没有申请或该权限
                wx.authorize({
                    scope: scope,
                    success: function (res) {
                        authSuccess(res);
                    },
                    fail: function (err) {
                        authDeny();
                    }
                });
            } else if (currentScope == false) {
                // 之前申请过该权限但被拒绝了, 如果配置 deniedFun 函数，则有执行 deniedFun 方法，
                // 由调用者决定改中情况下如何处理。
                if (authDenied()) {
                    return;
                }
                // 如果没有配置 deniedFun 函数，走默认逻辑，打开设置界面
                wx.showModal({
                    title: '权限申请',
                    content: '点击 “确定” 按钮，打开 “' + authsName[scope] + '” 的权限设置界面',
                    cancelText: '取消',
                    confirmText: '确定',
                    success(res) {
                        if (res.confirm) {
                            wx.openSetting({
                                success: function (res) {
                                    let cScope = res.authSetting[scope];
                                    if (cScope) {
                                        authSuccess();
                                    } else {
                                        authFail();
                                    }
                                },
                                fail: function (res) {
                                    authFail();
                                }
                            });
                        }
                    }
                });
            } else {
                // 已经获得该权限
                authSuccess();
            }
        },
        fail: function () {
            authFail();
        }
    });
}

/**
 * 权限申请成功
 */
function authSuccess(res) {
    if (success && typeof success == 'function') {
        success(res);
    }
    resetData();
}

/**
 * 权限申请失败
 */
function authFail() {
    if (fail && typeof fail == 'function') {
        fail();
    }
    resetData();
}

/**
 * 拒绝使用该权限
 */
function authDeny() {
    if (denyBack && typeof denyBack == 'function') {
        denyBack();
    }
    resetData();
}

/**
 * 之前申请过该权限但被拒绝了
 */
function authDenied() {
    if (deniedFun && typeof deniedFun == 'function') {
        deniedFun();
        resetData();
        return true;
    } else {
        return false;
    }
}

/**
 * 重置参数
 */
function resetData() {
    scope = null;
    success = null;
    fail = null;
    denyBack = null;
    deniedFun = null;
}

module.exports = {
    authorize: authorize,
}