import { ITodo, TODO_STATUS } from "@/typings"

interface IUseTodo {
    setTodo:(value:string)=>void;
    setTodoList:()=>void;
    removeTodo:()=>void;
    setStatus:()=>void;
    setDoing:()=>void;
}
function useTodo():IUseTodo {
    function setTodo(value:string):void{
       const todo:ITodo = {
           id: new Date().getTime(),
           content:value,
           status:TODO_STATUS.WILLDO
       }
    }
    function setTodoList(){
        
    }
    function removeTodo(){
        
    }
    function setStatus(){
        
    }
    function setDoing(){
        
    }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }
}