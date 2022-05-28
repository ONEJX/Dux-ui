<demo>
  常规使用
</demo>
<template>
  <div class="dux-buttonDemo">
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="text">你好</Button>
    <Button theme="link">你好</Button>
  </div>
</template>

<script lang="ts">
  import Button from "/src/lib/Button.vue";
	export default {
		name: 'ButtonCase1',
    components:{Button}
	}
</script>

<style scoped lang="scss">
.dux-buttonDemo{
  display: flex;
}
</style>