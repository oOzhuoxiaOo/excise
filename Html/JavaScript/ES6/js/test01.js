let arr00 = new Array(4);
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 解构和展开运算符
let [one, two, three, ...arr01] = arr;
console.log(arr01);
console.log(arr00);
// 末尾添加新数据 返回新数组长度
let length01 = arr01.push(10);
console.log(arr01);
console.log(length01);

// arr.filter 
// return 新数组
// 把符合条件的筛选出来 遍历
let arr02 = arr01.filter(function (value) {
    return value >= 5;
})
console.log(arr02);


// arr.some
// return bool
// 只要有一个符合 就停止遍历，返回一个布尔值true ？ false
let bool02 = arr02.some(function (value, index) {
    console.log(index);
    return value >= 7;
})
console.log(bool02);


// arr.forEach()
// 遍历数组
// value为值 index为索引
arr.forEach(function (value, index) {
    console.log(`${index}:${value}`);
})


// arr.concat
// return newArray;
// 将数组拼接 返回一个新的拼接后的数组
let arr03 = ['夏娜', '伊卡洛斯'];
let arrConcat = arr03.concat(arr02, ['天地']);
console.log(arrConcat);


// arr.sort(function(a,b){return a-b})
// return newArray;
// 数组内大小排序，为回调函数，如果a - b > 0 ,将a b 换位置 也就是从小到大 b - a > 0 互换位置 从大到小
let arr04 = arr02.sort(function (a, b) {
    return a - b;
});
console.log(arr02);
console.log(arr04);


// arr.indexOf()
// return 第一次该数据出现的索引  如果没找到 返回-1
let index_first = arr02.indexOf(10);
console.log(index_first);
// arr.lastIndexOf()
// return 最后一次该数据出现的索引 如果没找到 返回-1
let index_last = arr02.lastIndexOf(10);
console.log(index_last);


// arr.find(fun)
// return 元素本身 如果没找到 返回underfined
console.log(arr02);
let find_self = arr02.find(function (value) {
    return value == 10;
})
console.log(find_self);
// arr.findIndex(fun)
// return 元素本身的索引 如果没找到 返回-1
let find_selfIndex = arr02.findIndex(function (value) {
    return value == 10;
})
console.log(find_selfIndex);

// arr.split('本处为分隔符')
// return newArray
// 将字符串分割为数组
let str05 = '天天,地地,人人';
let arr05 = str05.split(',');
console.log(arr05);

// str.join('分隔符')
// return newStr
// 将数组分割为字符串
let str05_05 = arr05.join(',');
console.log(str05_05);







let arr06 = [2, 4, 6, 8, 11, 7, 9];
// 先经过排序，找出数组中的偶数打印索引值

let newArr06 = arr06.sort(function (a, b) {
    return a - b;
})
console.log(newArr06);
// 定义偶数索引
let indexArr = [];
newArr06.forEach(function (value, index) {
    if (value % 2 == 0) {
        console.log(`${index}:${value}`);
        // 添加偶数索引
        indexArr.push(index);
    }
})
console.log(indexArr);
// 输出偶数索引
indexArr.forEach(function (value) {
    console.log(value);
})



// 去重

let arr07 = [1, 3, 5, 7, 11, 5, 5];
let newJihe07 = new Set(arr07);
console.log(newJihe07);
// 将集合转化为数组
arr07 = [...newJihe07];
console.log(arr07);