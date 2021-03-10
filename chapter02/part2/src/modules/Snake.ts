class Snake{
    // 表示蛇头的元素
    head:HTMLElement;
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection;
    // 获取蛇的容器
    element:HTMLElement;
    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    // 获取蛇的X坐标（蛇头坐标）
    get X(){
        return this.head.offsetLeft;
    }

    // 获取蛇的Y坐标
    get Y(){
        return this.head.offsetTop;
    }

    // 设置蛇头的坐标
    set X(value){
        // 如果新值和旧值相同，则直接返回不在修改
        if(this.X === value){
            return;
        }
        // X的值的合法范围0~290之间
        if(value < 0 || value > 290){
            // 进入判断说明蛇撞墙了，抛出一个异常
            throw new Error("蛇撞墙了！")
        }
        this.head.style.left = value + 'px';
    }

    set Y(value){
        // 如果新值和旧值相同，则直接返回不在修改
        if(this.Y === value){
            return;
        }
        // X的值的合法范围0~290之间
        if(value < 0 || value > 290){
            // 进入判断说明蛇撞墙了，抛出一个异常
            throw new Error("蛇撞墙了！")
        }
        this.head.style.top = value + 'px';
    }

    // 蛇增加身体的方法
    addBody(){
        // 向element中添加一个div
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
}

export default Snake;