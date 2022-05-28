<template>
<div class="dux-tabs">
  <div class="dux-tabs-nav" ref="container">
    <div class="dux-tabs-nav-item" :class="{selected:title===selected}"
         v-for="(title,index) in titles" @click="select(title)" :key="index"
         :ref="el=>{if(title===selected) selectedItem=el}">{{title}}</div>
    <div class="dux-tabs-nav-indicator" ref="indicator"></div>
  </div>
  <div class="dux-tabs-content">
    <component :is="current" :key="current.props.title"/>
  </div>
</div>
</template>

<script lang="ts">
  import Tab from "./Tab.vue";
  import {computed,ref,onMounted,watchEffect} from 'vue'
	export default {
		name: 'Tabs',
    props:{
		  selected:{
		    type:String,
        default: '用户管理'
      }
    },
    setup(props,context){
		  const selectedItem = ref<HTMLDivElement>(null)
      const indicator = ref<HTMLDivElement>(null)
      const container = ref<HTMLDivElement>(null)
      onMounted(()=>{
        watchEffect(()=>{
          console.log(selectedItem.value);
          const {width,left:resultLeft} = selectedItem.value.getBoundingClientRect()
          indicator.value.style.width = width + 'px'
          const {left:containerLeft} = container.value.getBoundingClientRect()
          const left = resultLeft - containerLeft
          indicator.value.style.left = left + 'px'
        })
      })
      const defaults = context.slots.default()
      const titles = defaults.map(tag=>{
        if(tag.type !== Tab){
          throw new Error('Tabs子标签必须是Tab')
        }else{
          return tag.props.title
        }
      })
      const select = (title:string)=>{
        context.emit('update:selected',title)
      }
      const current = computed(()=>{
        return defaults.filter(tag=>{
          return tag.props.title === props.selected
        })[0]
      })
      return {defaults,titles,select,selectedItem,indicator,container,current}
    }
	}
</script>

<style lang="scss">
.dux-tabs{
  display: flex;
  flex-direction: column;
  justify-content: center;
  > .dux-tabs-nav{
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px 10px 10px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #E4E7ED;
    position:relative;
    white-space: nowrap;
    >.dux-tabs-nav-item{
      margin-right: 3em;
      cursor: pointer;
      &:hover{
        color: #409eff;
      }
      &.selected{
        color: #409eff;
      }
    }
    >.dux-tabs-nav-indicator{
      height: 2px;
      position: absolute;
      left:0;
      bottom: 0;
      background: #40a9ff;
      transition: all .3s;
    }
  }
}
</style>