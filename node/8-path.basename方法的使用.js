const path = require('path')

// 🌙获取路径中的文件名
// 定义文件的存放路径
const fpath = path.join(__dirname,'./files/5-路径测试.txt')
// 获取文件路径中 最后一个完整文件名 5-路径测试.txt
let fname = path.basename(fpath)
console.log(fname)
// 去除扩展名 第二个参数是扩展名
let newFname = path.basename(fpath,'.txt')
console.log(newFname)