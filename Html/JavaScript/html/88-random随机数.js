// random()不含参数 返回的是一个[0,1)随机数
console.log(Math.random());

// 要想获得一个1两数之间的随机数
function getRandomInt(min, max) {
    return Math.floor(min + (max - min + 1) * Math.random());
}
console.log(getRandomInt(2,10));

// 3.随机点名
var arr = ['伊卡洛斯', '夏娜', '亚斯娜']; 
console.log(arr[getRandomInt(0, arr.length - 1)]);
