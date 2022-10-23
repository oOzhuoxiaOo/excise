

        let xiana = {
            name:'夏娜',
            age:18
        }
        function fn() {
            console.log(this);
        }

        // bind也能改变this指向 
        // bind不调用函数
        // return 一个改变this指向后的新函数
        let newFn = fn.bind(xiana);
        newFn();
