<demo>
  常规用法
</demo>
<template>
  <Tabs v-model:selected="selected">
    <Tab title="用户管理">用户管理</Tab>
    <Tab title="配置管理">配置管理</Tab>
    <Tab title="角色管理">角色管理</Tab>
    <Tab title="定时任务补偿">定时任务补偿</Tab>
  </Tabs>
</template>

<script lang="ts">
  import Tabs from "/src/lib/Tabs.vue";
  //开发者需要从onejx-ui库中手动引入组件 import {xxx} from 'onejx-ui'
  import Tab from "/src/lib/Tab.vue";
  import {ref} from 'vue'
  export default {
    name: 'TabsDemo',
    components:{Tabs,Tab},
    setup(){
      const selected = ref('用户管理')
      return {selected}
    }
  }
</script>