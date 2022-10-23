// 加载内置模块
const fs = require('fs');
// 加载自定义模块 
// 加载即是执行
// 📕注意 加载自定义模块 可以省略.js
const m1 = require('../custerModel/m1.js')
//m1为空对象 模块也有作用域 类似函数作用域
// 作用域的好处：防止全局变量污染的问题
console.log(m1);
// 第三方模块