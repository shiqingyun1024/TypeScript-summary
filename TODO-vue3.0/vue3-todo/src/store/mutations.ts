import { IState, ITodo } from '@/typings'
import { SET_TODO } from './actionTypes'
export default {
    [SET_TODO](state:IState, todo:ITodo):void{
        state.list.unshift(todo);
    }
}