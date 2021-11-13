import { IState, ITodo } from "@/typings";
import { Commit } from "vuex";
import { SET_TODO, SET_TODO_LIST,REMOVE_TODO } from "./actionTypes";

interface ICtx{
    commit:Commit,
    state:IState
}
export default {
    [SET_TODO]({commit,state}:ICtx,todo:ITodo):void{
      commit(SET_TODO,todo);
    },
    [SET_TODO_LIST]({commit,state}:ICtx,todoList:ITodo[]):void{
      commit(SET_TODO,todoList);
    },
    [REMOVE_TODO]({commit}:ICtx,id:number):void{
      commit(REMOVE_TODO,id);
    }
}