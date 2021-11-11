<template>
  <div class="wrapper">
    <todo-input></todo-input>
    <todo-list></todo-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import TodoInput from './components/TodoInput/index.vue';
import TodoList from './components/TodoList/index.vue';
import { IUseTodo, useTodo } from './hooks';
export default defineComponent({
  name: 'App',
  components:{
    TodoInput,
    TodoList
  },
  setup(){
    const { setTodoList }:IUseTodo = useTodo();
    onMounted(()=>{
      setTodoList();
    })
  }
  
});
</script>

