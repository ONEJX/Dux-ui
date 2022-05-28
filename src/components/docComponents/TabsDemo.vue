<template>
  <Demo :component="TabsCase1"/>
</template>

<script lang="ts">
  import Demo from "./Demo.vue";
  import TabsCase1 from "/src/components/docComponents/case/TabsCase1.vue";
  export default {
		name: 'TabsDemo',
    components:{Demo},
    setup(){
      return {TabsCase1}
    }
	}
</script>