<demo>
  示例四
</demo>
<template>
  <div class="dux-buttonDemo">
    <Button disabled>禁用按钮</Button>
    <Button theme="text" disabled>禁用文本按钮</Button>
    <Button theme="link" disabled level="danger">禁用链接按钮</Button>
  </div>
</template>

<script lang="ts">
  import Button from "/src/lib/Button.vue";
  export default {
    name: 'ButtonCase1',
    components:{Button}
  }
</script>

<style scoped lang="scss">
  .dux-buttonDemo{
    display: flex;
  }
</style>