const path = require('path')

let fpath = path.join(__dirname,'./files/5-路径测试.txt')

// path.extname(path)
// return str
// 参数为字符串路径

// 获取文件的扩展名 .txt等 
let extName = path.extname(fpath)
console.log(extName)