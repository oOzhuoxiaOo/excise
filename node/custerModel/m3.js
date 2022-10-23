// 在一个子自定义模块中，默认情况下，module.exports = {}
module.exports.username  = 'zs';
const age = 20;

module.exports.age = age;

module.exports.sayHello = function(){
    console.log('hello');
}

// 让module.exports指向一个全新的对象 也就是指向了新的对象
module.exports = {
    newname:'夏娜',
    saySing:function(){
        console.log('at Sing');
    }
}