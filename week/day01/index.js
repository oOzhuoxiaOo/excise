// 人 类
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    des() {
        console.log(`${this.name} is ${this.age} years old`)
    }
}

// 学生 类
class  Student extends Person {
    constructor(name,age,className) {
        super(name,age);
        this.className = className;
        
    }
    des(){
        console.log(`${this.name} is ${this.age} years old at ${this.className}`);
    }
}

//教师 类
class Teacher extends Person {
    constructor(name,age,subject,classArr) {
        super(name,age);
        this.subject = subject;
        this.classArr = classArr;
    }
    
}
// 给Teacher类的原型对象添加一个方法(是否教过某个学生)
// 方法:isteach(stu).
// 参数stu:单个学生对象
// return true ? false
Teacher.prototype.isteach = function(stu){
    // console.log(this);//this指向Teacher实例
    let bl = this.classArr.some(function(Value,index){
        return stu.className ==  Value;
    })
    return bl;
} 

let xiana = new Person('xiana','16');
// console.log('Person类的一个实例:xiana👇');
console.log(xiana);
// console.log('实例的des()方法👇')
let qiong =  new Student('qiong',16,'20软工5班');
console.log(qiong);
// console.log(xiana);
let sha = new Teacher('bai',16,'English',['20软工5班','20软工10班','20软工50班']);
console.log(sha); 

let bl = sha.isteach(qiong);
console.log(bl);//true
