import { ITodoData } from "./typings";

class TodoEvent {
    private todoData: ITodoData[];
    constructor(todoData: ITodoData[]) {
        this.todoData = todoData
    }

    public addTodo(todo:ITodoData): undefined | number {
        const _todo:null | ITodoData = this.todoData.find((item:ITodoData)=> item.content===todo.content);
        if(!_todo){
            this.todoData.push(todo);
            return;
        }
        return 1001;

    }
    public removeTodo(id:number):void {
        this.todoData = this.todoData.filter((todo:ITodoData)=>todo.id !== id)

    }
    public toggleComplete(id:number):void {
        this.todoData = this.todoData.map((todo:ITodoData)=>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        })

    }
}

export default TodoEvent;