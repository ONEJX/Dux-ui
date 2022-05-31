<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">
  import {ref} from 'vue'
	export default {
		name: 'install',
    props:{
		  filename:{
		  type:String,
        required:true
      }
    },
    setup(props){
		  const content = ref(null)
		  import(props.filename).then((result)=>{
        content.value = result.default
      })
      return {content}
    }
	}
</script>

<style scoped lang="scss">

</style>