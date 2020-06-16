Page({
  data: {
    dataArr: [{
        "AB_MonthDay": "30/06",
        "AB_ZhiChu": "1111",
        "AB_ShouRu": "2222",
        "AB_Bill": [{
          "AB_LeiBie": "吃饭1",
          "AB_Money": "11",
          "AB_Remark": "备注",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        },{
          "AB_LeiBie": "吃饭1",
          "AB_Money": "22",
          "AB_Remark": "备注2",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        },{
          "AB_LeiBie": "红包1",
          "AB_Money": "33",
          "AB_Remark": "备注33",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "收入",
        },
      ]
      },
      {
        "AB_MonthDay": "29/06",
        "AB_ZhiChu": "1111",
        "AB_ShouRu": "2222",
        "AB_Bill": [{
          "AB_LeiBie": "吃饭2",
          "AB_Money": "22",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        }]
      },
      {
        "AB_MonthDay": "28/06",
        "AB_ZhiChu": "1111",
        "AB_ShouRu": "2222",
        "AB_Bill": [{
          "AB_LeiBie": "吃饭3",
          "AB_Money": "33",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        }]
      },
      {
        "AB_MonthDay": "27/06",
        "AB_ZhiChu": "1111",
        "AB_ShouRu": "2222",
        "AB_Bill": [{
          "AB_LeiBie": "吃饭4",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        }]
      },
      {
        "AB_MonthDay": "26/06",
        "AB_ZhiChu": "1111",
        "AB_ShouRu": "2222",
        "AB_Bill": [{
          "AB_LeiBie": "吃饭4",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        }]
      },
      {
        "AB_MonthDay": "25/06",
        "AB_ZhiChu": "1111",
        "AB_ShouRu": "2222",
        "AB_Bill": [{
          "AB_LeiBie": "吃饭4",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        }]
      },
      {
        "AB_MonthDay": "24/06",
        "AB_ZhiChu": "1111",
        "AB_ShouRu": "2222",
        "AB_Bill": [{
          "AB_LeiBie": "吃饭4",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        }]
      },
      {
        "AB_MonthDay": "23/06",
        "AB_ZhiChu": "1111",
        "AB_ShouRu": "2222",
        "AB_Bill": [{
          "AB_LeiBie": "吃饭4",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        }]
      },
      {
        "AB_MonthDay": "22/06",
        "AB_ZhiChu": "1111",
        "AB_ShouRu": "2222",
        "AB_Bill": [{
          "AB_LeiBie": "吃饭4",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        }]
      },
      {
        "AB_MonthDay": "21/06",
        "AB_ZhiChu": "1111",
        "AB_ShouRu": "2222",
        "AB_Bill": [{
          "AB_LeiBie": "吃饭4",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        }]
      },
      {
        "AB_MonthDay": "20/06",
        "AB_ZhiChu": "1111",
        "AB_ShouRu": "2222",
        "AB_Bill": [{
          "AB_LeiBie": "吃饭4",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        }]
      },
      {
        "AB_MonthDay": "19/06",
        "AB_ZhiChu": "1111",
        "AB_ShouRu": "2222",
        "AB_Bill": [{
          "AB_LeiBie": "吃饭4",
          "AB_Money": "44",
          "AB_Remark": "",
          "AB_Date": "2011-11-11 15:38:16",
          "AB_FenLei": "支出",
        }]
      },
    ]

  },
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '分组列表'
    })
  },
  onPageScroll: function (res) {
    console.log(res.scrollTop);
  }

})