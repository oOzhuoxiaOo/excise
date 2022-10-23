let that;
class Tab {
    constructor(id) {
        that = this;
        this.main_tab = document.querySelector(id);
        this.addbtn = this.main_tab.querySelector('.tabadd');
        this.firstnav = this.main_tab.querySelector('.firstnav');
        this.ul = this.firstnav.querySelector('ul');
        this.tab_sections = this.main_tab.querySelector('.tab-sections');
        this.init();
    }


    // 初始化页面
    init() {
        this.updateNode();
        // 切换功能 删除功能 修改功能
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;//切换功能
            this.btn_closes[i].onclick = this.deleteTab;//删除功能
            this.spans[i].ondblclick = this.editTab;//修改功能 为双击事件
            this.sections[i].ondblclick = this.editTab;//修改功能 为双击事件
        }
        // 添加功能
        this.addbtn.onclick = this.addTab;




    }


    // 更新lis和sections和x
    updateNode(){
        this.lis = this.main_tab.querySelectorAll('li');
        this.sections = this.tab_sections.querySelectorAll('section');
        this.btn_closes = this.firstnav.querySelectorAll('.icon-close');
        this.spans = this.ul.querySelectorAll('li span:first-child');
    }

    // 清除lis和sections的类
    clearClass(){
        for(let i = 0; i < that.lis.length; i++) {
            that.lis[i].className = '';
            that.sections[i].className = '';
        }

    }

    // 切换页面
    toggleTab() {
        console.log(this.index);
        that.clearClass()
        this.className = 'liactive';
        that.sections[this.index].className = 'active-block';

    }
    // 添加页面
    addTab() {
        let random = Math.random();//随机数检验是否为新页面
        that.clearClass();
        let newli = ` <li class="liactive"><span>新标签</span><span class="iconfont icon-close" title="关闭此标签页"></span></li>`;
        let newsection = `<section class="active-block">${random}</section>`;
        that.ul.insertAdjacentHTML('beforeEnd',newli);
        that.tab_sections.insertAdjacentHTML('beforeEnd',newsection);
        that.init();

    }
    // 删除页面
    deleteTab(e) { 
        e.stopPropagation();//阻止冒泡 防止触发li的切换点击事件
        let index = this.parentNode.index;
        console.log(index);
        // 删除指定lis和sections
        that.lis[index].remove(); //remove可以直接删除指定的元素
        that.sections[index].remove();
        that.init();
        if(document.querySelector('.liactive')) return; //如果删除后还存在liactive 就直接return
        //  如果删除后不存在liactive 说明删除的就是选中的 执行下面:切换下一个页面
        index--;
        // that.lis.length == 0
        // that.lis[index] && that.lis[index].click();
        if(that.lis.length >= 1) {
            index == -1 ? that.lis[index + 1].click() : that.lis[index].click();
        }
        
    }
    // 修改页面
    editTab() { 
        console.log('editTab');
        let str = this.innerHTML;
        this.innerHTML = `<input type='text' />`;
        let input = this.children[0];
        input.value = str;
        input.select();//文本框里的文字处于选中状态
        input.onblur = function(){
            this.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function(e){
            if(e.key == 'Enter'){
                this.blur();
            }
        }
    }
}
new Tab('#tab');