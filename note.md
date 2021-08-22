引入第三方

// WeUI组件库，建议通过扩展库引入，不占用小程序包体积
https://developers.weixin.qq.com/miniprogram/dev/extended/weui/

// vant
npm i @vant/weapp -S --production

//wxui  tabs
npm i @miniprogram-component-plus/tabs --save

# wux
npm i wux-weapp -S --production

ColorUI 需下载源码手动导入 https://github.com/weilanwl/ColorUI/


更新：

npm list //命令查询现在系统安装的版本

npm view @vant/weapp versions  //命令查询服务器现在有的vant的版本

npm uninstall @vant/weapp  //移除现在系统安装的vant-weapp的版本

再次运行安装命令安装之后， 选择“工具”——>“构建npm”


