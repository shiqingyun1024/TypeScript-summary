// 引入其他的类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";


// 游戏控制器，控制其他的所有类
class GameControl{
    // 定义三个属性
    // 蛇
    snake:Snake;
    // 食物
    food:Food;
    // 记分牌
    scorePanel:ScorePanel;
    // 创建一个属性来存储蛇的移动方向（也就是按键的方向）
    direction:string="";

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    // 游戏的初始化方法，调用后游戏即开始
    init(){
        // 绑定键盘按键按下的事件 this.keydownHandler.bind(this)为什么这么写呢，因为keydownHandler谁调用，this指向谁
        // 所以第一个this指向的是document，所以用bind的方法绑定，小括号中的this指向的就是当前的这个class类了，所以这个时候keydownHandler函数里面的this指向的就是GameControl这个类了
        document.addEventListener('keydown',this.keydownHandler.bind(this));
    }
    /**
     * ArrowUp Up
     * ArrowDown Down
     * ArrowLeft Left
     * ArrowRight Right
     * */ 

    // 创建一个键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){
        // 需要检查event.key的值是否合法（用户是否按了正确的按键）
        this.direction = event.key;
    }

    // 创建一个控制蛇移动的方法
    run(){
        /**
         * 根据方向（this.direction）来使蛇的位置改变
         *    向上  top减少
         *    向下  top增加
         *    向左  left减少
         *    向右  left增加
         * */ 
    }
}

export default GameControl;