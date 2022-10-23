
        let lis = document.querySelectorAll('li');
        let slider = document.querySelector('.slider');
        for(let i  =  0; i < lis.length; i++){
            lis[i].index = i;
            lis[i].addEventListener('click',function(){
                slider.style.transform = `translateX(${this.index + '00%'})`
            })
        }
    