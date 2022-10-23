// 1.绝对值方法 math.abs
console.log(Math.abs(-1));
//隐式转换 会把字符串 -1 转化为 数字型
console.log(Math.abs('-1')); 
//把非数字字符串 'xiana' 结果为not a number
console.log(Math.abs('xiana')); 

// 2.三个取整方法
// (1) math,floor() 地板 向下取整 往最小了取整
console.log(Math.floor(3.9));
console.log(Math.floor(3.1));
// (2) Math.ceil 地板 往上取整 往最大了取值
console.log(Math.ceil(3.9));
console.log(Math.ceil(3.1));
// (3) Math,round() 四舍五入
console.log(Math.round(3.9));
console.log(Math.round(3.1));