<template>
  <Demo :component="DialogCase1"/>
</template>

<script lang="ts">
  import DialogCase1 from "./case/DialogCase1.vue";
  import Demo from "./Demo.vue";
  export default {
		name: 'DialogDemo',
    components:{Demo},
    setup(){
		return {DialogCase1}
		}
  }
</script>

<style scoped lang="scss">

</style>