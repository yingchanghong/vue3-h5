<template>
  <div class="sign">
    <canvas ref="canvas" id="canvas" style="background:#f5f5f5;" :height="height" :width="width"></canvas>
    <button @click="clear">清除</button>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import sign from './sign.js';
export default {
  ...sign,
};
</script>
<style lang="less" scoped>
@import url("./sign.less");
</style>