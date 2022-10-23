function animate(obj, target, callback) {
    clearInterval(obj.timer);
    // 误差原因：offsetLeft 是整数
    obj.timer = setInterval(function () {
        // 速度声明和改变要在计时器内
        let speed = (target - obj.offsetLeft) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 添加一个需要自己设置的回调函数 会在移动结束执行
            // 通过👆判断移动结束，通过if判断回调函数是否存在
            //    if(callback) {
            //     callback();
            //    }
            callback && callback();
        } else {
            // obj.innerHTML = speed;
            obj.style.left = `${obj.offsetLeft + speed}px`;
        }
    }, 20)
}