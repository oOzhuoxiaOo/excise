// 1. 引入http模块
const http = require('http');
// 2. 创建serive服务器实列
const server = http.createServer();
// 3. 添加监听事件
// 3.1 req是请求对象 包含客户端相关的数据和属性
server.on('request',function(req,res){
    // 3.1.1 req.url是客户端请求的 url 地址
    const url = req.url;
    // 3.1.2 req.method 是客户端请求的 method 类型 post get
    const method = req.method;
    const str = `Your request url is ${url}, and request method id ${method}`;
    console.log(str);
    // 3.2.1 调用res.end()方法向客户端响应一些内容
    res.end(str);
})
// 4. 开启服务器
server.listen(8080,function(){
    console.log('server running at http://127.0.0.1:8080');
});
