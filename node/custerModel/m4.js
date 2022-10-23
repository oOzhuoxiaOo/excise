// exports和mdule.exports指向的是同一个 对象
exports.username =  '夏娜';
exports.age = 16;

module.exports.like = '吃菠萝包';

// 此时改变exports的指向 在require时 
// 得到的就不是exports所指向的
// 因为require得到的永远都是是 module.exports指向的对象
exports =  {
    foot:'兰州拉面',
}