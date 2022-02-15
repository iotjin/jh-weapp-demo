# 小程序使用腾讯地图：

## 微信小程序JavaScript SDK / 开发指南 / 入门及使用限制

 开发文档：https://lbs.qq.com/miniProgram/jsSdk/jsSdkGuide/jsSdkOverview

1. 申请开发者密钥（key）：申请密钥

2. 开通webserviceAPI服务：控制台 ->应用管理 -> 我的应用 ->添加key-> 勾选WebServiceAPI -> 保存
(小程序SDK需要用到webserviceAPI的部分服务，所以使用该功能的KEY需要具备相应的权限)

3. 下载微信小程序JavaScriptSDK，微信小程序JavaScriptSDK v1.1   JavaScriptSDK v1.2

4. 安全域名设置，在小程序管理后台 -> 开发 -> 开发管理 -> 开发设置 -> “服务器域名” 中设置request合法域名，添加https://apis.map.qq.com

使用限制
    为了保证我们的服务稳定，我们对每个key的每个服务接口的调用量做了如下限制：
日调用量：1万次 / Key
并发数：5次 / key / 秒 。
    超过日调用量和并发数的开发者，可通过以下途径解决：
    1.对于多频次的相同请求，可通过缓存结果，并定时访问更新的方式，减少对在线服务调用的依赖；
    2.企业开发者的配额高于个人开发者，申请企业认证后，需要在 控制台->配额申请 中免费申请你需要的配额。
       我们将对您的申请进行评估并进行审批（3个工作日内），审批通过后将会获得您申请的配额。
    3.对于切实需要大配额来满足应用需求的，请在控制台->配额管理中提交购买配额申请，我们的商务会与您取得联系。


# 小程序使用腾讯地图，计算距离

```js
//计算距离
ctdistance: function (data, i, callback = function () { }) {
    var that = this;
    //调用腾讯地图接口计算距离
    var demo = new QQMapWX({
      key: 'HYEBZ-Z5QK3-VBV33-YWWNV-IJDOS-5XFZ7' // 必填
    });
    //对下标为i数组的值进行计算距离
    data[i].clinicimg = data[i].img[0]; //取第一张图片
    var latitude = data[i]['latitude']; //经度
    var longitude = data[i]['longitude']; //纬度
    // 调用接口方法
    demo.calculateDistance({  //计算一个点到多点的步行距离。
      to: [{
        latitude: latitude,
        longitude: longitude
      }],
      success: function (res) {
        //结果为m，处理成km
        var distance = res.result.elements[0]['distance'] / 1000
        data[i].distance = distance.toFixed(3);

      },
      fail: function (res) {
        data[i].distance = 99999;
      },
      complete: function (res) {  //不管是否成功都会执行
        if (i < data.length - 1) {  //当i小于数组长度时，继续执行计算距离
          i++;
          that.ctdistance(data, i, callback)
        } else {  //数组的距离全部计算完成，回调结果
          callback(data);
        }
      }
    });
}
```

```js
//调用
that.ctdistance(res.data, 0, function (data) {
            //回调的结果带有距离参数
});
```
