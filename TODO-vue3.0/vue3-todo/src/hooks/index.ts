interface IUseTodo {
    setTodo:()=>void;
    setTodoList:()=>void;
    removeTodo:()=>void;
    setStatus:()=>void;
    setDoing:()=>void;
}
function useTodo():IUseTodo {
    function setTodo(){

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