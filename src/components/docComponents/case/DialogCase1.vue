<demo>
  常规用法
</demo>
<template>
  <Button @click="toggle">点击显示</Button>
  <Dialog v-model:visible="x" :ok="f1" :cancel="f2">这里写入信息</Dialog>
</template>

<script lang="ts">
  import Dialog from "/src/lib/Dialog.vue";
  //开发者需要从onejx-ui库中手动引入组件 import {xxx} from 'onejx-ui'
  import Button from "/src/lib/Button.vue";
  import {ref} from 'vue'
  export default {
    name: 'DialogDemo',
    components:{Dialog,Button},
    setup(){
      let x = ref(false)
      const toggle = ()=>{
        x.value = !x.value
      }
      const f1 = ()=>{
        //点击确定做什么
        return false
      }
      const f2 = ()=>{
        //点击取消做什么
      }
      return {toggle,x,f1,f2}
    }
  }
</script>