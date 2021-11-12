<template>
<div>
  <input 
    type="checkbox"
    :checked = "item.status === FINISHED"
    @click="setStatus(item.id)"
  />
  <span
  :class="item.status === FINISHED?'line-through':''"
  >{{item.content}}</span>
  <button @click="removeTodo(item.id)">删除</button>
  <button 
    v-if="item.status!==FINISHED"
    @click="setDoing(item.id)"
    :class="item.status===DOING?'doing':'willdo'"
    >{{item.status===DOING?'正在做...':'马上做'}}</button>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "TodoItem",
});
</script>

<style>
.line-through{
  text-decoration: line-through;
}
.doing{
   background-color: #cdcdcd;
   color: #ccc;
}
.willdo{
  background-color: orange;
   color: #fff;
}
</style>