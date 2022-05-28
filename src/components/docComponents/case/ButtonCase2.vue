<demo>
  示例2
</demo>
<template>
  <div class="dux-buttonDemo">
    <Button size="big">大大大</Button>
    <Button>中中中</Button>
    <Button size="small">小小小</Button>
  </div>
  <div class="dux-buttonDemo">
    <Button theme="text" size="big">大大大</Button>
    <Button theme="text">中中中</Button>
    <Button theme="text" size="small">小小小</Button>
  </div>
  <div class="dux-buttonDemo">
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">中中中</Button>
    <Button theme="link" size="small">小小小</Button>
  </div>
</template>

<script lang="ts">
  import Button from "/src/lib/Button.vue";
  export default {
    name: 'ButtonCase1',
    components:{Button}
  }
</script>