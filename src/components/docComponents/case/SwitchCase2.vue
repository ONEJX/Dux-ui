<demo>
  支持dis
</demo>
<template>
  <Switch v-model:value="bool" />
</template>

<script lang="js">
	import Switch from "/src/lib/Switch.vue";
	import {ref} from "vue";
	export default {
		name: 'SwitchCase2',
		components:{Switch},
		setup() {
			const bool = ref(false)
			return {
				bool
			}
		}
	}
</script>