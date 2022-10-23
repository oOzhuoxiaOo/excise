// 1.引入http模块
const http = require('http');
// 创建server实例
const server = http.createServer();
// 给server添加响应事件
server.on('request',(req,res)=>{
    const url = req.url;
    let content = '404 Not Fount';
    const str = `服务器收到请求:${req.url},请求的类型是${req.method}`;
    // 去除中文乱码 设置响应头Content-Type的值为 text.html; charset=utf-8
    // 注意 =号左右不能有空格
    res.setHeader('Content-Type','text/html; charset=utf-8');
    // res.setHeader('Content-Type','text/html; charset=utf-8');
    // 如果收到的url是/或者/indexx.html 则响应主页 如果是/aboout.html 则响应相关页面
    if(url === '/' || url === '/index.html'){
        content = `<h1>index.html主页</h1>`;
    } else if(url ==  '/about.html'){
        content = `<h1>about相关页面</h1>`;
    }
    console.log(str);
    res.end(content);
})
//  开启服务器
server.listen(8080,()=>{
    console.log('server at http://127.0.0.1:8080');
})

