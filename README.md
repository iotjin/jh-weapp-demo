# jh-weapp-demo

A new weapp project - 实现一些常用效果、封装通用组件和工具类 <br>
<br>

代码不定期更新

注：真实开发项目注意按需引用。例如：组件、工具类、`app.json`的引用，可通过代码依赖分析做优化。

<br>
<br>

## 实现的一些效果

* ListView相关
* GridView相关
* eCharts分包导入，异步加载，多图表延时加载，中国地图效果
* `wx.request` 网络请求封装和 `api` 配置
* 用户管理云函数请求Promise封装
* AES、RSA加解密，SHA256、MD5加密，base64编码解码
* 全局常量、变量
* 公共样式
* 网络监听，设备类型和刘海屏判断
* 时间格式转换、正则校验
* 自定义导航条，支持设置左侧文字图片，网络本地背景图，渐变背景色，左侧和标题slot，返回home主页，导航条加搜索框
* 时间日期选择器、月日周时分选择器、字符串选择器、输入弹框
* 上下拉刷新、分组吸顶ListView
* 答题功能
* excel导入导出
* 表格、表单录入
* 树结构数据展示
* 热门搜索和历史搜索框
* 侧滑筛选
* 轮播图
* 自定义加载框
* custom-tabbar（动态设置、不闪屏）
* 波浪背景动画
* 封装一些组件(在`jh-components`文件夹)和工具类(在`utils`文件夹)

<br>

## 三方组件库
* [WeUI](https://developers.weixin.qq.com/miniprogram/dev/extended/weui/)
```
建议通过扩展库引入，不占用小程序包体积
```
* [Vant](https://vant-contrib.gitee.io/vant-weapp/#/quickstart)
```
# 通过 npm 安装
npm i @vant/weapp -S --production
```
* [ColorUI](https://github.com/weilanwl/ColorUI/)
```
需下载源码手动导入
```
* [Wux](https://www.wuxui.com/#/quickstart)
```
# 通过 npm 安装
npm i wux-weapp -S --production
```

<br>

## 预览

部分页面效果如下：

| <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/wxLogin.jpg" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/pwdLogin.jpg" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/listView3.gif" width="187" height="419"> | 
| ------ | ------ | ------ | 
| <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/listView4.gif" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/topTab.gif" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/listViewGroup.gif" width="187" height="419"> | 
| <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/gridView3.jpg" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/gridView5.jpg" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/gridView6.jpg" width="187" height="419"> | 
| <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/eCharts5.jpg" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/eCharts6.jpg" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/eCharts8.jpg" width="187" height="419"> | 
| <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/customNav1.gif" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/customNav2.gif" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/customNav3.jpg" width="187" height="419"> |  
| <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/eCharts9.jpg" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/dropDownMenu.gif" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/inputPop.gif" width="187" height="419"> | 
| <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/ymdTimePicker.gif" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/timePicker.gif" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/stringPicker.jpg" width="187" height="419"> | 
| <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/loadingToast.gif" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/emptyView.jpg" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/swiper.jpg" width="187" height="419"> |  
| <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/timeSwitch.jpg" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/tree.jpg" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/examination.jpg" width="187" height="419"> |  
| <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/search_tabbar.jpg" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/sideslip.jpg" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/score.jpg" width="187" height="419"> | 
| <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/search.gif" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/table4.jpg" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/form.jpg" width="187" height="419"> | 
| <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/tabbar.gif" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/myFeedback.jpg" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/searchListView.jpg" width="187" height="419"> | 







