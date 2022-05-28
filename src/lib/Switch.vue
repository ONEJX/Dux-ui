<template>
<button class="dux-switch" :class="{'dux-selected':value}" @click="toggle">
  <span></span>
</button>
</template>

<script lang="ts">
	export default {
		name: 'Switch',
    props:{
		  value:Boolean
    },
    setup(props,context){
      const toggle = ()=>{
        context.emit('update:value',!props.value)
      }
      return {toggle}
    }
	}
</script>

<style lang="scss">
.dux-switch{
  $h:28px;
  $h2:$h - 4;
  width: $h*2;
  height: $h;
  background: #818080;
  border-radius: $h/2;
  border: none;
  position: relative;
  >span{
    display: inline-block;
    background: white;
    width: $h2;
    height: $h2;
    border-radius: 50%;
    position: absolute;
    left: 2px;
    top: 2px;
    transition: all .3s;
  }
  &.dux-selected{
    background: #13CE66;
    >span{
      left: calc(100% - #{$h} + 1px);
    }
  }
}
  .dux-switch:active>span{
    width:30px;
  }
  .dux-switch.dux-selected:active>span{
    width:30px;
    margin-left: -6px;
  }
</style>