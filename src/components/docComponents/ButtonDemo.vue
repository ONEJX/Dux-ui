<template>
  <Demo :component="ButtonCase1"/>
  <Demo :component="ButtonCase2"/>
  <Demo :component="ButtonCase3"/>
  <Demo :component="ButtonCase4"/>
  <Demo :component="ButtonCase5"/>
</template>

<script lang="ts">
	import Demo from "./Demo.vue";
	import ButtonCase1 from "./case/ButtonCase1.vue";
  import ButtonCase2 from "./case/ButtonCase2.vue";
  import ButtonCase3 from "./case/ButtonCase3.vue";
  import ButtonCase4 from "./case/ButtonCase4.vue";
  import ButtonCase5 from "./case/ButtonCase5.vue";

	export default {
		name: 'ButtonDemo',
    components:{Demo},
    setup(){
		  return {ButtonCase1,ButtonCase2,ButtonCase3,ButtonCase4,ButtonCase5}
    }
	}
</script>