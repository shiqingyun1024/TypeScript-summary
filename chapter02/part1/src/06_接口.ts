(function(){
    // 描述一个对象的类型
    type myType = {
        name:string,
        age:number
    };
    let obj:myType = {
        name:'努力',
        age:1
    }
    /**
     * 接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
     *     同时接口也可以当成类型声明去使用
     * */ 
    interface myInterface{
        name:string;
        age:number;
    }

    interface myInterface{
        gender:string
    }

    // 定义接口的时候，可以定义多个同名的,
    // 不过在定义变量的时候，必须把多个同名接口中的定义的属性或者方法都写上，否则会报错
    const obj2:myInterface = {
        name:'加油',
        age:11,
        gender:'男'
    }

    /**
     * 接口可以在定义类的时候去限制类的结构
     *     接口中的所有属性都不能有实际的值
     *     接口只定义对象的结构，而不考虑实际值
     *     接口中所有的方法都是抽象方法
     * */ 
    interface myInterface2{
        name: string;
        sayHello():void;
    }


})();