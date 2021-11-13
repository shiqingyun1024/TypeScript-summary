<template>
  <div>
    <input
      type="checkbox"
      :checked="item.status === FINISHED"
      @click="setStatus(item.id)"
    />
    <span :class="item.status === FINISHED ? 'line-through' : ''">{{
      item.content
    }}</span>
    <button @click="removeTodo(item.id)">删除</button>
    <button
      v-if="item.status !== FINISHED"
      @click="setDoing(item.id)"
      :class="item.status === DOING ? 'doing' : 'willdo'"
    >
      {{ item.status === DOING ? "正在做..." : "马上做" }}
    </button>
  </div>
</template>

<script lang="ts">
import { ITodo, TODO_STATUS } from "../../typings";
import { defineComponent, PropType } from "vue";
interface IStatusState {
  DOING: TODO_STATUS;
  FINISHED: TODO_STATUS;
  WILLDO: TODO_STATUS;
}
export default defineComponent({
  name: "TodoItem",
  props: {
    item: Object as PropType<ITodo>,
  },
  setup() {
    const statusState:IStatusState = {
      DOING: TODO_STATUS.DOING,
      FINISHED: TODO_STATUS.FINISHED,
      WILLDO: TODO_STATUS.WILLDO,
    };
    return {
      ...statusState,
    };
  },
});
</script>

<style>
.line-through {
  text-decoration: line-through;
}
.doing {
  background-color: #cdcdcd;
  color: #ccc;
}
.willdo {
  background-color: orange;
  color: #fff;
}
</style>