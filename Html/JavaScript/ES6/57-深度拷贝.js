let xiana = {
    id:1,
    name:'夏娜',
    msg:{
        age:18
    }
}
// 对象的深拷贝
console.log(xiana);
function deepCopy(newObj,oldObj){
    for(let item in oldObj) {
        newObj[item] = oldObj[item];
        console.log(item);
    }
}
let o = {};
Object.assign(o,xiana);
// deepCopy(o,xiana);
// o.id = 2;
console.log(xiana);
console.log(o);