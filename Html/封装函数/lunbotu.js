class LunBoTu {
    //TODO 23
    constructor(box, imgDataArr) {
        this.circleBgDefault = 'rgb(255,255,255,.5)';//小圆点默认yanse
        this.circleBgChanged = 'rgb(255,255,255)';//选中后小圆点颜色
        this.circleWidthDefault = '15px'
        this.circleWidthChanged = '20px'
        this.imgIndex = 0;//初始图数据的1索引（也就是切换到了哪一个图byData (场景:初始化，左按钮，右按钮，定时器)
        this.Interval = null;//初始化定时器 作为实例属性进行移除和添加
        this.IntervalTime = 3000;//定时器时间
        this.flag = true;//节流阀
        this.imgDataArr = imgDataArr;
        this.lunbotu = document.querySelector(box);
        this.init();
    }
    init() {
        this.createNodeByData();//创建节点
        this.updateNode();//更新节点
        this.addStyle();//给创建的节点添加类样式
        this.toggleImgLeft();//切换左图片
        this.toggleImgRight();//切换右图片
        this.toggleCircle();;
        this.doInterval();//做一个定时器 循坏图片
        this.manageInterval();//鼠标在图上时清除定时器，反之加(注意冒泡)
    }
    updateNode() {

    }
    // 添加类样式
    //创建box里所有元素 并且追加到页面(无添类)
    createNodeByData() {
        let lunbotu_ul = document.createElement('ul');//存放图的ul
        let lunbotu_ul_li = document.createElement('li');//图li
        let leftBtn = document.createElement('div');//左按钮
        let rightBtn = document.createElement('div');//右按钮
        let circle_ul = document.createElement('ul');//存放圆点的ul
        this.imgDataArr.forEach((val, index) => { //遍历，根据传来的图数据，生成n个圆点
            let circle_ul_li = document.createElement('li');//圆点li
            circle_ul.appendChild(circle_ul_li);//圆点li 添加到 存放圆点的li
        })
        lunbotu_ul.appendChild(lunbotu_ul_li);//图li 添加到  存放图的ul
        this.lunbotu.appendChild(lunbotu_ul)//存放图的ul 添加到lunbotu[0]
        this.lunbotu.appendChild(leftBtn)//👈按钮 添加到 lunbotu[1]
        this.lunbotu.appendChild(rightBtn)//👉按钮 添加到 lunbotu[2]
        this.lunbotu.appendChild(circle_ul);//存放图的ul 添加到 lunbotu[3]
    }
    addStyle() {
        this.lunbotu.children[0].className = `lunbotu_ul`;
        this.lunbotu.children[1].className = `iconfont leftBtn icon-arrow-left`;
        this.lunbotu.children[2].className = `iconfont rightBtn icon-arrow-right`;
        this.lunbotu.children[3].className = `circle_ul`;
        this.lunbotu.children[0].children[0].style.background = `url(${this.imgDataArr[0].src}) center / cover`;
        this.updateCirclebyImgIndex();//初始化小圆点(根据图索引 先让第一个小圆点选中)
        this.imgDataArr.forEach((val, index) => {
            this.lunbotu.children[3].children[index].setAttribute('circle-index', index);
        })
    }
    //📕左点击函数
    //场景：点击时、定时器中
    toggleImgLeft() {
        //节流阀，限制无限点击
        this.lunbotu.children[1].addEventListener('click', () => {
            if (this.flag) {
                // 如果在图索引为0时点击了左按钮，令图的索引值为图数组索引的最后一个，反之索引--
                this.imgIndex === 0 ? this.imgIndex = this.imgDataArr.length - 1 : this.imgIndex--;
                console.log(this.imgIndex);//❌控制台打印当前图索引 用来debug
                this.updateLunbotuImg();
                this.updateCirclebyImgIndex();//图索引值变化时 更新小圆点
                this.setFlag();//设置节流阀
            }else {
                console.log('点击太快了，慢一点把');
            }
        })
    }
    //📕点击右按钮
        /* 1.图+1位
            2.小圆点+1位 */
    toggleImgRight() {
        this.lunbotu.children[2].addEventListener('click', () => {
            // 先判断距离上次点击是否超过0.3s，如果超过执行点击事件，反之控制台提醒用户点击过快
            if(this.flag){
                // 如果在图索引为图数组end时点击了右按钮，令图的索引值为图数组索引的第一个，反之索引++
                this.imgIndex === this.imgDataArr.length - 1 ? this.imgIndex = 0 : this.imgIndex++;
                console.log(this.imgIndex);//❌控制台打印当前图索引 用来debug
                this.updateLunbotuImg();
                this.updateCirclebyImgIndex();//更新小圆点
                this.setFlag();//设置节流阀
            } else {//提醒用户点击过快
                console.log('点击太快了，慢一点把');
            }
        })
    }
    // 📕图索引变化时，更新图的样式
    // 关键依赖:imgIndex变化
    // 场景(点击左按钮，右按钮，点击小圆点)
    updateLunbotuImg() {
        this.lunbotu.children[0].children[0].style.background = `url(${this.imgDataArr[this.imgIndex].src}) center / cover`;
    }
    //📕控制小圆点的点击事件
    toggleCircle() {
        // 遍历图数据数组（只为了确定循坏数量，用for循坏也可）
        this.imgDataArr.forEach((val, index) => {
            // 给每个小圆点添加一个点击事件
            this.lunbotu.children[3].children[index].addEventListener('click', () => {
                // 点击选中小圆点的自定义索引 赋值给 图索引
                this.imgIndex = parseInt(this.lunbotu.children[3].children[index].getAttribute('circle-index'));
                this.updateLunbotuImg();// 根据图索引更新图
                this.updateCirclebyImgIndex(); //根据图索引更新小圆点
            })
        })
    }
    //📕图索引值(imgIndex)变化时 更新小圆点(左右按钮，定时器)
    // 更新圆点根据图当前索引
    updateCirclebyImgIndex() {
        //清除所有小圆点背景色
        this.imgDataArr.forEach((val, index) => {
            this.lunbotu.children[3].children[index].style.backgroundColor = this.circleBgDefault;
            this.lunbotu.children[3].children[index].style.width = this.circleWidthDefault;
            this.lunbotu.children[3].children[index].style.height = this.circleWidthDefault;
        })
        //更新选中的小圆点背景色(根据实例属性imgIndex判断谁被选中)
        this.lunbotu.children[3].children[this.imgIndex].style.backgroundColor = this.circleBgChanged;
        this.lunbotu.children[3].children[this.imgIndex].style.width = this.circleWidthChanged;
        this.lunbotu.children[3].children[this.imgIndex].style.height = this.circleWidthChanged;
    }
    // 📕让图向右动起来
    // 做一个定时器，向右()
    doInterval() {
        this.Interval = setInterval(() => {
            this.lunbotu.children[2].click();//模拟左按钮的点击事件，由于点击事件内有更新小圆点函数，此处就不用再调用更新小圆点函数了
        }, this.IntervalTime)
    }
    //📕管理定时器
    manageInterval() {
        // 鼠标移入清除定时器
        //  采用mouseenter是为了防止冒泡
        this.lunbotu.addEventListener('mouseenter', () => {
            console.log('移入lunbotu清除定时器')
            clearInterval(this.Interval);
        });
        //鼠标离开开启定时器
        //  采用mouseleave是为了防止冒泡
        this.lunbotu.addEventListener('mouseleave', () => {
            console.log('移除lunbotu添加定时器')
            this.doInterval();
        })

    }
    // 📕设置节流阀(限制用户无限点击左右按钮)
    //场景：(左右按钮点击事件)
    // 注意：只控制flag的值，是否执行事件需要单独加if(this.flag)
    setFlag() {
        this.flag = false;
        setTimeout(() => {
            this.flag = true;
        }, 300)
    }
}