<template>
  <div class="index" @click="toSign">
    我是index-- {{name}}

  </div>
</template>
<script lang="ts">
import index from "./index";
export default {
  ...index,
};
</script>

<style lang="less"  scoped>
.index {
  color: red;
}
</style>