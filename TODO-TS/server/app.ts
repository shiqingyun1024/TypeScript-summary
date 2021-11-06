import express, { Application} from 'express';
import bodyParser from 'body-parser';
import { fileOperation } from './utils';
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
  const todoList = fileOperation('todo.json') as string;
  res.send(todoList);
})

app.post('/toggle',function(req,res){
    const id:number = parseInt(req.body.id);
    fileOperation('todo.json',function(todoList:ITodoData[]){
        return todoList.map((todo:ITodoData)=>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        })
    })
    res.send({
        msg:'ok',
        statusCode:'200'
    })
})

app.post('/remove',function(req,res){
    const id:number = parseInt(req.body.id);
    fileOperation('todo.json',function(todoList: ITodoData[]){
        return todoList.filter((todo:ITodoData)=>todo.id !== id);
    })
    res.send({
        msg:'ok',
        statusCode:'200'
    })
})

app.post('/add',function(req,res){
    const todo: ITodoData = JSON.parse(req.body.todo);
    
})

app.listen(8080, function(){
    console.log('Welcome to EXPRESS');
    console.log('Listening on port 8080');
})