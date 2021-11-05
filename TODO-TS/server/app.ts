import express, { Application} from 'express';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import bodyParser from 'body-parser';
import { readFile, writeFile } from './utils';
import { ITodoData } from '../src/js/typings';

const app: Application = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.all('*',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-methods','POST,GET,PUT,DELELTE,OPTIONS');
    next();
})

app.get('/todolist',function(req,res){
    console.log('进入接口')
  const todoList: string = readFile('todo.json');
  console.log(todoList);
  res.send(todoList);
})

app.post('/toggle',function(req,res){
    
})

app.post('/remove',function(req,res){
    const id:number = parseInt(req.body.id);

    let todoList: ITodoData[]= JSON.parse(readFile('todo.json') || '[]');

    todoList = todoList.filter((todo:ITodoData)=>todo.id !== id)
    writeFile('todo.json',todoList)
    res.send({
        msg:'ok',
        statusCode:'200'
    })

})

app.post('/add',function(req,res){
    
})

app.listen(8080, function(){
    console.log('Welcome to EXPRESS');
    console.log('Listening on port 8080');
})