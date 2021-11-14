import { IState, ITodo } from '@/typings'
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO } from './actionTypes'
export default {
    [SET_TODO](state:IState, todo:ITodo):void{
        state.list.unshift(todo);
        console.log(state.list);
    },
    [SET_TODO_LIST](state:IState, todoList:ITodo[]):void{
        state.list = todoList;
    },
    [REMOVE_TODO](state:IState, id:number):void{
        state.list = state.list.filter((item:ITodo)=>item.id!==id);
        console.log(state.list);
    }
}