// 1.引入http模块
const http = require('http');
// 2.创建服务器实例
const server = http.createServer();
// 3.为服务器添加响应事件
server.on('request',(req,res) => {
    const str = `服务器收到请求:${req.url},收到的请求类型是:${req.method}`;
    // 解决响应客户端时中文乱码问题 用setHeader方法设置响应头Content-Type 的值为 text/html: charset=utf-8
    res.setHeader('Content-Type','text/html; charset=utf-8');
    console.log(str);
    // 响应客户端
    res.end(str);
})
// 4.开启服务器
server.listen(8080,()=>{
    console.log('已开启服务器:http://172.0.0.1:8080');
})
