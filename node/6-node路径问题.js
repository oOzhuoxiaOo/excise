const fs = require('fs');
// 🌙由于node 指令 是以node处为基点，如果在fs.readFile指令中的路径为相对路径 会发生路径拼接 
// 比如node 处位置 -----excise ＋ ./files/5-text等 中间缺少node文件夹
// 解决方案 使用绝对路径 
// 绝对路径也有缺点：
// 移植性非常差，不利于维护
// 有更优化方案 使用__dirname
//📕 dirnanme表示当前文件所处的目录
// console.log(__dirname);


// \为转义字符 此处需要将\转义为\
// fs.readFile('C:\\Users\\zhuoxia\\Desktop\\zong\\date_base\\Vscode_Item\\excise\\node\\files\\5-路径测试.txt','utf-8',function(err,dataStr){
//     if(err){
//         return console.log('文件读取错误！' + err.message);
//     }
//     console.log('文件读取成功' + dataStr);
// })



fs.readFile(__dirname + '/files/5-路径测试.txt','utf-8',function(err,dataStr){
    if(err){
        return console.log('文件读取错误！' + err.message);
    }
    console.log('文件读取成功' + dataStr);
})



