
// 导入fs模块 来操作文件
const fs = require('fs');

// fs.writeFile方法，导入文件内容
// 参数1：导入的文件路径
// 参数2：导入的文件内容
// 参数3：导入的文件编码格式 （可省略）
// 参数4：回调函数
fs.writeFile('./files/3-test.txt','hello writeFile','utf8',function(err){
    if(err){
        return console.log('文件写入失败');

    } 
  console.log('文件写入成功')
    
    
})
