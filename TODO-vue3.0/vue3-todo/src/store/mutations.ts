import { IState, ITodo, TODO_STATUS } from '@/typings'
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS, SET_DOING_STATUS } from './actionTypes'
export default {
    [SET_TODO](state: IState, todo: ITodo): void {
        state.list.unshift(todo);
        console.log(state.list);
    },
    [SET_TODO_LIST](state: IState, todoList: ITodo[]): void {
        state.list = todoList;
    },
    [REMOVE_TODO](state: IState, id: number): void {
        state.list = state.list.filter((item: ITodo) => item.id !== id);
        console.log(state.list);
    },
    [SET_TODO_STATUS](state: IState, id: number): void {
        state.list = state.list.map((item: ITodo) => {
            if (item.id === id) {
                switch (item.status) {
                    case TODO_STATUS.FINISHED:
                        item.status = TODO_STATUS.WILLDO;
                        break;
                    case TODO_STATUS.WILLDO:
                        item.status = TODO_STATUS.FINISHED;
                        break;
                    default:
                        break;
                }
            }
            return item;
        });
    },
    [SET_DOING_STATUS](state: IState, id: number): void {
        state.list = state.list.map((item: ITodo) => {
            if (item.status === TODO_STATUS.DOING) {
                item.status = TODO_STATUS.WILLDO;
            }
            if (item.id === id) {
                item.status = TODO_STATUS.DOING;
            }
            return item;
        });
    },
}