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
     * */ 

    // 定义实例属性
    name:string = "孙悟空";

    // 在属性前使用static关键词可以定义类属性（静态属性）只能类本身访问的属性
    static age:number = 18;

}

const per = new Person();
console.log(per.name);
console.log(Person.age);

