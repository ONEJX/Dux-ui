<demo>
  示例五
</demo>
<template>
  <div class="dux-buttonDemo">
    <Button loading>禁用按钮</Button>
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