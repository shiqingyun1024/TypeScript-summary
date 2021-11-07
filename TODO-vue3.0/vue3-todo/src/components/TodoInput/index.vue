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
import { defineComponent,reactive,ref } from 'vue';
export default defineComponent({
  name: "TodoInput",
  setup(){
    
  }
});
</script>

<style>
</style>