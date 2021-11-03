import $ from 'jquery';

export function getTodoList(
    target: any,
    methodName: string,
    descriptor: PropertyDecorator
){
  console.log(target,methodName,descriptor);
}