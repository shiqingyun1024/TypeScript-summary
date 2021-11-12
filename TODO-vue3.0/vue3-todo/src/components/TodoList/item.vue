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
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "TodoItem",
});
</script>

<style>
</style>