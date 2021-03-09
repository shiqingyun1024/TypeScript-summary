// 引入样式文件
import './style/index.less'
console.log('123');

// 定义食物类Food
class Food{
    // 定义一个属性表示食物所对应的元素
    element:HTMLElement;

    constructor(){
        // 获取页面中的food元素并将其赋值给element
       this.element = document.getElementById('food')!;
    }

    // 定义一个获取食物x轴坐标的方法
    get X(){
        return this.element.offsetLeft;
    }

    // 定义一个获取食物Y轴坐标的方法
    get Y(){
        return this.element.offsetTop;
    }
}

// 测试代码
const food = new Food();
console.log(food.X,food.Y);

