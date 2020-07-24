const cloud = require('wx-server-sdk')
// cloud.init()
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})
var xlsx = require('node-xlsx');
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {

  // 1,通过fileID下载云存储里的excel文件
  const res = await cloud.downloadFile({
    // fileID: fileID,
    fileID: event.fileID,
  })

  function removeSpaces(String) {
    var arr = []
    for (var i in String) {
      if (String[i] != ' ') {
        arr += String[i]
      }
    }
    return arr
  }

  function getRandomCode(length) {
    if (length > 0) {
      var data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      var nums = "";
      for (var i = 0; i < length; i++) {
        var r = parseInt(Math.random() * 61);
        nums += data[r];
      }
      return nums;
    } else {
      return false;
    }
  }

  function genID(length) {
    // 13
    return (getRandomCode(length - 13) + new Date().getTime());
  }

  let fatherId = genID(32)

  const buffer = res.fileContent

  const tasks = [] //用来存储所有的添加数据操作
  //2,解析excel文件里的数据
  var sheets = xlsx.parse(buffer); //获取到所有sheets

  if (sheets.length == 3) {
    let allDataArr = []
    for (let index = 0; index < sheets.length; index++) {
      let sheet = sheets[index]
      let sheetName = sheet['name']
      let dic = {}
      //单选
      if (index == 0) {
        dic['singleChoice'] = []
        let rowArr = sheet['data']
        if (rowArr.length) {
          for (let j = 1; j < rowArr.length; j++) {
            row = rowArr[j];
            let sort = row.length > 0 ? row[0] : ''
            if (sort) {
              let tempDic = {}
              tempDic['id'] = genID(32)
              tempDic['fatherId'] = fatherId
              tempDic['sort'] = row.length > 0 ? row[0] : ''
              tempDic['knowledgePoints'] = row.length > 1 ? row[1] : ''
              tempDic['questionType'] = row.length > 2 ? row[2] : ''
              tempDic['difficulty'] = row.length > 3 ? row[3] : ''
              tempDic['fraction'] = row.length > 4 ? row[4] : ''
              tempDic['questionContent'] = row.length > 5 ? row[5] : ''
              let optionA = row.length > 6 ? row[6] : ''
              let optionB = row.length > 7 ? row[7] : ''
              let optionC = row.length > 8 ? row[8] : ''
              let optionD = row.length > 9 ? row[9] : ''
              // tempDic['option'] = [optionA, optionB, optionC, optionD]
              if (optionD) {
                tempDic['option'] = [optionA, optionB, optionC, optionD]
              } else {
                tempDic['option'] = [optionA, optionB, optionC]
              }
              let answer = row.length > 10 ? row[10] : ''
              answer = removeSpaces(answer)
              tempDic['answer'] = answer
              tempDic['analysis'] = row.length > 11 ? row[11] : ''
              dic['singleChoice'].push(tempDic)
            }
          }
        } else {
          return null;
        }
      }
      //多选
      if (index == 1) {
        dic['multipleChoice'] = []
        let rowArr = sheet['data']
        if (rowArr.length) {
          for (let j = 1; j < rowArr.length; j++) {
            row = rowArr[j];
            let sort = row.length > 0 ? row[0] : ''
            if (sort) {
              let tempDic = {}
              tempDic['id'] = genID(32)
              tempDic['fatherId'] = fatherId
              tempDic['sort'] = row.length > 0 ? row[0] : ''
              tempDic['knowledgePoints'] = row.length > 1 ? row[1] : ''
              tempDic['questionType'] = row.length > 2 ? row[2] : ''
              tempDic['difficulty'] = row.length > 3 ? row[3] : ''
              tempDic['fraction'] = row.length > 4 ? row[4] : ''
              tempDic['questionContent'] = row.length > 5 ? row[5] : ''
              let optionA = row.length > 6 ? row[6] : ''
              let optionB = row.length > 7 ? row[7] : ''
              let optionC = row.length > 8 ? row[8] : ''
              let optionD = row.length > 9 ? row[9] : ''
              // tempDic['option'] = [optionA, optionB, optionC, optionD]
              if (optionD) {
                tempDic['option'] = [optionA, optionB, optionC, optionD]
              } else {
                tempDic['option'] = [optionA, optionB, optionC]
              }
              let answer = row.length > 10 ? row[10] : ''
              answer = removeSpaces(answer)
              tempDic['answer'] = answer
              tempDic['analysis'] = row.length > 11 ? row[11] : ''
              dic['multipleChoice'].push(tempDic)
            }
          }
        } else {
          return null;
        }
      }
      //判断
      if (index == 2) {
        dic['judge'] = []
        let rowArr = sheet['data']
        if (rowArr.length) {
          for (let j = 1; j < rowArr.length; j++) {
            row = rowArr[j];
            let sort = row.length > 0 ? row[0] : ''
            if (sort) {
              let tempDic = {}
              tempDic['id'] = genID(32)
              tempDic['fatherId'] = fatherId
              tempDic['sort'] = row.length > 0 ? row[0] : ''
              tempDic['knowledgePoints'] = row.length > 1 ? row[1] : ''
              tempDic['questionType'] = row.length > 2 ? row[2] : ''
              tempDic['difficulty'] = row.length > 3 ? row[3] : ''
              tempDic['fraction'] = row.length > 4 ? row[4] : ''
              tempDic['questionContent'] = row.length > 5 ? row[5] : ''
              tempDic['option'] = ["对", "错"]
              let answer = row.length > 6 ? row[6] : ''
              answer = removeSpaces(answer)
              tempDic['answer'] = answer
              tempDic['analysis'] = row.length > 7 ? row[7] : ''
              dic['judge'].push(tempDic)
            }
          }
        } else {
          return null;
        }
      }
      allDataArr.push(dic)
    }
    allDataArr.push({
      subjectLibTime: event.subjectLibTime ? event.subjectLibTime : ''
    })
    // tasks.push(allDataArr)
    //3，把解析到的数据存到excelList数据表里

    // const promise0 = db.collection('SubjectLib_Table').where({
    //   subjectLibTime: allDataArr[3]['subjectLibTime']
    // }).remove()

    const promise = db.collection('SubjectLib_Table')
      .add({
        data: {
          _id: fatherId,
          singleChoice: allDataArr[0]['singleChoice'],
          multipleChoice: allDataArr[1]['multipleChoice'],
          judge: allDataArr[2]['judge'],
          subjectLibTime: allDataArr[3]['subjectLibTime'],
          createTime: new Date(),
          _openid: event.openId
        }
      })

    const promise2 = db.collection('SubjectLib_Table').doc('all')
      .update({
        data: {
          singleChoice: _.unshift(allDataArr[0]['singleChoice']),
          multipleChoice: _.unshift(allDataArr[1]['multipleChoice']),
          judge: _.unshift(allDataArr[2]['judge']),
        }
      })

    // tasks.push(promise0)
    tasks.push(promise)
    tasks.push(promise2)

  } else {
    return null;
  }

  // 等待所有数据添加完成
  let result = await Promise.all(tasks).then(res => {
    return res
  }).catch(function (err) {
    return err
  })
  return result
}