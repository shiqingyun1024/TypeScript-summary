import {ITodoData} from "./js/typings";
import TodoEvent from './js/TodoEvent';
// import TodoEvent from "./js/TodoEvent";

;((doc)=>{
    const oInput: HTMLElement = document.querySelector('input');
    const oAddBtn: HTMLElement = document.querySelector('button');
    const oTodoList: HTMLElement = document.querySelector('.todo-list');

    const todoData: ITodoData[] = [
        {
            id:1,
            content:'123',
            completed:true,
        },
        {
            id:2,
            content:'234',
            completed:false,
        },
        {
            id:3,
            content:'345',
            completed:false,
        }
    ];

    const todoEvent:TodoEvent = new TodoEvent(todoData);

    const init = (): void => {
        bindEvent();
    }

    function bindEvent (): void {
        oAddBtn.addEventListener('click',handleAddBtnClick,false)
        oTodoList.addEventListener('click',handleListClick,false)
    }

    function handleAddBtnClick ():void{
        todoEvent.addTodo(<ITodoData>{
            id:4,
            content:'999',
            completed:false
        });
        console.log(todoData);
    }

    function handleListClick (e:MouseEvent):void{
        // 需要先断言一下，然后才可以使用tar.tagName；
        const tar = e.target as HTMLElement;
        const tagName = tar.tagName;
        
    }

    init();
})(document)