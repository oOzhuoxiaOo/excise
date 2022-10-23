## 添加server响应事件中的req 和res
```js
server.on('request',(req,res)=>{
    }) 
```
    req 就是 request或者require，即“请求，需求，要求”的意思
    res 就是 response，即“响应，反应，答复”的意思
*通常**req**用作传递给函数和方法的参数，而**res**则是函数的执行结果或者回调信息。
当然，这是两个名称，不是硬性规定一定要用它们的，完全可以根据自己的喜好改用其他名称，比方说x和y*
>参考链接[link](https://zhidao.baidu.com/question/814198285797650172.html)