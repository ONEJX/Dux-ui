<demo>
  示例三
</demo>
<template>
  <div class="dux-buttonDemo">
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div class="dux-buttonDemo">
    <Button theme="text" level="main">主要文本按钮</Button>
    <Button theme="text">普通文本按钮</Button>
    <Button theme="text" level="danger">危险文本按钮</Button>
  </div>
  <div class="dux-buttonDemo">
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
</template>

<script lang="ts">
  import Button from "/src/lib/Button.vue";
  //开发者需要从onejx-ui库中手动引入组件 import {xxx} from 'onejx-ui'
  export default {
    name: 'ButtonCase1',
    components:{Button}
  }
</script>