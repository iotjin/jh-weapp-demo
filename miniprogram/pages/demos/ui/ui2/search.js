const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '', //输入的值
    isShowResultView: false, //显示搜索结果view，当输入框有内容显示
    hotKeywords: [],
    hotSearchArr: ["热搜1", "热搜2", "热搜3sadfasdfasdfasdfadsfa", "热搜4", "热搜5234234234234", "热搜6sdfsdfsdfsd", "热搜7"],
    searchHistoryArr: ["历史1", "历1231231231wert23123213史2", "历史13", "历wer史wer13", "历史werwer13", "历werewrwer史13"],
    searchResultArr: ["结果1", "结果2", "结果3", "结果4", "结果5", "结果6", "结果7", "结果8", "结果9", "结果10"]
  },
  //输入内容改变
  onChange(e) {
    // console.log(e.detail);
    this.setData({
      inputValue: e.detail,
      isShowResultView: e.detail ? true : false,
    });

  },
  //点搜索
  onSearch() {
    console.log("点击搜索");
  },
  //点取消
  onCancel() {
    console.log("点击取消");
  },

  //点击热搜 - item
  ClickHotSearchItem(e) {
    let selText = e.currentTarget.dataset.text;
    console.log("点击热搜 - item === "+selText);
  },
  //清空热搜
  CleanHotSearch(e) {
    console.log("清空热搜");
  },
  //点击搜索历史 - item
  ClickHistoryItem(e) {
    let selText = e.currentTarget.dataset.text;
    console.log("点击搜索历史 - item === "+selText);
  },
  //清空搜索历史
  CleanHistory(e) {
    console.log("清空搜索历史");
  },
  //删除某条搜索历史
  CleanHistoryItem(e) {
    let selText = e.currentTarget.dataset.text;
    console.log("删除某条搜索历史(新设置一个data-text) === "+selText);
  },
  //点击搜索结果页 item
  ClickResultItem(e) {
    let selText = e.currentTarget.dataset.text;
    console.log("点击搜索结果页 item === "+selText);
  },


})