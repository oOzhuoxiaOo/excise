// 🌙导入fs和path模块
const fs = require('fs')
const path = require('path')

// 🌙设置正则表达式 :
// 读取style和script
// 匹配<style></style>
// \/表示把/转义为/ \s表示空格 \S表示非空格 *表示个数
let rgeStyle = /<style>[\s\S]*<\/style>/
let rgeScript = /<script>[\s\S]*<\/script>/

// 🌙读取文件:使用fs.readFile()方法
fs.readFile(path.join(__dirname, './10-要拆分的html.html'), 'utf8', function (err, dataStr) {
    // ⭐如果读取文件失败
    if (err) return console.log('读取文件失败!' + err.message)
    // ⭐如果读取成功
    console.log('读取文件成功!' + dataStr);
    resolveCss(dataStr);
    resolveScript(dataStr);
    resolveHtml(dataStr);
})

//📕定义处理 css样式的方法
function resolveCss(htmlStr) {
    // 🔖使用正则提取需要的内容 
    //     exec() 方法是一个正则表达式方法。
    // exec() 方法用于检索字符串中的正则表达式的匹配。
    // 该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
    const r1 = rgeStyle.exec(htmlStr)
    console.log(r1[0])
    // 🔖把首部<style> 尾部</style>去掉替换为空
    const newCss = r1[0].replace('<style>','').replace('</style>','')
    console.log(newCss);
    // 🔖把去掉首位的样式字符串写入10-集合文件里的10-.css文件中
    fs.writeFile(path.join(__dirname,'./10-集合处/10-.css'),newCss,'utf8',err => {
        if(err) return console.log('文件写入失败!' + err.message)
        console.log('文件写入成功!')
    })

}

//📕定义处理 css样式的方法
function resolveScript(htmlStr) {
    // 🔖使用正则提取需要的内容 
    //     exec() 方法是一个正则表达式方法。
    // exec() 方法用于检索字符串中的正则表达式的匹配。
    // 该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
    const r1 = rgeScript.exec(htmlStr)
    console.log(r1[0])
    // 🔖把首部<style> 尾部</style>去掉替换为空
    const newScript = r1[0].replace('<script>','').replace('</script>','')
    console.log(newScript);
    // 🔖把去掉首位的样式字符串写入10-集合文件里的10-.css文件中
    fs.writeFile(path.join(__dirname,'./10-集合处/10-.js'),newScript,'utf8',err => {
        if(err) return console.log('文件写入失败!' + err.message)
        console.log('文件写入成功!')
    })

}

// 📕定义处理html样式的方法
function resolveHtml(htmlStr) {
    const r1 = htmlStr
    // 将html字符串里的 style script 替换为引用链接
    const newHtml = r1
    .replace(rgeStyle,'<link rel="stylesheet" href="./10-.css">')
    .replace(rgeScript,'<script src="./10-.js"></script>')
    // 写入html文件
    fs.writeFile(path.join(__dirname,'./10-集合处/10-.html'),newHtml,'utf8',err => {
        if(err) return console.log('文件写入错误!' + err.message)
        console.log('文件写入成功')
    })

}