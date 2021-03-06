(function(){
    /**
     * 以abstract开头的类是抽象类。
     * 抽象类和
     * 
     * */ 
    abstract class Animal{
        name:string;
        constructor(name:string){
            this.name = name;
        }

        sayHello(){
            console.log('动物在叫~~');
        }
    }

    class Dog extends Animal{
        sayHello(){
            super.sayHello();
        }
    }

    let dog = new Dog("旺财");
    console.log(dog.sayHello());
    
})()