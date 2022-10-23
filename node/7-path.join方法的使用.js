const path = require('path');
// 参数可以是多个
let strPath = path.join(__dirname,'./files/5-路径测试.txt');
console.log(__dirname)
console.log(strPath)
// ../可以抵消前一条路径
 
const fs = require('fs')
// 如果使用加号 可能会导致这个有个点 如果用path.join 就不会多点
fs.readFile(path.join(__dirname,'./files/5-路径测试.txt'),'utf8',function(err,dataStr){
    if(err){
        return console.log('读取错误!' + err.message)
    }
    console.log('读取成功!' + dataStr);
})