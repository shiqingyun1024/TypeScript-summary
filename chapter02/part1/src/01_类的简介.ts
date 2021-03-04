// 使用class关键字来定义一个类
/**
 * 对象中主要包含了两个部分：
 *    属性
 *    对象
 * 
 * */ 
class Person{
    /**
     * 直接定义的属性是实例属性，需要通过对象的实例去访问
     *     const per = new Person()
     *     per.name
     * 
     * 使用static开头的属性是静态属性（类属性），可以直接通过类去访问
     *     Person.age
     * 
     * readonly开头的属性本身一个只读的属性，无法修改
     * 
     * */ 

    // 定义实例属性
    name:string = "孙悟空";

    // 在属性前使用static关键词可以定义类属性（静态属性）只能类本身访问的属性
    static age:number = 18;

    // readonly表示只读的属性 
    readonly home:string = 'SQ' // 祖籍商丘

    // 同时也可以组合使用 static必须在前面
    static readonly sex:string = 'male';

    // 定义方法
    sayHello(){
        console.log('hello ts');
        console.log('123');
    }

    // 定义静态方法也就是类方法
    static sayHello2(){
        console.log('hello 静态方法');
        console.log('123');
    }

}

const per = new Person();
console.log(per.name);
console.log(Person.age);
// per.home = "ss" 只读，不能修改

per.sayHello();
Person.sayHello2();

