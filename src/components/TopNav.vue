<template>
  <div class="topNav" :style="[{background:bc},{borderBottom:bd}]">
    <div class="aside-icon" @click="toggleAside" v-if="toggleNav">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-caidan"></use>
      </svg>
    </div>
    <div class="logo">
      <router-link to="/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-chelun"></use>
        </svg>
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {inject,Ref} from 'vue'
	export default {
		name: 'TopNav',
    props:{
		  bc:{
		    type:String,
		    default:'#fff'
      },
      bd:{
		    type:String,
        default:'none'
      },
      toggleNav:{
		    type:Boolean,
        default:false
      }
    },
    setup(){
		  const asideVisible = inject<Ref<boolean>>('xxx')
      const toggleAside = ()=>{
        asideVisible.value = !asideVisible.value
      }
      return {toggleAside}
    }
	}
</script>

<style scoped lang="scss">
  .topNav{
    width: 75%;
    display: flex;
    min-height:55px;
    line-height: 55px;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 12%;
    top: 0;
    @media (max-width:800px) {
      width: 100%;
      left: 0;
    }
    > .aside-icon{
      display: none;
    }
    > .logo{
      display: flex;
      max-width: 6em;
      @media (max-width:800px) {
        margin: 0 auto;
      }
      &:hover>a{
        border-bottom: 0;
      }
    }
    > .menu{
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      >li{
        width: 50px;
        height: 50px;
        line-height: 50px;
        border:2px dotted #1EA19B;
        border-radius:25px;
        text-align: center;
        margin: 0.5em;
        color:#1EA19B;
        &:hover{
          color: #1ac1c6;
          border-color: #1ac1c6;
          >a{
            border-bottom: 0;
          }
        }
      }
    }
    @media (max-width: 800px) {
      .menu{
        display: none;
      }
      .logo{
        margin-right: 50%;
        transform:translateX(50%) ;
      }
      .aside-icon{
        display: inline-block;
        padding: 0 10px;
      }
      .aside-icon:hover{
        cursor:pointer
      }
    }
  }
</style>