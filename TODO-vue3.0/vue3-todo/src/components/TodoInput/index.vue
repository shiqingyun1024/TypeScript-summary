<template>
  <div>
    <input 
       type="text"
       v-model="todoValue"
       @keyup="setTodoValue"
    />
  </div>
</template>

<script lang="ts">
// 单个数据的话，一般用ref，多个数据的话一般用reactive
import { defineComponent,reactive,ref } from 'vue';
export default defineComponent({
  name: "TodoInput",
  setup(){
    const todoValue = ref<string>('')
    const setTodoValue = (e:KeyboardEvent)=>{
      if(e.keyCode === 13 && todoValue.value.trim().length){
        // 设置数据
        todoValue.value = '';
      }
    }
    return {
      todoValue,
      setTodoValue
    }
  }
});
</script>

<style>
</style>