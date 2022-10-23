// 1. 导入相关http、fs模块
const http = require('http');
const fs = require('fs');
const path = require('path');
// 2. 创建服务器实例
const server = http.createServer();
// 3. 添加服务器响应事件
server.on('request',(req,res)=>{
    // 3.1 获取响应的url
    const url = req.url;
    // 3.11 防止中文乱码 给响应头Content-Type 的值设置为 text/html; charset=utf-8
    // 3.12根据url读取文件
    // 📕注意 文件名最好不要取中文
    fs.readFile(path.join(__dirname,'../../',url),'utf-8',(err,dataStr)=>{
        if(err) return res.end('404 Not fount');
        console.log('读取文件成功!');
        // 将读取的文件响应给客户端
        res.end(dataStr);
    })
})
// 4.开启服务器
server.listen(8080,()=>{
    console.log('server running at http//127.0.0.1:8080');
})