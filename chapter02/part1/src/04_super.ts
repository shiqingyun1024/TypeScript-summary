(function(){
    class Animal{
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
            // 在类的方法中 super就表示当前类的父类
            super.sayHello();
        }
    }
})()