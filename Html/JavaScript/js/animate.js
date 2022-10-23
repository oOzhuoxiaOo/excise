function animate(obj,targetLeft,callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 避免误差 速度需要取整 因为offsetLeft是整数
        var step =  (targetLeft - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(obj.offsetLeft == targetLeft) {
            clearInterval(obj.timer); 
            // if(callback)  {
            //     // 调用函数
            //     callback();
            // }
            callback && callback(); //和👆一样 短路运算 如果为true 则看右边 如果为假 则直接结束
        } else {
            // 修改此处的速度1 (targetLeft - obj.offsetLeft) / 10
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    },20)
}