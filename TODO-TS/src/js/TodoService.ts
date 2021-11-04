import $ from 'jquery';
import { ITodoData } from './typings';

export function getTodoList(
    target: any,
    methodName: string,
    descriptor: PropertyDecorator
){
//   console.log(target,methodName,descriptor);
// 保存原有的init函数
  const _origin = descriptor.value;

// 重写init函数
  descriptor.value = function(todoData:ITodoData[]){
      $.get('http://localhost:8080/todolist').then((res:string)=>{
          if(!res){
              return;
          }
          todoData = JSON.parse(res);
      }).then(()=>{
          _origin.call(this,todoData)
      })
  }
}