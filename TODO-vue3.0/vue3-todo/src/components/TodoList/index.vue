<template>
  <div>
    <todo-item
      v-for="item of todoList"
      :key="item.id"
      :item="item"
      @removeTodo="removeTodo"
      @setStatus="setStatus"
      @setDoing="setDoing"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType } from "vue";
import { IUseTodo, useTodo } from "../../hooks";
import { ITodo } from '../../typings';
import TodoItem from "./Item.vue";
export default defineComponent({
  name: "TodoList",
  props: {
    todoList: Array as PropType<ITodo[]>,
  },
  components: {
    TodoItem,
  },
  setup() {
    const {
      removeTodo,
      setStatus,
      setDoing
    }:IUseTodo = useTodo();
  },
});
</script>

<style>
</style>