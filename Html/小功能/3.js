window.onload = function () {
    // 假数据
    let dataArr = [
        { src: '/Image/Pz-0001.png' },
        { src: '/Image/Pz-0002.png' },
        { src: '/Image/Pz-0003.png' },
        { src: '/Image/Pz-0004.png' },
        { src: '/Image/Pz-0005.png' },
        { src: '/Image/Pz-0006.png' },
        { src: '/Image/Pz-0007.png' },
        { src: '/Image/Pz-0008.png' },
        { src: '/Image/Pz-0009.png' },
        { src: '/Image/Pz-0010.png' },
        { src: '/Image/Pz-0011.jpg' },
        { src: '/Image/Pz-0012.png' },
        { src: '/Image/Pz-0013.png' },
        { src: '/Image/pz-0014.jfif' },
        { src: '/Image/pz-0015.jfif' },
        { src: '/Image/Wp-0001.jpg' },
        { src: '/Image/Wp-0002.jpg' },
        { src: '/Image/Wp-0003.jpg' },
        { src: '/Image/Wp-0004.jpg' },
    ]
    waterFall('.box', '.item');
    let scrollDelay = null;
    let flag = true;
    window.addEventListener('scroll', function () {
        // console.log(document.body.scrollHeight)
        if(flag) {
            clearTimeout(scrollDelay);
            if (check('.box','.item')) {
                flag = false;
                scrollDelay = setTimeout(()=>{
                    for (let i = 0; i < dataArr.length; i++) {
                        let box = document.querySelector('.box')
                        let item = document.createElement('div');
                        let img = document.createElement('img');
                        img.src = dataArr[i].src;
                        item.className = 'item';
                        item.appendChild(img);
                        box.appendChild(item);
                    } 
                    waterFall('.box', '.item');
                    flag = true;
                },2000)
            }
        }
    })
}

function manageCreate(){

}

// 参数:传入图的选择器
function check(parame1,parame2) {
    let box = document.querySelector(parame1)
    let items = document.querySelectorAll(parame2);
    let lastItem = items[items.length - 1];//最后一个图
    // 最后一个img距顶部box高度 + 自身高度一半
    let lastHeight = lastItem.offsetTop + lastItem.offsetHeight / 1.2;
    // 最后img一个自身高度
    // 如果滚动高度 + 分辨率高度 >= 最后一个图中间距离顶部的距离 返回true
    console.log(`滚动: + ${window.pageYOffset + window.screen.height - box.offsetTop} <> lastHeight: + ${lastHeight}`)
    return (window.pageYOffset + window.screen.height -box.offsetTop >= lastHeight);
}

// box:父盒子的class或者id item子盒子的id或者class
function waterFall(boxName, itemName) {
    // 1.1获取父盒子
    let box = document.querySelector(boxName);
    // 1.2获取所有图片盒子
    let items = document.querySelectorAll(itemName);
    // console.log(box)//❌true
    // console.log(items)//❌true

    // 1.3获取单图宽度
    let imgWidth = items[0].clientWidth;
    // console.log(imgWidth);//❌true
    // 1.4获取文档宽度 (clientWidth不包含边框)
    let boxWidth = box.clientWidth;
    // console.log(boxWidth)//❌true

    // 1.5设置每张图片间隔 10px
    let gap = 20;

    // 1.6根据body宽度和item宽度获取列数
    let cols = parseInt(boxWidth / (imgWidth + gap));//取整为向下
    // console.log(cols);//❌true
    // 1.7定义变量
    // heightArr:每列总高度
    let heightArr = [];
    let boxHeight = 0;//当前item高度
    let minColsHeight = 0;//数组中最小列总高度
    let minColsIndex = 0;//最小列索引

    // 2.📕遍历所有盒子
    for (let i = 0; i < items.length; i++) {
        // 当前盒子的高度(offsetHeight含边框)
        boxHeight = items[i].offsetHeight;
        // console.log(`boxHeight-${i}:` + boxHeight)//❌true
        // 2.1判断是否为第一行
        if (i < cols) {
            items[i].style.top = 0;
            items[i].style.left = i * imgWidth + i * gap + 'px';
            heightArr.push(boxHeight);
        } else { // >=1行做定位
            // 取出数组中最小列高度
            minColsHeight = Math.min(...heightArr);
            // 取出最小列高度对应的索引
            minColsIndex = heightArr.indexOf(minColsHeight);

            // 剩余盒子的定位
            items[i].style.top = minColsHeight + gap + 'px';
            items[i].style.left = minColsIndex * imgWidth + minColsIndex * gap + 'px';
            // 更新高度
            heightArr[minColsIndex] += boxHeight + gap;
        }
        console.log(heightArr)
    }
    // 设置父box的高度
    box.style.height = Math.max(...heightArr) + 'px';


}
/* 
瀑布流利用offsetHeight获取包裹块高度非实际值
原因：图片未加载，渲染。所以统计的高度不包含图片的高度。所以存在误差。
解决办法：
1.onload 之后，调用。
2.延迟调用，setTimeout(); */