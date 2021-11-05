import $ from 'jquery';
import { ITodoData } from './typings';

export function getTodoList(
    target: any,
    methodName: string,
    descriptor: PropertyDecorator
):void{
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

export function removeTodo(
    target: any,
    methodName: string,
    descriptor: PropertyDecorator
):void{
   const _origin = descriptor.value;
   descriptor.value = function(target:HTMLElement, id:number){
     $.post('http://localhost:8080/remove',{id}).then(res=>{
         _origin.call(this,target,id)
     })
   }

}

export function toggleTodo(
    target: any,
    methodName: string,
    descriptor: PropertyDecorator
):void{
  const _origin = descriptor.value;
  descriptor.value = function(target:HTMLElement, id:number){
    $.post('http://localhost:8080/toggle',{id}).then(res=>{
        _origin.call(this,target,id)
    })
  }
}