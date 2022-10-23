
// 原学生分数数据
const scores = [
    { Numb: 'NO074', Chinese: 98, Math: 69, English: 76 },
    { Numb: 'NO076', Chinese: 88, Math: 80, English: 90 },
    { Numb: 'NO081', Chinese: 78, Math: 83, English: 88 },
    { Numb: 'NO063', Chinese: 95, Math: 56, English: 87 },
    { Numb: 'NO101', Chinese: 89, Math: 90, English: 76 },
    { Numb: 'NO120', Chinese: 67, Math: 78, English: 73 },
    { Numb: 'NO59', Chinese: 60, Math: 67, English: 90 },
];


// 🌙把原数据数组scoresu 克隆给 新数组 newT
// 💧新数组newT目的：
// 1.给数组里每个对象添加总分属性 2.克隆给新数组 （总分排序totalPoint）
let newT = scores;
console.log(scores);
// ⭐添加总分数据
newT.forEach(function(value){
    value.sum = value.Chinese + value.Math + value.English;
})
// 添加是否成功？ true
console.log(newT);


// 🌙🌙把拥有总分数据的newT 克隆给 新数组totalPoints
// 💧新数组totalPoints:1.需要进行总分排序 2.把排序后的数组 展示到文档 
let totalPoints = newT;
// 给总分排序 从大到小
// 注释：sort() 方法会改变原始数组
totalPoints.sort(function(a,b){
    return b.sum - a.sum;
})
// 排序是否成功？ true
console.log(totalPoints);


// 给单科成绩排序
// 数学Math
 let mathSort = newT;
 mathSort.sort(function(a,b){
    return b.Math - a.Math;
 })
//  排序是否成功:true
 console.log(mathSort);


// 给单科成绩排序
// 数学Chinese
 let chineseSort = newT;
 chineseSort.sort(function(a,b){
    return b.Chinese - a.Chinese;
 })
//  排序是否成功:true
 console.log(chineseSort);


// 给单科成绩排序
// 数学English
 let englishSort = newT;
 englishSort.sort(function(a,b){
    return b.English - a.English;
 })
//  排序是否成功:true
 console.log(englishSort);







