let arr = [1,2,3,4,5];
let set_01 = new Set([10,11,12]);
console.log(set_01);

let map_01 = new Map([['夏娜',90],['伊卡洛斯',100]]);
// map.set()
// 添加集合元素
map_01.set('空白',110);
map_01.set('薇尔莉特',120);
let a = map_01.get('空白');
console.log(a);
let bool_01 = map_01.has('空白');
console.log(bool_01);
map_01.delete('空白');

// map.has
// return bool
// 如果存在，返回true 不存在返回 false
console.log(map_01.has('夏娜'));
console.log(map_01.has('空白'));

// map.get
// return 键（属性）值 没找到返回underfined
console.log(map_01.get('夏娜'));
console.log(map_01.get('空白'));

console.log(map_01);

