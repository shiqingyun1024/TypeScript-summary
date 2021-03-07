(function () {
    // 定义一个表示人的类
    class Person {
        // TS可以在属性前添加属性的修饰符
        /**
         * public 修饰的属性可以在任意位置访问（修改）同时也是默认值
         * private 私有属性，私有属性只能在类内部(当前类里面访问，子类不能访问)进行访问（修改）
         *        -通过在类中添加方法使得私有属性可以被外部访问
         * protected 受保护的属性，只能在当前类和当前类的子类中(也就是类里面)访问（修改）
         * 
         * */ 
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        /**
         * getter 方法用来读取属性
         * setter 方法用来设置属性
         *    - 它们被称为属性的存取器
         * 
         * */ 

        // 定义方法，用来获取name属性
        getName(){
            return this._name;
        }

        // 定义方法，用来设置name属性
        setName(value:string){
            this._name = value;
        }

        // 定义方法，用来获取age属性
        getAge(){
            return this._age;
        }

        // 定义方法，用来设置age属性
        setAge(value:number){
            if(value >= 0){
                this._age = value;
            }
        }
        // 以上四种方法都被下面的get set存取器来代替了。

        // TS中设置getter方法的方式
        get name(){
            console.log('get name()执行了！！！');
            return this._name;
        }

        set name(value:string){
            this._name = value;
        }

        get age(){
            console.log('get name()执行了！！！');
            return this._age;
        }

        set age(value:number){
            if(value >= 0){
                this._age = value;
            }
            
        }
    }

    const per = new Person('孙悟空',18);

    /**
     * 现在属性是在对象中设置的，属性可以任意的被修改
     *    属性可以任意被修改将会导致对象中的数据变得非常不安全
     * */ 
    // per._name = '猪八戒';
    // per._age = 20;
    per.setName('猪八戒');
    per.setAge(-33);

    // 相当于调用的 get name方法
    console.log(per.name);

    // protected 的使用例子
    class A{
        protected num:number;
        constructor(num:number){
            this.num = num;
        }
    }

    class B extends A{
        test(){
            console.log(this.num);
        }
    }

    const b = new B(123);
    console.log(b.test())
    // console.log(b.num)  protected 定义的属性在类外面是不能访问的
    // b.num = 33;  protected 定义的属性在类外面是不能赋值的

    // class C{
    //     name:string;
    //     age:number;
    //     constructor(name:string,age:number){
    //         this.name = name;
    //         this.age = age;
    //     }
    // }

    // 上面定义的class C 的写法等价于下面的这种方法 (语法糖)

    class C{
        constructor(public name:string,public age:number){
        }
    }

    const c = new C('c',22);
    console.log(c.name);
    console.log(c.age);
    
})()