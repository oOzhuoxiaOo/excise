// 初级：自己做自定义模块
// 高级：下载npm 的包 使用别人的包

// 需求：实列化时间后 格式化时间（取出实列化时间中1核心信息和补零比如9h->09h）
const Time = require('../custerModel/m5');


const dt = new Date();
console.log(dt);
const newDT = Time.dateFormat(dt);
console.log(newDT);