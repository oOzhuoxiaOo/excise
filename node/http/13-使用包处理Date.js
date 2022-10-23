// 1.导入安装的包
// 注意：导入的名称，就是装包时候的名称

const moment = require('moment');
// 根据包名 取npm官网查文档 如何使用
const dt = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(dt);