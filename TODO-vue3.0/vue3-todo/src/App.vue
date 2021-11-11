<template>
  <div class="wrapper">
    <todo-input></todo-input>
    <todo-list :todoList="todoList"></todo-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { Store, useStore } from 'vuex';
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
    const store:Store<any> = useStore();
    onMounted(()=>{
      setTodoList();
    })
  }
  
});
</script>

