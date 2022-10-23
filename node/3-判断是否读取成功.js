const fs = require('fs');
fs.readFile('./files/1-test1.txt','utf8',function(err,dataStr){
    //  如果成功 err为null 如果失败 执行判断
    if(err) {
        // console.log(err);
        return console.log('读取文件失败!' + err.message)
    }
    console.log('读取文件成功!' + dataStr);
})

// let a = {}
// if(a){
//     console.log(a);
// } else {
//     console.log('夏娜');
// }