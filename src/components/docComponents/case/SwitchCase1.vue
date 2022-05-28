<demo>
  常规用法
</demo>
<template>
  <Switch v-model:value="bool" />
</template>

<script lang="js">
  import Switch from "/src/lib/Switch.vue";
  import {ref} from "vue";
	export default {
		name: 'SwitchCase1',
    components:{Switch},
		setup() {
			const bool = ref(false)
			return {
				bool
			}
		}
	}
</script>