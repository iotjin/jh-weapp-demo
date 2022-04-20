# jh-weapp-demo

A new weapp project - 实现一些常用效果、封装通用组件和工具类 <br>
<br>

代码不定期更新

注：真实开发项目注意按需引用。例如：组件、工具类、`app.json`的引用，可通过代码依赖分析做优化。

<br>

# 小程序码

<img src="https://gitee.com/iotjh/res/raw/master/weapp/jh-weapp-demo.jpg">

<br>
<br>
<br>

## 实现的一些效果

* ListView相关
* GridView相关
* eCharts分包导入，异步加载，多图表延时加载，中国地图效果
* 腾讯地图使用，定位、地图选点、标注点连线计算距离
* 上下拉刷新、分组吸顶ListView
* 答题功能
* excel导入导出
* 表格、表单录入
* 树结构数据展示
* 热门搜索和历史搜索框
* 侧滑筛选
* 顶部搜索+分栏+侧滑、底部tabbar
* custom-tabbar（动态设置、不闪屏）
* 波浪背景动画
* 登录页、功能页等UI页面


## 组件

* 自定义导航条，支持设置左侧文字图片，网络本地背景图，渐变背景色，左侧和标题slot，返回home主页，导航条加搜索框（`jh-navbar`、`jh-custom-navbar`、`jh-capsule-navbar`）
* 公农历通用时间选择器。支持同步切换，设置默认选中时间、设置最大最小时间(公历范围：1901/01/01 ~ 2100/12/31)，标题栏颜色（`jh-lunar-picker`）
* 年月日和年月日时分选择器（`jh-ymd-time-picker`）
* 月日周时分选择器（`jh-time-picker`）
* 字符串选择器（`jh-string-picker`）
* 中间输入弹框（`jh-input-alert`）
* 底部输入弹框（`jh-input-picker`）
* 自定义加载框（`jh-loading-toast`）
* 树形结构数据组件（`jh-tree`）
* 轮播图组件（`jh-swiper-view`）
* 左右时间切换（`jh-time-switch`）
* 下拉菜单（`jh-dropdown-menu`）
* 上下拉刷新组件（`base-refresh-view`、`refresh`）


## 工具类

* `wx.request`网络请求封装（`httpUtils.js`）
* API管理（`apiCongfig.js`）
* 用户管理云函数请求Promise封装(`dataManager文件夹`)
* AES、RSA加解密，SHA256、MD5加密，base64编码解码（`encryptUtils.js`）
* 时间格式转换、周岁计算（`timeUtils.js`）
* 公历农历转换、星座、属相、虚岁计算（`lunarTimeUtils.js`）
* 正则校验（`checkUtils.js`）
* 权限判断（`authUtils.js`）
* 安全随机数（`commonUtils.js`）
* 全局常量、变量（`app.js`、`projectConfig.js`）
* 公共样式（`styles文件夹`）
* 网络监听，设备类型和刘海屏判断（`app.js`）


<br>

注：
>组件在`jh-components`文件夹<br>
>工具类在`utils`文件夹<br>
>网络请求和API管理在`http`文件夹<br>
>数据管理在`dataManager`文件夹<br>
>公共样式在`styles`文件夹<br>


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
<img src="https://gitee.com/iotjh/Picture/raw/master/weapp/map1.jpg" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/map3.jpg" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/map4.gif" width="187" height="419"> |
<img src="https://gitee.com/iotjh/Picture/raw/master/weapp/lunarTimePicker1.png" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/lunarTimePicker2.png" width="187" height="419"> | <img src="https://gitee.com/iotjh/Picture/raw/master/weapp/lunarTimePicker3.png" width="187" height="419"> |
<img src="https://gitee.com/iotjh/Picture/raw/master/weapp/lunarTimePicker.gif" width="187" height="419"> |  |  |