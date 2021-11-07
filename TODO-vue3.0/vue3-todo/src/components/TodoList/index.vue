<template>
  <div>
    <h1>Todo-list</h1>
    <todo-item></todo-item>
  </div>
</template>

<script>
import TodoItem from "./Item";
export default {
  name: "TodoList",
  components: {
    TodoItem
  },
};
</script>

<style>
</style>