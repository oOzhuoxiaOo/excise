// 正则表达式
// 1. /abc/ 表示 字符中 必须 含有abc
let ruge = /abc/
console.log(ruge.test('abc'))
console.log(ruge.test('333abc1'))
console.log(ruge.test('ab11c'))
// 2. /^abc/ 表示 字符中 必须 以abc开头
ruge = /^abc/
console.log(ruge.test('abc'))
console.log(ruge.test('111abc'))
console.log(ruge.test('abc222'))
// 3./abc$/ 表示 字符中 必须 以abc结尾
ruge = /abc$/
console.log(ruge.test('abc'))
console.log(ruge.test('111abc'))
console.log(ruge.test('abc222'))
// 4./^abc$/ 表示 字符中 必须是abc这三个字符 (精准匹配)
ruge = /^abc$/
console.log(ruge.test('abc'))
console.log(ruge.test('111abc'))
console.log(ruge.test('abc222'))
// 5./[abc]/ 表示 字符中 有a 或者 有b 或者  有c 就true
ruge = /[abc]/
console.log(ruge.test('a'))
console.log(ruge.test('b'))
console.log(ruge.test('c'))
console.log(ruge.test('111ac'))
console.log(ruge.test('222'))
// 6./^[abc]$/ 表示 字符中 只有a 或者 只有b 或者  只有c 就true
ruge = /^[abc]$/
console.log(ruge.test('a'))
console.log(ruge.test('b'))
console.log(ruge.test('c'))
console.log(ruge.test('ac'))
console.log(ruge.test('222'))
// 7./^[a-z]$/ 表示 字符中 a-z 26个字母 只有（26小写字母的一个） 就true 等价/^[abcdef....]$/
// 数字也可同理
ruge = /^[a-z]$/
console.log(ruge.test('a'))
console.log(ruge.test('b'))
console.log(ruge.test('w'))
console.log(ruge.test('111ac'))
console.log(ruge.test('222'))
// 8./^[a-zA-Z1-9]$/ 表示 字符中 a-z 26个字母 只有（26字母的一个） 就true 等价/^[abcdef....]$/
// 字符组合a-z A-Z 1-9
// 数字也可同理
ruge = /^[a-zA-Z1-9]$/
console.log(ruge.test('a'))
console.log(ruge.test('B'))
console.log(ruge.test('w'))
console.log(ruge.test('111ac'))
console.log(ruge.test('2'))
// 8./^[^a-zA-Z1-9]$/ 表示 []中括号里的^表示取反 和//里的不一样

ruge = /^[^a-zA-Z1-9]$/
console.log(ruge.test('a'))
console.log(ruge.test('B'))
console.log(ruge.test('w'))
console.log(ruge.test('!'))
console.log(ruge.test('2'))

// 📕量词符
// /^a*$/   *表示 0次以上都行 也就是 >=0 
ruge = /^a*$/
console.log(ruge.test(''))
console.log(ruge.test('a'))
console.log(ruge.test('aa'))
console.log(ruge.test('w'))
console.log(ruge.test('!'))
console.log(ruge.test('2'))


// /^a*$/   +表示 1次以上都行 也就是 >=1
ruge = /^a+$/
console.log(ruge.test(''))
console.log(ruge.test('a'))
console.log(ruge.test('aa'))
console.log(ruge.test('w'))
console.log(ruge.test('!'))
console.log(ruge.test('2'))


// ?表示一次或者0次
ruge = /^a?$/;
console.log(ruge.test(''))
console.log(ruge.test('a'))
console.log(ruge.test('aa'))
console.log(ruge.test('w'))
console.log(ruge.test('!'))
console.log(ruge.test('2'))


// {3}是重复三次
// {3,}表示3次及以上 >=3
ruge = /^a{3,}$/
console.log(ruge.test(''))
console.log(ruge.test('a'))
console.log(ruge.test('aa'))
console.log(ruge.test('aaa'))
console.log(ruge.test('aaaa'))
console.log(ruge.test('2aaa'))


// {3,6}表示     >=3 <=6
ruge = /^a{3,6}$/
console.log(ruge.test(''))
console.log(ruge.test('a'))
console.log(ruge.test('aa'))
console.log(ruge.test('aaa'))
console.log(ruge.test('aaaa'))
console.log(ruge.test('aaaaaaa'))

// 表示 只是让c重复三次
ruge = /^abc{3}$/
console.log(ruge.test(''))
console.log(ruge.test('a'))
console.log(ruge.test('abccc'))
console.log(ruge.test('aaa'))


// 表示 ()表示优先级 让括号内容重复三次
ruge = /^(abc){3}$/
console.log(ruge.test(''))
console.log(ruge.test('abcabcabc'))
console.log(ruge.test('abccc'))
console.log(ruge.test('aaa'))



// 表示 前面三位任意字母数字下划线 ＋ - ＋ 后面七位数字
// |表示或者
//\s表示空格
ruge = /^\w{3}-\d{7}|\s{3}$/
console.log(ruge.test('   '))
console.log(ruge.test('abc-4567891'))
console.log(ruge.test('abccc'))
console.log(ruge.test('aaa'))



