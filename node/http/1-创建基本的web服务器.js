// 1.导入http模块
const http = require('http');
// 2.创建web服务器实列
const serive = http.createServer();
// 3.为服务器实列绑定request事件 监听客户端请求
serive.on('request',function(req,res){
    console.log('Someone visit our web server')
})
// 4.启动服务器
serive.listen(8080,function(){
    console.log('serive running at http://127.0.0.1:8080')
})