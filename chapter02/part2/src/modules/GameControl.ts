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

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
    }
}

export default GameControl;