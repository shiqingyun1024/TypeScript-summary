import { IState } from "@/typings";

export default <IState>{
    list:[]
}
/**
 * list:ITodo[]
 * 
 * ITodo
 * listItem:{
 *   id:new Date().getTime -> number
 *   content: string,
 *   status: finished/doing/willdo  -> 枚举
 * }
 * 
 * 对象的定义用type 类型 或者interface 接口，用interface的比较多点，因为interface可以继承（extends）其他的接口
 * **/ 