//定义一个瀑布流的类
class waterFull {
    // 1.实例化只执行一次构造器
    // parame1:传入的容纳图的总盒子的类名或者id名
    // parame2:传入的所有图共有的类名
    constructor(parame1, parame2, dataArr) {
        //⭐保存数据
        this.parame1 = parame1;
        this.parame2 = parame2;
        this.dataArr = dataArr;
        this.gapWidth = 20;//图左右间隔
        this.gapHeight = 20;//图上下间隔
        this.columnCount = 0;//列数
        this.columnHeightArr = [];//每列高度组成的数组
        // 初始化
        this.init();
    }
    // 📕初始化设置
    init() {
        this.updateNode();//重新更新节点获取❌
        this.getColumn();//获得列数
        this.resetHeights();//重置列数组高度
        this.doPositionOne();//先进行第一行定位 ＋ 更新数组
        //this.updateHeights();//更新列数组高度
        this.doPositionOther();//其他行定位
        this.setBoxHeight();//设置容器box的高度(消除绝对定位对高度的影响)
        this.addScroll();//添加滚动事件
    }
    //📕更新节点
    updateNode() {//❌
        this.box = document.querySelector(this.parame1);
        this.items = document.querySelectorAll(this.parame2);
        this.imgWidth = this.items[0].offsetWidth;
        this.boxWidth = this.box.offsetWidth;
    }
    // 📕获得列数(总盒子宽 / (单图宽 + gapWidth))
    // return null
    getColumn() {
        this.columnCount = Math.floor(this.boxWidth / (this.imgWidth + this.gapWidth))//❌
    }
    // 📕重置列高数组
    resetHeights() {
        this.columnHeightArr = new Array(this.columnCount).fill(0);//初始化数组，填充全部为0
        // this.box.style.height = Math.max(this.columnHeightArr);
    }
    // 📕第一行定位(第一行的item top设置为0,left设置为 索引 * (单图宽 + 图间隙距))
    doPositionOne() {
        for (let i = 0; i < this.columnCount; i++) {
            this.items[i].style.top = 0;
            this.items[i].style.left = i * (this.imgWidth + this.gapWidth) + 'px';
            this.columnHeightArr[i] = this.items[i].offsetHeight;
        }
    }
    // 📕其他行定位
    doPositionOther() {
        for (let i = this.columnCount; i < this.items.length; i++) {
            const minValueColumn = Math.min(...this.columnHeightArr);//最小列高度值
            const minIndexColumn = this.columnHeightArr.indexOf(minValueColumn);//最小列索引
            this.items[i].style.top = minValueColumn + this.gapHeight + 'px';//图top定位
            this.items[i].style.left = minIndexColumn * (this.imgWidth + this.gapWidth) + 'px';//图left定位
            this.columnHeightArr[minIndexColumn] += this.items[i].offsetHeight + this.gapHeight;//更新最小列高度
        }
    }
    //📕设置box高度，修补绝对定位引起的高度塌陷
    setBoxHeight() {
        this.box.style.height = Math.max(...this.columnHeightArr) + 'px';
    }
    //📕增加滚动事件 滚动到底部时获取新数据追加元素
    addScroll() {
        window.addEventListener('scroll', () => {//箭头函数，改变this指向，使事件内部this指向waterFull实例
            const viewPortTop = document.documentElement.scrollTop - this.box.offsetTop;//获取在box中滚动距离
            const viewPortBottom = document.documentElement.clientHeight + viewPortTop;//获取在box中滚动距离 + 视口高度
            if (viewPortBottom >= Math.min(...this.columnHeightArr)) {//如果在box中滚动距离 + 视口高度  >= 最小列高度
                console.log('滚动到底部，开始获取新图，并且更新页面')
                this.appendItembyData();
                this.init();//刷新初始化页面//❌
            }
        })
    }
    // 📕根据模拟的数据，创建图元素添加到box元素
    appendItembyData() {
        console.log('开始根据数据创建元素,并追加到页面中')
        this.dataArr.forEach((val, index) => {
            let newItem = document.createElement('div');
            newItem.className = this.items[0].className;
            let newImg = document.createElement('img');
            newImg.src = val.src;
            newItem.appendChild(newImg);
            this.box.appendChild(newItem);
        })
    }

}