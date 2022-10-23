// 1.导入fs模块 来操控文件
const fs = require('fs');

// 2.调用fs.readFile方法读取文件内容
fs.readFile('../node/files/3-原成绩.txt','utf-8',function(err,dataStr){
    // 2.1判断文件是否读取成功
    if(err){
        return console.log('读取失败!' + err.message);
    }
    console.log('读取文件成功!' + dataStr);

    // console.log(dataStr);
    // 3.1把数据分割为数组
    const arrOld = dataStr.split(' ');
    // 3.2遍历数组 将 = 号转化为 ：号
    const arrNew = [];
    arrOld.forEach(item => {
        arrNew.push(item.replace('=',': '));
    })
    console.log(arrNew);
    // 3.3将arrNew转化为新的具有换行的字符串
    // Array.join方法 如果参数为空 则将数组每一项以逗号链接为一个字符串 如果参数不为空则以参数为中间者
    const newStr = arrNew.join('\r\n');
    console.log(newStr);

    // 4.调用fs.writeFile方法 把处理完毕的成绩 写入到新文件中
    fs.writeFile('./files/4-新成绩.txt',newStr,'utf8',function(err){
        if(err){
            return console.log('写入错误' + err.message);
        }
        console.log('写入成功!')
    })

});
