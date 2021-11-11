<template>
  <div>
    <todo-item 
     v-for="item of todoList"
     :key = "item.id"
     :item = "item"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoItem from "./item.vue";
export default defineComponent({
  name: "TodoList",
  components: {
    TodoItem
  },
});
</script>

<style>
</style>