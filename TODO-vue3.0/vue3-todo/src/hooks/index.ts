import store from "@/store"
import { SET_TODO, SET_TODO_LIST } from "@/store/actionTypes";
import { ITodo, TODO_STATUS, REMOVE_TODO } from "@/typings"
import { Store, useStore } from "vuex";

export interface IUseTodo {
    setTodo:(value:string)=>void;
    setTodoList:()=>void;
    removeTodo:(id:number)=>void;
    setStatus:(id:number)=>void;
    setDoing:(id:number)=>void;
}
interface IUseLocalStorage{
    getLocalList:()=> ITodo[];
    setLocalList:(todoList:ITodo[])=> void;

}
function useTodo():IUseTodo {

    const store:Store<any> = useStore();
    const { getLocalList, setLocalList }:IUseLocalStorage = useLocalStorage();
    const todoList:ITodo[] = getLocalList();
    function setTodo(value:string):void{
       const todo:ITodo = {
           id: new Date().getTime(),
           content:value,
           status:TODO_STATUS.WILLDO
       }
       store.dispatch(SET_TODO,todo)
       setLocalList(store.state.list)
    }
    function setTodoList(){
        store.dispatch(SET_TODO_LIST,todoList);
        // setLocalList(store.state.list)
    }
    function removeTodo(id:number):void{
        store.dispatch(REMOVE_TODO,id)
        setLocalList(store.state.list)
        console.log('removeTodo')
    }
    function setStatus(id:number):void{
        setLocalList(store.state.list)
        console.log('setStatus')
    }
    function setDoing(id:number):void{
        console.log('setDoing')
    }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }
}

function useLocalStorage():IUseLocalStorage {
    function getLocalList():ITodo[]{
        return JSON.parse(localStorage.getItem('todoList') || '[]')
    }

    function setLocalList (todoList:ITodo[]):void{
        localStorage.setItem('todoList',JSON.stringify(todoList))
    }
    return {
        getLocalList,
        setLocalList
    }
}

export {
    useTodo
};