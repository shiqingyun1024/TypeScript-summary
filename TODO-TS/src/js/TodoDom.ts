import TodoTemplate from "./TodoTemplate";
import { ITodoData } from "./typings";
import { findParentNode } from "./utils";

class TodoDom extends TodoTemplate{
    private todoWrapper:HTMLElement;
    constructor(todoWrapper:HTMLElement){
        super();
        this.todoWrapper = todoWrapper
    }

    protected addItem (todo:ITodoData){
       const oItem:HTMLElement = document.createElement('div');
       oItem.className = 'todo-item';
       oItem.innerHTML = this.todoView(todo);
       this.todoWrapper.appendChild(oItem);
    }

    protected removeItem (target:HTMLElement){
        const oParentNode:HTMLElement = findParentNode(target,'todo-item');
        oParentNode.remove();
    }

    protected changeCompleted (target: HTMLElement, completed:boolean){
        const oParentNode:HTMLElement = findParentNode(target,'todo-item');
        const oContent:HTMLElement =  oParentNode.getElementsByTagName('span')[0];
        oContent.style.textDecoration = completed ? 'line-through':'none';
    }

}

export default TodoDom;