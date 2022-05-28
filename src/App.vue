<template>
    <router-view/>
</template>

<script lang="ts">
  import {ref,provide} from 'vue'
  import router from "./router";
export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth
      const asideVisible = ref(width > 500)
      provide('xxx',asideVisible)
      if(!asideVisible.value){
          router.afterEach(()=>{
              asideVisible.value = false
          })
      }
  }
}
</script>
