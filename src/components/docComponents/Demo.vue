<template>
    <div class="demo">
      <h2>{{component.__sourceCodeTitle}}</h2>
      <div class="demo-component">
        <component :is="component"/>
      </div>
      <div class="demo-actions">
        <Button v-if="codeVisible" @click="codeVisible = !codeVisible">隐藏代码</Button>
        <Button v-else @click="codeVisible = !codeVisible">查看代码</Button>
      </div>
      <div class="demo-code" v-if="codeVisible">
        <pre class="language-html" v-html="html"/>
      </div>
    </div>
</template>

<script lang="ts">
  import Button from '../../lib/Button.vue';
  import 'prismjs';
  import 'prismjs/themes/prism.css'
  import {ref,computed} from 'vue'
  const Prism = (window as any).Prism
  export default {
    components: {
      Button
    },
    props:{
      component:{
        type:Object
      }
    },
    setup(props){
      const codeVisible = ref(false)
      const html = computed(()=>{
        return Prism.highlight(props.component.__sourceCode,Prism.languages.html,'html')
      })
      return {Prism,html,codeVisible}
    }
  }
</script>

<style lang="scss" scoped>
  $border-color: #d9d9d9;
  .demo {
    overflow-y: scroll;
    border: 1px solid $border-color;
    margin: 16px 0 32px;
    >h2 {
      width: 130%;
      font-size: 20px;
      padding: 8px 16px;
      border-bottom: 1px solid $border-color;
    }
    &-component {
      width: 130%;
      display: flex;
      padding: 16px;
    }
    &-actions {
      width: 130%;
      padding: 8px 16px;
      border-top: 1px dashed $border-color;
      border-bottom: 1px dashed $border-color;
    }
    &-code {
      width: 130%;
      padding: 8px 16px;
      >pre {
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;
      }
    }
  }
</style>